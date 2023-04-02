function configBtn({title}){
    return(
      <div className="box-border bg-palette-white50 dark:bg-secondary-gray ease-in duration-200 hover:bg-palette-white25 dark:hover:bg-primary-gray h-10 mb-3 w-full rounded-xl m-1 cursor-pointer">
          <div className="flex items-center h-full">
            <p className="text-palette-gray100 dark:text-palette-gray50 font-roboto text-[8pt] ml-6">
              {title}
            </p>
          </div>
      </div>
    );
   }
   export default configBtn;