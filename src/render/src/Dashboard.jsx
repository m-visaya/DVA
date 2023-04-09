import { Link } from "react-router-dom";
import configureIcon from "../assets/graphics/configure.svg";
import fileIcon from "../assets/graphics/file.svg";
import liveIcon from "../assets/graphics/live.svg";
import logIcon from "../assets/graphics/logs.svg";
import Modal from "../components/common/modal";
import Icon from "../components/dashboard/icon";
import HelpIcon from "../assets/graphics/help.svg"
import { useEffect, useState } from "react";
import { DateTime } from "luxon";

function Dashboard() {
  const [time, setTime] = useState(DateTime.now());
  const updateTime = () => setTime(DateTime.now());
  const [initialSetup, setInitialSetup] = useState(false);

  useEffect(() => {
    const timeId = setInterval(updateTime, 1000);
    window.electronAPI.fetchSetting("preferredTheme").then((preferredTheme) => {
      if (
        preferredTheme === "dark" ||
        (!preferredTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        window.electronAPI.saveSettings({ preferredTheme: "dark" });
      } else {
        document.documentElement.classList.remove("dark");
        window.electronAPI.saveSettings({ preferredTheme: "light" });
      }
    });

    window.electronAPI.fetchSetting("defaultCamera").then((defaultCamera) => {
      if (!defaultCamera) setInitialSetup(true);
    });

    return () => clearInterval(timeId);
  }, []);

  return (
    <div className="bg-palette-white75 dark:bg-palette-gray100 h-screen flex flex-col">
      <Link to="/help">
        <div className="absolute top-0 right-0 mr-4 mt-4 bg-palette-white75 dark:bg-palette-gray75
                        ease-in-out duration-200 hover:bg-palette-white25 hover:dark:bg-palette-gray80
                        font-roboto font-bold text-[10pt]
                        p-2 rounded-xl flex grid grid-cols-2 place-items-center z-20">
          <img src={HelpIcon} className="w-5"></img>
          <p className="mr-1">Help</p>              
        </div>

      </Link>
      <img
        src="../assets/graphics/background.svg"
        className="absolute w-full h-full object-cover object-bottom opacity-80 overflow-hidden"
      ></img>
      <div className="flex justify-center h-full items-center z-10">
        <div className="w-auto h-auto p-12 rounded-xl">
          <div className="grid grid-cols-2 gap-6 xl:gap-y-12 xl:gap-x-24">
            <div className="col-span-2 flex justify-center mb-5">
              <div className="font-roboto text-center text-palette-gray75 dark:text-palette-gray50 leading-tight xl:scale-125">
                <p className="text-[26pt] font-bold">
                  Vehicular Accidents Detection
                </p>
                <p className="text-[16pt] font-extralight">
                  Deep Learning Convolutional Neural Network
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
          </div>
        </div>
      </div>

      <div className="flex justify-center pb-3 xl:pb-5">
        <div className="grid grid-cols-2 gap-x-2 text-palette-gray75 dark:text-palette-gray50 text-[10pt] font-roboto">
          <div>
            <p>Detected Accidents: 0</p>
          </div>
          <div>
            {time.toLocaleString(DateTime.TIME_SIMPLE)}{" "}
            {time.toLocaleString({ weekday: "long" })}{" "}
            {time.toLocaleString({ month: "long" })} {time.day}
          </div>
        </div>
      </div>
      {initialSetup && <Modal setInitialSetup={setInitialSetup} />}
    </div>
  );
}

export default Dashboard;
