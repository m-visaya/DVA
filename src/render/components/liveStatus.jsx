import LiveCameraStatus from "./liveCameraStatus";

function liveStatus(){
    return(
        <div>
            <div className="flex">
                <div className="grid grid-rows-5 gap-y-2">
                <p className="font-roboto text-white lg:text-[16pt] md:text-[12pt]"> Camera Status</p>
                <LiveCameraStatus
                    cameraName="CAM 1"
                />
                <LiveCameraStatus
                    cameraName="CAM 2"
                />
                <LiveCameraStatus
                    cameraName="CAM 3"
                />
                <LiveCameraStatus
                    cameraName="CAM 4"
                />
                </div>
            </div>            
        </div>
    );
}

export default liveStatus;