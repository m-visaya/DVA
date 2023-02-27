import logIcon from "../assets/logs.svg";

function logButton() {
  return (
    <div
      className="box-border bg-palette-gray100 lg:h-16 lg:w-48 md:h-12 md:w-32 lg:rounded-2xl md:rounded-xl m-1 cursor-pointer"
      onClick={() => window.electronAPI.openLogs()}
    >
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-4 lg:gap-x-4 md:gap-x-3 flex h-full items-center">
          <div className="col-span-1">
            <img src={logIcon} className="lg:w-6 md:w-4"></img>
          </div>
          <div className="col-span-3">
            <p className="text-palette-gray50 font-roboto lg:text-sm md:text-xs lg:ml-4 md:ml-2">
              View Logs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default logButton;
