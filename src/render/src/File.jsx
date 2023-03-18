import ReturnButton from "../components/common/returnButton";
import FileDash from "../components/file/fileDash";
import Loading from "../components/common/loading";

import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import { fireNotification } from "./helper";

const MODEL_PATH = "./assets/model/xception_js/model.json";

function file() {
  const [prediction, setPrediction] = useState("No Accident Detected");
  const [model, setModel] = useState(null);
  const [video, setVideo] = useState(null);

  const videoRef = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(MODEL_PATH);
      setModel(model);
      console.log("model loaded");
    };
    loadModel();
  }, []);

  useEffect(() => {
    if (video) {
      const predict = async () => {
        if (model && videoRef.current && videoRef.current.readyState === 4) {
          try {
            const img = videoRef.current;
            const tensor = tf.browser.fromPixels(img);
            const resized = tf.image.resizeBilinear(tensor, [299, 299]);
            const reshaped = resized.expandDims(0);
            let prediction = model.predict(reshaped).arraySync()[0];
            let conf = prediction * 100;
            if (prediction[0] * 100 < 50) {
              prediction = "No Accident Detected";
            } else {
              prediction = "Accident Detected";

              const canvas = document.createElement("canvas");
              canvas.width = img.videoWidth;
              canvas.height = img.videoHeight;
              canvas
                .getContext("2d")
                .drawImage(img, 0, 0, canvas.width, canvas.height);
              const imageDataURL = canvas.toDataURL();

              window.electronAPI.addLog({
                channel: "Live",
                type: "RTSP",
                origin: "rtsp://10.23.12.34:80",
                imageDataURL: imageDataURL,
              });
            }

            setPrediction(prediction);
            console.log(prediction, conf);
          } catch (error) {}
        }
        requestAnimationFrame(predict);
      };
      predict();
    } else {
    }
  }, [video, model]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setVideo(URL.createObjectURL(file));
  };

  return (
    <div className="bg-black h-screen flex flex-col relative">
      {!model && <Loading message="Loading Model..." />}
      <input
        type="file"
        onChange={handleFileInputChange}
        accept="video/*"
        className="ml-auto z-10 absolute top-0 right-0"
      />
      <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton returnTitle="File" to="/" />
      </div>
      {video && (
        <video
          ref={videoRef}
          src={video}
          alt="Video file"
          className="absolute h-full w-full"
          autoPlay
          muted
          playsInline
        />
      )}
      <FileDash detectionStatus={prediction} />
    </div>
  );
}

export default file;
