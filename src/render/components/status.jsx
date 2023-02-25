import statusGreen from "../assets/statusGreen.svg";
import statusRed from "../assets/statusRed.svg";

function Status({statusTitle, statusDescription}) {
  return (
    <div>
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-4 h-full items-center">
          <div className="cols-span-1">
            <img src={statusGreen} className="lg:w-5 md:w-3"></img>
          </div>
          <div className="col-span-3">
            <p className="text-white font-roboto lg:text-[10pt] md:text-[8pt] ">
              {statusTitle} :
            </p>
            <p className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[7pt]">
              {statusDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
