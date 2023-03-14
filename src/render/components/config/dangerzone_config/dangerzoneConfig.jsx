function dangerzoneConfig(){
    return(
        <div className="px-7 py-5">
            <div>
                <p className="font-roboto font-bold text-white text-[18pt]">Danger Zone</p>
                <p className="font-roboto text-palette-gray50 text-[8pt]">Actions made here cannot be undone, please proceed with caution.</p>
                <div className="mt-6">
                    <div className="box-border bg-palette-gray100  hover:bg-red-900 h-auto mb-3 w-72 rounded-lg m-1 cursor-pointer drop-shadow-lg">
                        <div className="flex h-full items-center py-3">
                            <div>
                                <p className="text-red-500 font-roboto lg:text-[10pt] md:text-[8pt] ml-5">
                                    Purge Logs
                                </p>
                                <p className="font-roboto text-palette-gray50 text-[8pt] ml-5">
                                    Erase the entire contents of the database.
                                </p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default dangerzoneConfig;