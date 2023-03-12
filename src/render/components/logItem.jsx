function logItem({LogChannel, LogType, LogOrigin, LogDate, LogPath}){
    return(
        <div className="flex flex justify-center" onClick={() => window.electronAPI.openLog()}>
            <div className="grid grid-cols-6 gap-x-10 md:w-3/4 lg:w-[800px] py-2 border-b border-palette-gray75 ">
                <div className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] flex items-center truncate">{LogChannel}</div>
                <div className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] flex items-center truncate">{LogType}</div>
                <div className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] flex items-center truncate">{LogOrigin}</div>
                <div className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] flex items-center truncate">{LogDate}</div>
                <div className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] flex items-center truncate">{LogPath}</div>
                <div className="box-border bg-palette-gray75 h-12 w-auto rounded-xl m-1 cursor-pointer drop-shadow-lg"></div>
            </div>
        </div>
    );
   }
   export default logItem;