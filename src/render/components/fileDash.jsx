import FileStatus from "./fileStatus"
import LogButton from "./logButton";

function fileDash(){
    return(
                <div className="box-border bg-palette-gray75 lg:h-24 lg:w-[28rem] md:h-16 md:w-72 lg:rounded-3xl md:rounded-2xl">
                    <div className="flex justify-center h-full items-center">
                        <div className="grid grid-cols-2 lg:gap-x-10 md:gap-x-4 h-full items-center">
                            <div>
                                <FileStatus />
                            </div>
                            <div>
                                <LogButton />
                            </div>
                        </div>
                    </div>
                </div>
        );
}
export default fileDash;