import ConfigPrimaryBtn from "../configPrimaryButton";
import ConfigSecondaryBtn from "../configSecondaryButton";
import SourceSelect from "./sourceSelect";

function cameraConfig(){
    return(
        <div className="px-7 py-5">
            {/* Webcam Config Process 1 of 2 */}
            <div>
                <p className="font-roboto font-bold text-palette-gray100 dark:text-palette-gray50 text-[18pt]">Camera Configuration</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Web camera source interface.</p>
                <div className="mt-5">
                    <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[10pt]">Select a source</p>
                    <div className="mt-3">
                            <select className="bg-palette-white25 dark:bg-palette-gray75 text-palette-gray100 dark:text-palette-gray50 text-[10pt] pl-3 font-roboto h-10 w-64 rounded-md cursor-pointer" name="channels" id="channels">
                                <option value="Live">Webcam 1</option>
                                <option value="File">Webcam 2</option>
                            </select>
                        <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">Webcams that are detected by the OS are displayed.</p>
                    </div>
                    <div>
                    <div className="mt-3">
                            <p className="font-roboto text-palette-gray100 dark:text-palette-gray50 text-[10pt]">Verify</p>
                            <div className="mt-2">
                                <div className="h-32 w-64 bg-palette-white25 dark:bg-palette-gray100 rounded-lg"></div>
                                <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">/webcam n/ preview.</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse mr-3 gap-x-2">
                        <ConfigPrimaryBtn 
                            Title={"Save"}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default cameraConfig;