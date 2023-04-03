import Status from "../common/status";
import LogButton from "../log/logButton";
import FileButton from "./fileButton"

function fileDash({detectionStatus}) {
  return (
      <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 box-border drop-shadow-lg bg-palette-white75 dark:bg-palette-gray75 h-auto w-auto rounded-2xl">
        <div className="flex justify-center h-full items-center m-2">
          <div className="grid grid-cols-2 gap-x-5 h-full items-center">
            <div> 
              <Status 
                statusTitle={'Detection Status'}
                statusDescription={detectionStatus}
              />
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
