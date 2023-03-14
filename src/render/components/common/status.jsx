import statusGreen from "../../assets/graphics/statusGreen.svg";

function Status({statusTitle, statusDescription}) {
  return (
    <div>
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-4 h-full items-center">
          <div className="cols-span-1">
            <img src={statusGreen} className="w-3"></img>
          </div>
          <div className="col-span-3">
            <p className="text-white font-roboto text-[10pt] ">
              {statusTitle} :
            </p>
            <p className="text-palette-gray50 font-roboto text-[8pt]">
              {statusDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Status;
