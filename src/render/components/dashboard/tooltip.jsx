import liveIcon from "../assets/graphics/live.svg"

function tooltip(){
    return(
                <div className="box-border bg-palette-gray75 lg:h-24 lg:w-72 md:h-16 md:w-56 lg:rounded-3xl md:rounded-2xl">
                    <div className="flex justify-center h-full items-center">
                        <div className="grid grid-cols-4 lg:gap-x-4 md:gap-x-3 flex h-full items-center">
                            <div className="col-span-1">
                                <img src={liveIcon} className="lg:w-12 md:w-8"></img>  
                            </div>
                            <div className="col-span-3">
                                <p className="text-palette-gray50 font-roboto lg:text-sm md:text-xs md:my-2">View real-time feed from <br/> configured cameras.</p>
                            </div>
                        </div>
                    </div>
                </div>
        );
}
export default tooltip;