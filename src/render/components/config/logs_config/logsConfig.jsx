import ConfigPrimaryBtn from "../configPrimaryButton";

function logsConfig(){
    return(
        <div className="px-7 py-5">
            <div>
                <p className="font-roboto font-bold text-white text-[18pt]">Logs</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Settings for the logging behavior of the application.</p>
                <div className="mt-6">
                    <p className="font-roboto text-white text-[10pt]">Logging threshold</p>
                    <input type="range" className="w-72 mt-2" min="1" max="60" id="threshold_range"></input>
                    <p className="font-roboto text-white text-[8pt] mt-2">Value: /int_value/ minutes.</p>
                    {/*need to set a step value of 5 */}
                    <p className="font-roboto text-palette-gray50 text-[8pt] mt-2">To prevent repetitive logs in continuous accident frames,<br/> 
                    the system will log new detection after /int_value/ mins.</p>
                </div>
                <div className="flex flex-row-reverse mt-16 mr-3 gap-x-2">
                    <ConfigPrimaryBtn 
                        Title={"Apply"}
                    />
                </div>
            </div>
        </div>
    );
}
export default logsConfig;