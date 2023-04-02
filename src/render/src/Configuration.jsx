
import ReturnButton from "../components/common/returnButton";
import ConfigCat from "../components/config/configCategory";
import Logs from "../components/config/logs_config/logsConfig";
import Appearance from "../components/config/appearance_config/appearanceConfig";
import Camera from "../components/config/camera_config/cameraConfig";

function configuration(){

    return(
        <div className="bg-palette-white75 dark:bg-palette-gray100 min-h-screen flex flex-col">
            <div className="flex justify-center pt-7">
                <div className="relative md:-left-72 lg:-left-80">
                    <ReturnButton returnTitle="Configure" to="/" />
                </div>
            </div>
            <div className="flex justify-center pt-10">
                <div className="grid grid-cols-5 gap-2 md:w-3/4 lg:w-[800px]">
                    <div className="col-span-1">
                        <div><ConfigCat 
                            title={"Cameras"}
                        /></div>
                        <div><ConfigCat
                            title={"Appearance"}
                        /></div>
                        <div><ConfigCat
                            title={"Logs"}
                        /></div>
                    </div>
                    <div className="col-span-4 row-auto ">
                        <div className="box-border bg-palette-white50 dark:bg-palette-gray75 h-full w-full rounded-xl m-1">
                            <div>
                                <Camera />
                                {/* <Appearance /> */}
                                {/* <Logs /> */}

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default configuration;