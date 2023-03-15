function configBtn({title, icon}){
    return(
        <div className="box-border bg-secondary-gray hover:bg-primary-gray h-10 mb-3 w-full rounded-2xl m-1 cursor-pointer drop-shadow-lg">
          <div className="grid grid-cols-3 h-full items-center">
            <div className="col-span-1">
              <img src={icon} className="w-4 ml-4"></img>
            </div>
            <div className="col-span-2">
              <p className="text-white font-roboto text-[8pt]">
                {title}
              </p>
            </div>
          </div>
      </div>
    );
   }
   export default configBtn;