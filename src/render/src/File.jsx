import ReturnButton from "../components/common/returnButton";
import FileDash from "../components/file/fileDash";
import Loading from "../components/common/loading";
import AlertModal from "../components/common/alertModal";

import { useRef, useState, useEffect } from "react";
import * as tf from "@tensorflow/tfjs";
import { addLog } from "./helper";
import "@tensorflow/tfjs-backend-webgl";
const MODEL_PATH = "./assets/model/xception_js/model.json";

function file() {
  const [prediction, setPrediction] = useState("No Accident Detected");
  const [model, setModel] = useState(null);
  const [video, setVideo] = useState(null);
  const [showAccidentModel, setShowAccidentModal] = useState(false);

  const videoRef = useRef(null);
  const frameCount = useRef(0);
  const timestamp = useRef(null);
  const frameLoop = useRef();

  useEffect(() => {
    const loadModel = async () => {
      await tf.ready();
      tf.setBackend("webgl");
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
      setVideo(null);
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
    if (video && model) {
      const predict = async () => {
        if (
          model &&
          videoRef.current &&
          videoRef.current.readyState === 4 &&
          videoRef.current.videoWidth &&
          videoRef.current.videoHeight
        ) {
          try {
            let predictOps = tf.tidy(() => {
              const img = videoRef.current;
              const tensor = tf.browser.fromPixels(img);
              const resized = tf.image.resizeBilinear(tensor, [299, 299]);
              const reshaped = resized.expandDims(0);
              const output = model.predict(reshaped).arraySync()[0];
              const conf = output[0] * 100;

              let className = "";

              if (conf >= 50 || frameCount.current) {
                if (!showAccidentModel) setShowAccidentModal(true);

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
                  "File",
                  video.name,
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
    }
  }, [video]);

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setVideo({ name: file.name, stream: URL.createObjectURL(file) });
  };

  const onVideoEnd = () => {
    videoRef.current.pause();
    cancelAnimationFrame(frameLoop.current);
    tf.disposeVariables();
    setVideo(null);
    setPrediction("No Accident Detected");
  };

  return (
    <div className="bg-black h-screen flex flex-col relative">
      {!model && <Loading message="Loading" />}

      <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton returnTitle="File" to="/" />
      </div>
      {video ? (
        <video
          ref={videoRef}
          src={video.stream}
          alt="Video file"
          className="absolute h-full w-full"
          autoPlay
          muted
          playsInline
          onEnded={onVideoEnd}
        />
      ) : (
        <input
          type="file"
          onChange={handleFileInputChange}
          accept="video/*"
          className="absolute place-self-center bg-white bottom-1/2"
        />
      )}
      <FileDash detectionStatus={prediction} />
      {showAccidentModel && (
        <AlertModal setShowAccidentModal={setShowAccidentModal} />
      )}
    </div>
  );
}

export default file;
