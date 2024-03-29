function icon({iconImage, iconTitle, iconDescription}){
 return(
    <div className="group box-border bg-palette-white50 dark:bg-palette-gray75 ease-in-out duration-200 hover:bg-palette-white25 hover:dark:bg-palette-gray80 h-[88px] w-[256px] rounded-2xl xl:scale-125">
      <div className="grid grid-cols-3 flex items-center h-full p-4">
        <div className="flex justify-center">
          <img src={iconImage} className="w-8"></img>  
        </div>
        <div className="col-span-2 mr-3">
          <p className="text-palette-gray100 dark:text-palette-gray50 font-bold font-roboto">{iconTitle}</p>
          <p className="text-palette-gray100 dark:text-palette-gray50 text-[8pt] font-roboto">{iconDescription}</p>
        </div>
      </div>
    </div>
 );
}
export default icon;