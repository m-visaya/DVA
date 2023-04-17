import React, { useState } from "react";
import ReturnButton from "../components/common/returnButton";
import ConfigCat from "../components/config/configCategory";
import Logs from "../components/config/logs_config/logsConfig";
import Appearance from "../components/config/appearance_config/appearanceConfig";
import Camera from "../components/config/camera_config/cameraConfig";
import Snackbar from "../components/common/snackbar";

function configuration() {
  const [camera, setcamera] = useState(true);
  const [appearance, setappearance] = useState(false);
  const [logs, setlogs] = useState(false);
  const [snackVisible, setSnackVisible] = useState(false);

  return (
    <div className="bg-palette-white75 dark:bg-palette-gray100 min-h-screen flex flex-col">
      <div className="flex justify-center pt-7">
        <div className="relative md:-left-72 lg:-left-80">
          <ReturnButton returnTitle="Configure" to="/" />
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-5 gap-2 md:w-3/4 lg:w-[800px]">
          <div className="col-span-1">
            <div
              onClick={() => {
                setcamera(true), setappearance(false), setlogs(false);
              }}
            >
              <ConfigCat title={"Cameras"} />
            </div>
            <div
              onClick={() => {
                setcamera(false), setappearance(true), setlogs(false);
              }}
            >
              <ConfigCat title={"Appearance"} />
            </div>
            <div
              onClick={() => {
                setcamera(false), setappearance(false), setlogs(true);
              }}
            >
              <ConfigCat title={"Logs"} />
            </div>
          </div>
          <div className="col-span-4 row-auto ">
            <div className="box-border bg-palette-white50 dark:bg-palette-gray75 h-full w-full rounded-xl m-1">
              <div>
                {camera ? <Camera setSnackVisible={setSnackVisible}/> : null}
                {appearance ? <Appearance setSnackVisible={setSnackVisible}/> : null}
                {logs ? <Logs setSnackVisible={setSnackVisible}/> : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {snackVisible && <Snackbar setSnackVisible={setSnackVisible} text="Changes Saved"></Snackbar>}
    </div>
  );
}
export default configuration;
