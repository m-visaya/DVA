// import ConfigPrimaryBtn from "../configPrimaryButton";
// import ConfigSecondaryBtn from "../configSecondaryButton";
import SourceSelect from "./sourceSelect";

function cameraConfig(){
    return(
        <div className="px-7 py-5">
            {/* Camera Select Source Process 0 */}
            <div>
                <p className="font-roboto font-bold text-white text-[18pt]">Cameras</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Add RTSP camera or a webcam source.</p>
                <div className="mt-3">
                    <p className="font-roboto text-white text-[10pt]">Register a camera</p>
                    <div className="grid grid-cols-2 gap-x-3 mt-2">
                        <SourceSelect 
                            Title={"Add RTSP camera"}
                        />
                        <SourceSelect 
                            Title={"Select from source"}
                        />
                        
                    </div>
                </div>
            </div>

            {/* RTSP Config Process 1 of 2 */}
            {/* <div>
                <p className="font-roboto font-bold text-white text-[18pt]">RTSP Configuration</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Close Circuit television interface.</p>
                <div className="mt-5">
                    <p className="font-roboto text-white text-[10pt]">RTSP Link</p>
                    <div className="mt-3">
                        <input type="text" className="h-10 w-80 text-[10pt] pl-3 text-white font-roboto bg-palette-gray100 rounded-lg"></input>
                        <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">Please provide a valid RTSP or HTTP streaming links.</p>
                    </div>
                    <div className="flex flex-row-reverse mt-24 mr-3 gap-x-2">
                        <ConfigPrimaryBtn 
                            Title={"Next"}
                        />
                        <ConfigSecondaryBtn 
                            Title={"Back"}
                        />
                    </div>
                </div>
            </div> */}

            {/* RTSP Config Process 2 of 2 */}
            {/* <div>
                <p className="font-roboto font-bold text-white text-[18pt]">RTSP Configuration</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Close Circuit television interface.</p>
                <div className="mt-3">
                    <p className="font-roboto text-white text-[10pt]">Verify</p>
                    <div className="mt-2">
                        <div className="h-32 w-64 bg-palette-gray100 rounded-lg"></div>
                        <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">Stream preview from rtsp://address/.</p>
                    </div>
                    <div className="flex flex-row-reverse mt-5 mr-3 gap-x-2">
                        <ConfigPrimaryBtn 
                            Title={"Save"}
                        />
                        <ConfigSecondaryBtn 
                            Title={"Back"}
                        />
                    </div>
                </div>
            </div> */}

            {/* Webcam Config Process 1 of 2 */}
            {/* <div>
                <p className="font-roboto font-bold text-white text-[18pt]">Webcam Configuration</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Web camera source interface.</p>
                <div className="mt-5">
                    <p className="font-roboto text-white text-[10pt]">Select a source</p>
                    <div className="mt-3">
                            <select className="bg-palette-gray100 text-white text-[10pt] pl-3 font-roboto h-10 w-80 rounded-md cursor-pointer drop-shadow-lg" name="channels" id="channels">
                                <option value="Live">Webcam 1</option>
                                <option value="File">Webcam 2</option>
                            </select>
                        <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">Webcams that are detected by the OS are displayed.</p>
                    </div>
                    <div className="flex flex-row-reverse mt-24 mr-3 gap-x-2">
                        <ConfigPrimaryBtn 
                            Title={"Next"}
                        />
                        <ConfigSecondaryBtn 
                            Title={"Back"}
                        />
                    </div>
                </div>
            </div> */}

            {/* Webcam Config Process 2 of 2 */}
            {/* <div>
                <p className="font-roboto font-bold text-white text-[18pt]">Webcam Configuration</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Web camera source interface.</p>
                <div className="mt-3">
                    <p className="font-roboto text-white text-[10pt]">Verify</p>
                    <div className="mt-2">
                        <div className="h-32 w-64 bg-palette-gray100 rounded-lg"></div>
                        <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">/webcam n/ preview.</p>
                    </div>
                    <div className="flex flex-row-reverse mt-5 mr-3 gap-x-2">
                        <ConfigPrimaryBtn 
                            Title={"Save"}
                        />
                        <ConfigSecondaryBtn 
                            Title={"Back"}
                        />
                    </div>
                </div>
            </div> */}
        </div>
    );
}

export default cameraConfig;