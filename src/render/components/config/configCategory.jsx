function configBtn({title}){
    return(
      <div className="box-border bg-secondary-gray hover:bg-primary-gray h-10 mb-3 w-full rounded-2xl m-1 cursor-pointer drop-shadow-lg">
          <div className="flex items-center h-full">
            <p className="text-white font-roboto text-[8pt] ml-6">
              {title}
            </p>
          </div>
      </div>
    );
   }
   export default configBtn;