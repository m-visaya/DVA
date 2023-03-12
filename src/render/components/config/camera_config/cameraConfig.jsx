import SourceSelect from "./sourceSelect";

function cameraConfig(){
    return(
        <div className="px-7 py-5">
            {/* <div>
                <p className="font-roboto font-bold text-white text-[18pt]">Cameras</p>
                <p className="font-roboto text-palette-gray50 text-[10pt]">Add RTSP camera or a webcam source.</p>
                <div className="mt-5">
                    <p className="font-roboto text-white text-[10pt]">Register a camera</p>
                    <div className="grid grid-cols-2 gap-x-3 mt-3">
                        <SourceSelect 
                            Title={"Add RTSP camera"}
                        />
                        <SourceSelect 
                            Title={"Select from source"}
                        />
                        
                    </div>
                </div>
            </div> */}
            <div>
                <p className="font-roboto font-bold text-white text-[18pt]">RTSP Configuration</p>
                <p className="font-roboto text-palette-gray50 text-[10pt]">Close Circuit television interface.</p>
                <div className="mt-5">
                    <p className="font-roboto text-white text-[10pt]">RTSP Link</p>
                    <div className="mt-3">
                        <input type="text" className="h-10 w-80 text-[10pt] pl-3 text-white font-roboto bg-palette-gray100 rounded-lg"></input>
                        <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">Please provide a valid RTSP or HTTP streaming links.</p>
                    </div>
                    <div>

                    </div>
                </div>
            </div>

            
        
        </div>
    );
}

export default cameraConfig;