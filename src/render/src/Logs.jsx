import ExportIcon from "./assets/graphics/export.svg";
import ResetIcon from "./assets/graphics/clear.svg";
import ReturnButton from "./components/common/returnButton";
import SecondaryBtn from "./components/common/secondaryButton";
import LogItem from "./components/log/logItem";
import Snackbar from "./components/common/snackbar";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function logs() {
  const location = useLocation();
  const fromPath = location.state?.from || "/";
  const initType =
    fromPath !== "/"
      ? String(fromPath).replace("/", "").charAt(0).toUpperCase() +
      String(fromPath).slice(2)
      : "All";

  const [type, setType] = useState(initType);
  const [startDate, setStartDate] = useState(null);
  const [finishDate, setFinishDate] = useState(null);
  const [snackVisible, setSnackVisible] = useState(false);

  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const logsDataHandler = async () => {
      const logsData = await window.electronAPI.getLogs({
        type: type,
        from: startDate,
        to: finishDate,
      });
      setLogs(logsData);
    };

    logsDataHandler();
  }, [type, startDate, finishDate]); // empty dependency array to run effect only once

  const handleExportClick = () => {
    window.electronAPI.exportLogs({
      type: type,
      from: startDate,
      to: finishDate,
    });
    setSnackVisible(true)
  }

  const handleResetClick = () => {
    setType("All");
    setStartDate("");
    setFinishDate("");
  }  

  return (
    <div className="bg-pallete-white75 dark:bg-palette-gray100 min-h-screen flex flex-col">
      <div className="flex justify-center pt-7">
        <div className="relative md:-left-72 lg:-left-80">
          <ReturnButton returnTitle="Logs" to={fromPath} />
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="grid grid-cols-5 gap-x-2 md:w-3/4 lg:w-[800px]">
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex items-center">
              <label className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
                Type:
              </label>
            </div>
            <div className="col-span-2">
              <select
                className="bg-palette-white50 text-palette-gray100 dark:text-palette-gray50 dark:bg-palette-gray75 lg:text-[10pt] md:text-[8pt] font-roboto h-8 w-full rounded-md m-1 cursor-pointer"
                name="types"
                id="types"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option className="text-palette-gray100 dark:text-palette-gray50" value="All">All</option>
                <option className="text-palette-gray100 dark:text-palette-gray50" value="Live">Live</option>
                <option className="text-palette-gray100 dark:text-palette-gray50" value="File">File</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex justify-center items-center">
              <label className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
                From:
              </label>
            </div>
            <div className="col-span-2">
              <input
                className="bg-palette-white50 dark:bg-palette-gray75 text-palette-gray50 text-[8pt] h-8 w-full rounded-md m-1 cursor-pointer"
                type="date"
                onChange={(e) => setStartDate(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex justify-center items-center">
              <label className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
                To:
              </label>
            </div>
            <div className="col-span-2">
              <input
                className="bg-palette-white50 dark:bg-palette-gray75 text-palette-gray50 text-[8pt] h-8 w-full rounded-md m-1 cursor-pointer"
                type="date"
                onChange={(e) => setFinishDate(e.target.value)}
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-x-5 mx-6">
            <div onClick={() => handleResetClick()} className="w-auto">
              <SecondaryBtn iconImage={ResetIcon} iconTitle="Reset" />
            </div>
            <div onClick={() => handleExportClick()} className="w-auto">
              <SecondaryBtn iconImage={ExportIcon} iconTitle="Export" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <div className="grid grid-cols-5 gap-x-10 md:w-3/4 lg:w-[800px] pb-3 border-b border-palette-gray-25 dark:border-palette-gray75">
          <div className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
            Type
          </div>
          <div className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
            Origin
          </div>
          <div className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
            Date Occured
          </div>
          <div className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
            File Path
          </div>
          <div className="text-palette-gray100 dark:text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt] flex justify-center">
            Preview
          </div>
        </div>
      </div>
      <div>
        {logs.map((log) => (
          <LogItem
            key={log[0]} // Make sure each log item has a unique key
            LogID={log[0]}
            LogType={log[1]}
            LogOrigin={log[2]}
            LogDate={log[3]}
            LogPath={log[4]}
          />
        ))}
      </div>
      {snackVisible && <Snackbar setSnackVisible={setSnackVisible} text="Successfully exported to /Documents/DVA/exported"></Snackbar>}
    </div>
  );
}
export default logs;
