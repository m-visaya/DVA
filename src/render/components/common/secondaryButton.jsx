function secondaryBtn({iconImage, iconTitle}){
    return(
        <div
        className="box-border bg-secondary-gray hover:bg-primary-gray h-8 w-full rounded-2xl m-1 cursor-pointer drop-shadow-lg"
      >
        <div className="flex justify-center h-full items-center">
          <div className="grid grid-cols-4 flex h-full items-center">
            <div className="col-span-1">
              <img src={iconImage} className="lg:w-4 md:w-3"></img>
            </div>
            <div className="col-span-3">
              <p className="text-white font-roboto lg:text-[10pt] md:text-[8pt] lg:ml-4 md:ml-2">
                {iconTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
   }
   export default secondaryBtn;