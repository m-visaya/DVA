function icon({iconImage, iconTitle}){
 return(
    <div className="box-border bg-palette-gray75 hover:bg-primary-gray h-14 w-14 rounded-2xl">
      <div className="flex justify-center h-full items-center">
        <img src={iconImage} className="w-8"></img>  
      </div>
      <div className="flex justify-center">
        <p className="text-palette-gray50 font-roboto my-2">{iconTitle}</p>
      </div>
    </div>
 );
}
export default icon;