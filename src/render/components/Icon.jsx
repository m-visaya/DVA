import icon from "../assets/live.svg"

function Icon(){
 return(
    <div className="box-border bg-palette-gray75 h-24 w-24 rounded-3xl">
      <div className="flex justify-center h-full items-center">
        <img src={icon} className="w-12"></img>  
      </div>
      <div className="flex justify-center">
        <p className="text-palette-gray50 font-roboto text-2xl my-2">Live</p>
      </div>
    </div>
 );
}
export default Icon;