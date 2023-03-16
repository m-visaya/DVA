import React from "react";
import CloseIcon from "../../assets/graphics/close.svg";
import Camera from "../config/camera_config/cameraConfig";

function Modal(props) {
  return (
    <div className = "static">
        <div className = "fixed h-full w-full bg-black z-10 top-0 opacity-50">
        </div>
        <div className = "fixed top-0 right-0 left-0 z-20 flex justify-center items-center h-full">
            <div className="box-border bg-secondary-gray h-[380px]  w-[400px] rounded-xl m-1 drop-shadow-lg">
                <div className="flex flex-row-reverse mt-6 mr-6">
                    <img src={CloseIcon} className="w-5"></img>  
                </div>
                <div>
                    <Camera />
                </div>

            </div>
        </div>
    </div>
  );
}

export default Modal;