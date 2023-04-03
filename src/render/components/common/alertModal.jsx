import React from "react";
import GenericBtn from "./genericButton";

function AlertModal(props) {
  return (
    <div className = "static">
        <div className = "fixed h-full w-full bg-black z-10 top-0 opacity-50">
        </div>
        <div className = "fixed top-0 right-0 left-0 z-20 flex justify-center items-center h-full">
            <div className="box-border bg-palette-white75 dark:bg-palette-gray100 h-auto  w-[325px] rounded-xl md:scale-[0.85] lg:scale-[1]">
                <div className="grid grid-rows-2 justify-center py-5">
                    <div className="text-red-500 font-bold font-roboto text-[16pt]">Accident Detected</div>
                    <div className="text-palette-gray75 dark:text-palette-gray50 font-roboto text-[10pt]">An accident have been detected. <br/> Details saved in logs.</div>
                    <div className="grid grid-cols-2 gap-x-3 w-64 mt-3">
                        <div>
                            <GenericBtn
                        iconTitle={"View Logs"}
                        /></div>
                        <div>
                            <GenericBtn
                        iconTitle={"Continue (60s)"}
                        /></div>
                        
                    </div>
                </div>

            </div>
        </div>
    </div>
  );
}

export default AlertModal;