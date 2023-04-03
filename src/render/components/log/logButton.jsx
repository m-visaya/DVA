import { Link } from "react-router-dom";
import logIcon from "../../assets/graphics/logs.svg";

function logButton() {
  return (
    <Link to="/logs" state={{ from: location.pathname }}>
      <div
        className="box-border bg-palette-white25 dark:bg-palette-gray100 ease-in duration-200 hover:bg-palette-gray25 dark:hover:bg-primary-gray h-12 w-auto rounded-xl cursor-pointer">
        <div className="flex justify-center h-full items-center">
          <div className="grid grid-cols-4 flex h-full items-center">
            <div className="col-span-1">
              <img src={logIcon} className="w-4"></img>
            </div>
            <div className="col-span-3">
              <p className="text-palette-gray75 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] lg:ml-4 md:ml-2">
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
