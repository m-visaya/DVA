import React from "react";
import CloseIcon from "../../assets/graphics/close.svg";
import Camera from "../config/camera_config/cameraConfig";

function Modal({ setInitialSetup }) {
  return (
    <div className="static">
      <div className="fixed h-full w-full bg-black z-10 top-0 opacity-50"></div>
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center items-center h-full">
        <div className="box-border bg-palette-white75 dark:bg-palette-gray100 h-auto  w-[400px] rounded-xl md:scale-[0.85] lg:scale-[1]">
          <div className="flex flex-row-reverse mt-6 mr-6"></div>
          <div className="p-5">
            <Camera setInitialSetup={setInitialSetup} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
