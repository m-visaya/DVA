function genericBtn({iconImage, iconTitle}){
    return(
        <div
        className="box-border bg-palette-white25 dark:bg-secondary-gray ease-in duration-200 hover:bg-palette-gray25 dark:hover:bg-primary-gray h-10 w-full rounded-2xl m-1 cursor-pointer"
      >
        <div className="flex justify-center h-full items-center">
          <div className="flex h-full items-center">
            <div className="col-span-3">
              <p className="text-palette-gray100 dark:text-palette-gray50 font-bold font-roboto lg:text-[10pt] md:text-[8pt]">
                {iconTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
   }
   export default genericBtn;