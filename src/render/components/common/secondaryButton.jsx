function secondaryBtn({iconImage, iconTitle}){
    return(
        <div
        className="box-border bg-palette-white50 hover:bg-palette-white25 dark:bg-secondary-gray dark:hover:bg-primary-gray ease-in duration-200 h-8 w-full rounded-2xl m-1 cursor-pointer"
      >
        <div className="flex justify-center h-full items-center">
          <div className="grid grid-cols-4 flex h-full items-center">
            <div className="col-span-1">
              <img src={iconImage} className="lg:w-4 md:w-3"></img>
            </div>
            <div className="col-span-3">
              <p className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] lg:ml-4 md:ml-2">
                {iconTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
   }
   export default secondaryBtn;