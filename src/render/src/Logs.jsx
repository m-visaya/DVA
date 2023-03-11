import ReturnButton from "../components/returnButton";
import SecondaryBtn from "../components/secondaryButton";
import LogItem from "../components/logItem";
import ExportIcon from "../assets/graphics/export.svg";
import SearchIcon from "../assets/graphics/search.svg";

function logs(){
    // window.electronAPI.getLogs();
    // window.electronAPI.onLogsData((event, rows) => {
    //     console.log("Contents of the logs table:");
    //     console.log(rows);
    //     // Do something with the retrieved rows
    // });

    return(
        <div className="bg-palette-gray100 min-h-screen flex flex-col">
            <div className="flex justify-center pt-7">
                <div className="relative md:-left-72 lg:-left-80">
                    <ReturnButton returnTitle="Logs" to="/" />
                </div>
            </div>
            <div className="flex justify-center pt-12">
                <div className="grid grid-cols-5 gap-x-5 md:w-3/4 lg:w-[800px]">
                    <div className="grid grid-cols-3">
                        <div className="col-span-1 flex justify-center items-center">
                            <label className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">Channel:</label>
                        </div>
                        <div className="col-span-2">                        
                            <select className="bg-palette-gray75 text-white lg:text-[10pt] md:text-[8pt] font-roboto h-8 w-full rounded-md m-1 cursor-pointer drop-shadow-lg" name="channels" id="channels">
                            <option value="All">All</option>
                            <option value="Live">Live</option>
                            <option value="File">File</option>
                        </select></div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1 flex justify-center items-center">
                            <label className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">From:</label>
                        </div>
                        <div className="col-span-2">
                            <input className="bg-palette-gray75 text-palette-gray50 text-[8pt] h-8 w-full rounded-md m-1 cursor-pointer drop-shadow-lg" type="date"></input>
                        </div>
                    </div>
                    <div className="grid grid-cols-3">
                        <div className="col-span-1 flex justify-center items-center">
                            <label className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">To:</label>
                        </div>
                        <div className="col-span-2">
                            <input className="bg-palette-gray75 text-palette-gray50 text-[8pt] h-8 w-full rounded-md m-1 cursor-pointer drop-shadow-lg" type="date"></input>
                        </div>
                    </div>
                    <div className="px-3">
                        <SecondaryBtn
                        iconImage={SearchIcon} 
                        iconTitle="Search" />
                    </div>
                    <div className="px-3">
                        <SecondaryBtn
                        iconImage={ExportIcon} 
                        iconTitle="Export" />
                    </div>
                </div>
            </div>
            <div className="flex justify-center pt-6">
                <div className="grid grid-cols-6 gap-x-10 md:w-3/4 lg:w-[800px] pb-3 border-b border-palette-gray75">
                    <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">Channel</div>
                    <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">Type</div>
                    <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">Origin</div>
                    <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">Date Occured</div>
                    <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">File Path</div>
                    <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt] flex justify-center">Preview</div>
                </div>
            </div>
            <div>
                <LogItem 
                    LogChannel={"Live"}
                    LogType={"RTSP"}
                    LogOrigin={"some rtsp url path that is probably long"}
                    LogDate={"12/12/2012"}
                    LogPath={"Some path where the image is saved"}
                />
            </div>
        </div>
    )
}
export default logs;