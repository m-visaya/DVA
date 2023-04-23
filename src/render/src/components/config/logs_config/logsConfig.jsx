import { useState, useEffect } from "react";
import ConfigPrimaryBtn from "../configPrimaryButton";

function logsConfig({ setSnackVisible }) {
  const [threshold, setThreshold] = useState(100);

  useEffect(() => {
    (async () => {
      const threshold = await getThreshold();
      if (!threshold) {
        saveThreshold();
        return;
      }
      setThreshold(threshold);
    })();
  }, []);

  const getThreshold = async () => {
    return await window.electronAPI.fetchSetting("loggingThreshold");
  };

  const saveThreshold = () => {
    window.electronAPI.saveSettings({ loggingThreshold: parseInt(threshold) });
    setSnackVisible(true)
  };

  return (
    <div className="px-7 py-5">
      <div>
        <p className="font-roboto font-bold text-palette-gray100 dark:text-palette-gray50 text-[18pt]">
          Logs
        </p>
        <p className="font-roboto text-palette-gray50 text-[8pt]">
          Settings for the logging behavior of the application.
        </p>
        <div className="mt-6">
          <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[10pt]">
            Logging threshold
          </p>
          <input
            type="range"
            className="w-72 mt-2"
            min="10"
            max="100"
            id="threshold_range"
            step="10"
            value={threshold}
            onChange={(e) => setThreshold(e.target.value)}
          ></input>
          <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[8pt] mt-2">
            Value: {threshold} minutes
          </p>
          {/*TODO need to set a step value of 5 or whatever*/}
          <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">
            To prevent repetitive logs in continuous accident frames,
            <br />
            the system will log new detection after {threshold} mins.
          </p>
        </div>
        <div className="flex flex-row-reverse mt-16 mr-3 gap-x-2">
          <div onClick={saveThreshold}>
            <ConfigPrimaryBtn Title={"Apply"} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default logsConfig;
