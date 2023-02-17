import returnIcon from "../assets/return.svg"

function returnButton({returnTitle}){
    return(
        <div className="flex">
            <div className="grid grid-cols-4 lg:gap-x-4 md:gap-x-3 flex h-full items-center">
                <div className="col-span-1">
                    <img src={returnIcon} className="lg:w-8 md:w-6"></img>  
                </div>
                <div className="col-span-3">
                    <p className="text-white font-roboto font-bold md:text-xl lg:text-2xl md:my-2">{returnTitle}</p>
                </div>
            </div>
        </div>
        );
}
export default returnButton;