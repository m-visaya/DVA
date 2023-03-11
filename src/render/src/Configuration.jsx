import ReturnButton from "../components/returnButton";

function configuration(){

    return(
        <div className="bg-palette-gray100 h-screen flex flex-col">
            <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
                <ReturnButton returnTitle="Configuration" to="/" />
            </div>
            <div className="flex justify-center h-full items-center">
                
            </div>
        </div>
    )
}
export default configuration;