import { Link } from "react-router-dom";
import configureIcon from "../assets/graphics/configure.svg";
// import exitIcon from "../assets/graphics/exit.svg";
import fileIcon from "../assets/graphics/file.svg";
import liveIcon from "../assets/graphics/live.svg";
import logIcon from "../assets/graphics/logs.svg";
import Modal from "../components/common/modal";
import Icon from "../components/dashboard/icon";
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

function Dashboard() {
  const [time, setTime] = useState(DateTime.now());

  const updateTime = () => setTime(DateTime.now());

  useEffect(() => {
    const timeId = setInterval(updateTime, 1000);
    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="bg-palette-gray100 h-screen flex flex-col">
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2 flex justify-center pb-5">
            <div className="flex flex-col">
              <div className="flex justify-center items-center gap-4">
                <p className="text-palette-gray50 text-[44pt] font-roboto">
                  {time.toLocaleString(DateTime.TIME_SIMPLE)}
                </p>
                <div className="flex items-center leading-tight">
                  <p className="text-palette-gray50 text-[16pt] font-roboto">
                    {time.toLocaleString({ weekday: "long" })}
                    <br />
                    {time.toLocaleString({ month: "long" })} {time.day}
                  </p>
                </div>
              </div>
              <p className="text-palette-gray50 text-[12pt] font-roboto text-center">
                0 : Detected Accidents
              </p>
            </div>
          </div>
          <div>
            <Link to="/live">
              <Icon
                iconImage={liveIcon}
                iconTitle="Live"
                iconDescription="Detect vehicular accidents in live camera streams."
              />
            </Link>
          </div>
          <div>
            <Link to="/file">
              <Icon
                iconImage={fileIcon}
                iconTitle="File"
                iconDescription="Detect vehicular accidents in media files."
              />
            </Link>
          </div>
          <div>
            <Link to="/logs">
              <Icon
                iconImage={logIcon}
                iconTitle="Logs"
                iconDescription="Review logged detection of vehicular accident."
              />
            </Link>
          </div>
          <div>
            <Link to="/config">
              <Icon
                iconImage={configureIcon}
                iconTitle="Configure"
                iconDescription="Configure various application settings."
              />
            </Link>
          </div>
          {/* <div>
            <Icon 
            iconImage={exitIcon} 
            iconTitle="Exit" />
          </div> */}
        </div>
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default Dashboard;
