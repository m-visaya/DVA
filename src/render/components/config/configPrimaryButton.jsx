function primaryBtn({Title}){
    return(
        <div
        className="box-border bg-primary-blue dark:bg-primary-gray  dark:hover:bg-palette-gray100 h-7 w-auto rounded-2xl cursor-pointer drop-shadow-lg"
      >
        <div className="flex justify-center h-full items-center">
            <p className="text-white font-roboto lg:text-[10pt] md:text-[8pt] mx-7">
                {Title}
            </p>
        </div>
      </div>
    );
   }
   export default primaryBtn;