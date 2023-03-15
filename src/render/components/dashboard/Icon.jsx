function icon({iconImage, iconTitle, iconDescription}){
 return(
    <div className="box-border bg-palette-gray75 hover:bg-primary-gray h-auto w-64 rounded-2xl drop-shadow-lg">
      <div className="grid grid-cols-3 flex items-center h-full py-4">
        <div className="flex justify-center">
          <img src={iconImage} className="w-7"></img>  
        </div>
        <div className="col-span-2 mr-3">
          <p className="text-palette-gray50 font-bold font-roboto">{iconTitle}</p>
          <p className="text-palette-gray50 text-[8pt] font-roboto">{iconDescription}</p>
        </div>
      </div>
    </div>
 );
}
export default icon;