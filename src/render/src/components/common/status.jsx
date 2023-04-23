import statusGreen from "../../assets/graphics/statusGreen.svg";
import statusRed from "../../assets/graphics/statusRed.svg";

function Status({ statusTitle, statusDescription, ready }) {
  return (
    <div>
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-4 h-full items-center">
          <div className="cols-span-1 flex justify-center">
            {statusTitle === "Camera Status" ? (
              <img src={ready ? statusGreen : statusRed} className="w-3"></img>
            ) : (
              <img
                src={
                  statusDescription === "No Accident Detected"
                    ? statusGreen
                    : statusRed
                }
                className="w-3"
              ></img>
            )}
          </div>
          <div className="col-span-3">
            <p className="text-palette-gray75 dark:text-palette-gray50 font-bold font-roboto text-[10pt] ">
              {statusTitle} :
            </p>
            <p className="text-palette-gray75 dark:text-palette-gray50 font-roboto text-[8pt]">
              {statusDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
