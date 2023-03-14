import { Link } from "react-router-dom";
import logIcon from "../../assets/graphics/logs.svg";

function logButton() {
  return (
    <Link to="/logs" state={{ from: location.pathname }}>
      <div
        className="box-border bg-palette-gray100 h-12 w-auto lg:rounded-2xl md:rounded-xl m-1 cursor-pointer drop-shadow-lg">
        <div className="flex justify-center h-full items-center">
          <div className="grid grid-cols-4 flex h-full items-center">
            <div className="col-span-1">
              <img src={logIcon} className="w-4"></img>
            </div>
            <div className="col-span-3">
              <p className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] lg:ml-4 md:ml-2">
                View Logs
              </p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default logButton;
