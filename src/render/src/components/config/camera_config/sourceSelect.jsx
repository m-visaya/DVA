function configBtn({Title}){
    return(
        <div className="box-border bg-palette-gray100 hover:bg-primary-gray h-10 mb-3 w-full rounded-lg cursor-pointer drop-shadow-lg">
          <div className="flex h-full items-center justify-center">
              <p className="text-white font-roboto text-[8pt]">
                {Title}
              </p>
          </div>
      </div>
    );
   }
   export default configBtn;