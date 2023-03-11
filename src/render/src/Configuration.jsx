import ReturnButton from "../components/returnButton";
import ConfigBtn from "../components/configButton";
import CameraConfig from "../components/cameraConfig";

function configuration(){

    return(
        <div className="bg-palette-gray100 h-screen flex flex-col">
            <div className="flex justify-center pt-7">
                <div className="relative md:-left-72 lg:-left-80">
                    <ReturnButton returnTitle="Configure" to="/" />
                </div>
            </div>
            <div className="flex justify-center pt-10">
                <div className="grid grid-cols-5 gap-3 md:w-3/4 lg:w-[800px]">
                    <div className="col-span-1">
                        <div><ConfigBtn 
                            iconTitle={"Cameras"}
                        /></div>
                        <div><ConfigBtn 
                            iconTitle={"Appearance"}
                        /></div>
                        <div><ConfigBtn 
                            iconTitle={"Logs"}
                        /></div>
                        <div><ConfigBtn 
                            iconTitle={"Danger Zone"}
                        /></div>
                    </div>
                    <div className="col-span-4 row-auto">
                        <div className="box-border bg-secondary-gray h-full w-full rounded-2xl m-1 cursor-pointer drop-shadow-lg">
                            <div>
                                <CameraConfig />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default configuration;