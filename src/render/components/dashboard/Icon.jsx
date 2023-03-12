function icon({iconImage, iconTitle}){
 return(
    <div className="box-border bg-palette-gray75 hover:bg-primary-gray lg:h-24 lg:w-24 md:h-14 md:w-14 lg:rounded-3xl md:rounded-2xl">
      <div className="flex justify-center h-full items-center">
        <img src={iconImage} className="lg:w-12 md:w-8"></img>  
      </div>
      <div className="flex justify-center">
        <p className="text-palette-gray50 font-roboto lg:text-2xl md:my-2">{iconTitle}</p>
      </div>
    </div>
 );
}
export default icon;