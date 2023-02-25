import ReturnButton from "../components/returnButton";
import LiveDash from "../components/liveDash";
import { useRef, useState, useEffect, useCallback } from "react";
import Webcam from "react-webcam";
import * as tf from "@tensorflow/tfjs";
import "@tensorflow/tfjs-backend-webgl";

const MODEL_PATH = "./assets/model/xception_js/model.json";

function live(){

    const webcamRef = useRef(null);
    const [prediction, setPrediction] = useState("No Accident Detected");
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
            prediction = prediction[0] * 100 < 50 ? "No Accident Detected" : "Accident Detected";
            setPrediction(prediction);
            console.log(prediction);
        }
        requestAnimationFrame(predict);
        };
        predict();
  }, [webcamRef, model]);

    return(
        <div className="bg-black h-screen flex flex-col relative">
        <Webcam
        className="absolute h-full w-full"
        ref={webcamRef}
        videoConstraints={{ deviceId: devices[2]?.deviceId }}
        />
        <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
            <ReturnButton returnTitle="Live" to="/" />
        </div>
        <LiveDash 
            detectionStatus={prediction}    
        />
      </div>
    );
}
export default live;