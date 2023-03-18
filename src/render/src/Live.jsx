import ReturnButton from "../components/common/returnButton";
import LiveDash from "../components/live/liveDash";
import Loading from "../components/common/loading";

import { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";

const MODEL_PATH = "./assets/model/xception_js/model.json";

function live() {
  const webcamRef = useRef(null);
  const [prediction, setPrediction] = useState("No Accident Detected");
  const [model, setModel] = useState(null);
  const [devices, setDevices] = useState([]);
  const [device, setDevice] = useState();
  const [ready, setReady] = useState(false);

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
    setDevice(devices[0]?.deviceId);
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
    const predict = () => {
      if (
        model &&
        webcamRef.current &&
        webcamRef.current.video.readyState === 4
      ) {
        try {
          const img = webcamRef.current.video;
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

            window.electronAPI.getLogs();
            window.electronAPI.onLogsData((event, rows) => {
              console.log("Contents of the logs table:");
              console.log(rows);
              // Do something with the retrieved rows
            });
          }

          setPrediction(prediction);
          console.log(prediction, conf);
        } catch (error) {}
      }
      requestAnimationFrame(predict);
    };
    predict();
  }, [webcamRef, model]);

  return (
    <div className="bg-black h-screen flex flex-col relative">
      <div className="ml-auto z-10 absolute right-0">
        <label className="text-white mr-3">Camera Source</label>
        <select value={device} onChange={(e) => setDevice(e.target.value)}>
          {devices.map((option) => (
            <option value={option.deviceId}>{option.label}</option>
          ))}
        </select>
      </div>
      {model && ready ? null : <Loading message="Loading Model..." />}
      <Webcam
        className="absolute h-full w-full"
        ref={webcamRef}
        videoConstraints={{ deviceId: device }}
        onUserMedia={() => setReady(true)}
      />
      <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton returnTitle="Live" to="/" />
      </div>
      <LiveDash detectionStatus={prediction} />
    </div>
  );
}
export default live;
