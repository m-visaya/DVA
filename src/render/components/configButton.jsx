function configBtn({iconTitle}){
    return(
        <div className="box-border bg-secondary-gray h-10 mb-3 w-full rounded-2xl m-1 cursor-pointer drop-shadow-lg">
          <div className="flex h-full items-center">
              <p className="text-white font-roboto lg:text-[10pt] md:text-[8pt] ml-6">
                {iconTitle}
              </p>
          </div>
      </div>
    );
   }
   export default configBtn;