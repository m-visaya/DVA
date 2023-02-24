import FileStatus from "./fileStatus";
import LogButton from "./logButton";
import { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";

const MODEL_PATH = "./assets/model/xception_js/model.json";

function fileDash() {
  const webcamRef = useRef(null);
  const [prediction, setPrediction] = useState("Non Accident");
  const [model, setModel] = useState(null);
  const [devices, setDevices] = useState([]);

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  useEffect(() => {
    const loadModel = async () => {
      const model = await tf.loadGraphModel(MODEL_PATH);
      setModel(model);
      console.log("model loaded");
    };
    loadModel();
  }, []);

  useEffect(() => {
    const predict = async () => {
      if (
        model &&
        webcamRef.current &&
        webcamRef.current.video.readyState === 4
      ) {
        const img = webcamRef.current.video;
        const tensor = tf.browser.fromPixels(img);
        const resized = tf.image.resizeBilinear(tensor, [299, 299]);
        const reshaped = resized.expandDims(0);
        let prediction = model.predict(reshaped).arraySync()[0];
        prediction = prediction[0] * 100 < 50 ? "Non Accident" : "Accident";
        setPrediction(prediction);
        console.log(prediction);
      }
      requestAnimationFrame(predict);
    };
    predict();
  }, [webcamRef, model]);

  return (
    <>
      <Webcam
        className="absolute h-screen w-screen"
        ref={webcamRef}
        videoConstraints={{ deviceId: devices[2]?.deviceId }}
      />
      <h1 className="absolute text-white text-xl top-0 left-1/2">
        {" "}
        {prediction}{" "}
      </h1>
      <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 box-border bg-palette-gray75 lg:h-24 lg:w-[28rem] md:h-16 md:w-72 lg:rounded-3xl md:rounded-2xl">
        <div className="flex justify-center h-full items-center">
          <div className="grid grid-cols-2 lg:gap-x-10 md:gap-x-4 h-full items-center">
            <div>
              <FileStatus />
            </div>
            <div>
              <LogButton />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default fileDash;
