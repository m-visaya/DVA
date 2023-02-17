import statusGreen from "../assets/statusGreen.svg"
import statusRed from "../assets/statusRed.svg"

function liveCameraStatus({cameraName}){
    return(
        <div className="grid grid-cols-4 flex h-full items-center">
            <div className="cols-span-1">
                <img src={statusGreen} className="lg:w-5 md:w-3"></img>  
            </div>
            <div className="col-span-3">
                <p className="text-white font-roboto lg:text-[12pt] md:text-[10pt] ">{cameraName}</p>
            </div>
        </div>
    );
}

export default liveCameraStatus;