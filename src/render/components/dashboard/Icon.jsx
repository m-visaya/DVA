function icon({iconImage, iconTitle, iconDescription}){
 return(
    <div className="group box-border bg-palette-white75 dark:bg-palette-gray75 hover:scale-105 hover:bg-palette-white25 h-auto w-64 rounded-2xl">
      <div className="grid grid-cols-3 flex items-center h-full py-4">
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