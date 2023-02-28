import ReturnButton from "../components/returnButton";
import FileDash from "../components/fileDash";
import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import { fireNotification } from "./helper";

const MODEL_PATH = "./assets/model/xception_js/model.json";

function file() {
  const [prediction, setPrediction] = useState("No Accident Detected");
  const [model, setModel] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(MODEL_PATH);
      setModel(model);
      console.log("model loaded");
    };
    loadModel();
  }, []);

  const loadImage = async () => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const img = new Image();
        img.onload = () => {
          resolve(tf.browser.fromPixels(img));
        };
        img.onerror = (error) => {
          reject(error);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  };

  const predict = async () => {
    if (model && file) {
      const tensor = await loadImage();
      const resized = tf.image.resizeBilinear(tensor, [299, 299]);
      const reshaped = resized.expandDims(0);
      let prediction = model.predict(reshaped).arraySync()[0];
      const conf = prediction * 100;
      prediction =
        prediction[0] * 100 < 50 ? "No Accident Detected" : "Accident Detected";
      setPrediction(prediction);
      console.log(prediction, conf);
    }
  };

  useEffect(() => {
    if (prediction == "Accident Detected") {
      fireNotification(
        "DVA",
        "An accident has been detected",
        "assets/statusRed.svg"
      );
    }
  }, [prediction]);

  useEffect(() => {
    predict();
  }, [file]);

  return (
    <div className="bg-black h-screen flex flex-col relative">
      <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton returnTitle="File" to="/" />
      </div>
      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
        accept="image/*"
        className="ml-auto z-10"
      />
      {file && (
        <img
          src={URL.createObjectURL(file)}
          alt="Image file"
          className="absolute h-full w-full"
        />
      )}

      <FileDash detectionStatus={prediction} />
    </div>
  );
}

export default file;
