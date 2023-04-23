import ReturnButton from "./components/common/returnButton";
import LiveDash from "./components/live/liveDash";
import Loading from "./components/common/loading";
import AlertModal from "./components/common/alertModal";

import { useRef, useState, useEffect } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";
import { addLog } from "./helper";
import { DateTime } from "luxon";

const MODEL_PATH = "./model/xception_js/model.json";

function live() {
  const webcamRef = useRef(null);
  const [prediction, setPrediction] = useState("No Accident Detected");
  const [model, setModel] = useState(null);
  const [device, setDevice] = useState();
  const [ready, setReady] = useState(false);
  const [showAccidentModel, setShowAccidentModal] = useState(false);

  const frameCount = useRef(0);
  const timestamp = useRef(null);
  const frameLoop = useRef();
  const threshold = useRef(null);

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      tf.setBackend("webgl");

      const defaultCamera = await window.electronAPI.fetchSetting(
        "defaultCamera"
      );
      if (defaultCamera) setDevice(defaultCamera);

      const model = await tf.loadGraphModel(MODEL_PATH);
      setModel(model);

      // model warmup
      tf.tidy(() => {
        const dummyTensor = tf.zeros([1, 299, 299, 3]);
        model.predict(dummyTensor);
      });
      console.log("model loaded");
    };
    if (!model) loadModel();
    return () => {
      setModel(null);
      webcamRef.current = null;
      tf.disposeVariables();
      cancelAnimationFrame(frameLoop.current);
    };
  }, []);

  useEffect(() => {
    return () => {
      if (model) {
        model.dispose();
      }
    };
  }, [model]);

  useEffect(() => {
    const predict = () => {
      if (
        model &&
        webcamRef.current &&
        webcamRef.current.video.readyState === 4
      ) {
        try {
          let predictOps = tf.tidy(() => {
            const img = webcamRef.current.video;
            const tensor = tf.browser.fromPixels(img);
            const resized = tf.image.resizeBilinear(tensor, [299, 299]);
            const reshaped = resized.expandDims(0);
            const output = model.predict(reshaped).arraySync()[0];
            const conf = output[0] * 100;

            let className = "";

            if (conf >= 50 || frameCount.current) {
              showAccidentModelonThreshold();

              className = "Accident Detected";

              timestamp.current =
                frameCount.current === 0 ? new Date() : timestamp.current;

              const canvas = document.createElement("canvas");
              canvas.width = img.videoWidth;
              canvas.height = img.videoHeight;
              canvas
                .getContext("2d")
                .drawImage(img, 0, 0, canvas.width, canvas.height);

              const frameDataURL = canvas.toDataURL();
              addLog(
                "Live",
                device?.[1],
                frameDataURL,
                frameCount.current + 1,
                timestamp.current
              );
              frameCount.current = (frameCount.current + 1) % 10;
            } else {
              className = "No Accident Detected";
            }

            setPrediction(className);
            console.log(className, conf);
          });
          tf.dispose(predictOps);
          tf.disposeVariables();
        } catch (error) {
          console.log(error);
        }
      }
      frameLoop.current = requestAnimationFrame(predict);
    };
    predict();
  }, [model]);

  const showAccidentModelonThreshold = async () => {
    if (threshold.current === null) {
      setShowAccidentModal(true);
      threshold.current = DateTime.now().plus({
        minutes: await window.electronAPI.fetchSetting("loggingThreshold"),
      });
    }

    if (threshold.current < DateTime.now()) threshold.current = null;
  };

  return (
    <div className="bg-black h-screen flex flex-col relative">
      {model && ready ? null : <Loading message="Loading" />}
      <Webcam
        className="absolute h-full w-full"
        ref={webcamRef}
        videoConstraints={{ deviceId: device?.[0] }}
        onUserMedia={() => setReady(true)}
      />
      <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton returnTitle="Live" to="/" />
      </div>
      <LiveDash detectionStatus={prediction} ready={ready} />
      {showAccidentModel && (
        <AlertModal setShowAccidentModal={setShowAccidentModal} />
      )}
    </div>
  );
}
export default live;
