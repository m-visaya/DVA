import ConfigPrimaryBtn from "../configPrimaryButton";

function appearanceConfig(){
    return(
        <div className="px-7 py-5">
            <div>
                <p className="font-roboto font-bold text-white text-[18pt]">Appearance</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Settings for the general appearance of the application.</p>
                <div className="mt-6">
                    <div className="flex">
                        <div>
                        <p className="font-roboto text-white text-[10pt]">Dark Mode</p>
                        <p className="font-roboto text-palette-gray50 text-[8pt]">Enable / Disable dark mode theme.</p>
                        </div>
                        <input type="checkbox" className="ml-32" />
                    </div>
                </div>
                <div className="flex flex-row-reverse mt-36 mr-3 gap-x-2">
                        <ConfigPrimaryBtn 
                            Title={"Apply"}
                        />
                </div>
                
            </div>
        </div>
    );
}
export default appearanceConfig;