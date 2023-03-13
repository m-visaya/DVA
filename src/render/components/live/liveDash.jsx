import Status from "../common/status";
import LogButton from "../log/logButton";

function liveDash({ detectionStatus }) {
  return (
    <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 box-border drop-shadow-lg bg-palette-gray75 h-auto w-auto lg:rounded-3xl md:rounded-2xl ">
      <div className="flex justify-center h-full items-center p-2">
        <div className="grid grid-cols-3 gap-x-4 h-full items-center">
          <div>
            <Status
              statusTitle={"Camera Status"}
              statusDescription={"Connected"}
            />
          </div>
          <div>
            <Status
              statusTitle={"Detection Status"}
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
export default liveDash;
