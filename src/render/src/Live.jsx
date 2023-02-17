import ReturnButton from "../components/returnButton"
import LiveStatus from "../components/liveStatus"
import logsIcon from "../assets/logs.svg"

function live(){
    return(
        <div className="grid grid-cols-4 grid-rows-2 h-screen flex">
            <div className="bg-palette-gray100 row-span-2 2xl:px-10 lg:px-8 md:px-6">
                <div className="place-items-start mt-5">
                    <ReturnButton 
                    returnTitle="Live"
                    />
                </div>
                <div className="md:pt-4">
                    <LiveStatus />
                </div>
                <div className="md:pt-4">
                    <div className="box-border bg-palette-gray75 lg:h-24 2xl:w-80 lg:w-full md:h-16 md:w-full lg:rounded-2xl md:rounded-xl">
                        <div className="flex pl-4 h-full items-center">
                            <div className="grid grid-cols-4 flex h-full items-center">
                                <div className="cols-span-1">
                                    <img src={logsIcon} className="lg:w-6 md:w-4"></img>  
                                </div>
                                <div className="col-span-3">
                                    <p className="text-white font-roboto lg:text-[12pt] md:text-[8pt] ">View Logs</p>
                                    <p className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[7pt]">Review detected accidents</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
                    
            </div>
            <div className="col-span-3 row-span-2 bg-black">
                <div className="grid grid-cols-2 row-span-2 h-full">
                    <div className="border-b border-r  border-palette-gray75"></div>
                    <div className="border-b  border-palette-gray75"></div>
                    <div className="border-r  border-palette-gray75"></div>
                    <div></div>
                </div>
            </div>
        </div>
    );
}
export default live;