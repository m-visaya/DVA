import ConfigPrimaryBtn from "../configPrimaryButton";
import ConfigSecondaryBtn from "../configSecondaryButton";
import SourceSelect from "./sourceSelect";
import { useEffect, useCallback, useState, useRef } from "react";
import Webcam from "react-webcam";

function cameraConfig({ setInitialSetup }) {
  const [devices, setDevices] = useState([]);
  const [device, setDevice] = useState();
  const webcamRef = useRef(null);

  const handleDevices = useCallback(
    (mediaDevices) =>
      setDevices(mediaDevices.filter(({ kind }) => kind === "videoinput")),
    [setDevices]
  );

  useEffect(() => {
    navigator.mediaDevices.enumerateDevices().then(handleDevices);
  }, [handleDevices]);

  useEffect(() => {
    (async () => {
      const defaultCamera = await window.electronAPI.fetchSetting(
        "defaultCamera"
      );
      if (defaultCamera) setDevice(defaultCamera);
    })();
  }, []);

  const handleSaveSettings = () => {
    const prefs = {
      defaultCamera: device ?? devices[0]?.deviceId,
    };
    window.electronAPI.saveSettings(prefs);

    if (setInitialSetup) setInitialSetup(false);
  };

  return (
    <div className="px-7 py-5">
      <div>
        <p className="font-roboto font-bold text-palette-gray100 dark:text-palette-gray50 text-[18pt]">
          Camera Configuration
        </p>
        <p className="font-roboto text-palette-gray50 text-[8pt]">
          Web camera source interface.
        </p>
        <div className="mt-5">
          <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[10pt]">
            Select a source
          </p>
          <div className="mt-3">
            <select
              className="bg-palette-white25 dark:bg-palette-gray100 text-palette-gray100 dark:text-palette-gray50 text-[10pt] pl-3 font-roboto h-10 w-64 rounded-md cursor-pointer"
              name="channels"
              id="channels"
              value={device}
              onChange={(e) => setDevice(e.target.value)}
            >
              {devices.map((option) => (
                <option value={option.deviceId} key={option.label}>
                  {option.label}
                </option>
              ))}
            </select>
            <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">
              Webcams that are detected by the OS are displayed.
            </p>
          </div>
          <div>
            <div className="mt-3">
              <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[10pt]">
                Verify
              </p>
              <div className="mt-2">
                <Webcam
                  className="h-32 w-64 object-cover rounded-md"
                  ref={webcamRef}
                  videoConstraints={{ deviceId: device }}
                  onUserMedia={() => setReady(true)}
                />
              </div>
            </div>
          </div>
          <div className="flex flex-row-reverse gap-x-2 mt-10">
            <div onClick={handleSaveSettings}>
              <ConfigPrimaryBtn Title={"Save"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default cameraConfig;
