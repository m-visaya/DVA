import ExportIcon from "../assets/graphics/export.svg";
import SearchIcon from "../assets/graphics/search.svg";
import ReturnButton from "../components/common/returnButton";
import SecondaryBtn from "../components/common/secondaryButton";
import LogItem from "../components/log/logItem";

import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

function logs() {
  const [logsData, setLogsData] = useState([]);
  window.electronAPI.getLogs();
  window.electronAPI.onLogsData((event, rows) => {
    setLogsData(rows);
  });

  const location = useLocation();
  const fromPath = location.state?.from || "/";
  const initLogFilter =
    fromPath !== "/"
      ? String(fromPath).replace("/", "").charAt(0).toUpperCase() +
        String(fromPath).slice(2)
      : "All";

  const [logFilter, setLogFilter] = useState(initLogFilter);

  useEffect(() => {
    // do something when the filter changes
    return;
  }, [logFilter]);

  return (
    <div className="bg-palette-gray100 min-h-screen flex flex-col">
      <div className="flex justify-center pt-7">
        <div className="relative md:-left-72 lg:-left-80">
          <ReturnButton returnTitle="Logs" to={fromPath} />
        </div>
      </div>
      <div className="flex justify-center pt-12">
        <div className="grid grid-cols-5 gap-x-2 md:w-3/4 lg:w-[800px]">
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex justify-center items-center">
              <label className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
                Channel:
              </label>
            </div>
            <div className="col-span-2">
              <select
                className="bg-palette-gray75 text-white lg:text-[10pt] md:text-[8pt] font-roboto h-8 w-full rounded-md m-1 cursor-pointer drop-shadow-lg"
                name="channels"
                id="channels"
                value={logFilter}
                onChange={(e) => setLogFilter(e.target.value)}
              >
                <option value="All">All</option>
                <option value="Live">Live</option>
                <option value="File">File</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex justify-center items-center">
              <label className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
                From:
              </label>
            </div>
            <div className="col-span-2">
              <input
                className="bg-palette-gray75 text-palette-gray50 text-[8pt] h-8 w-full rounded-md m-1 cursor-pointer drop-shadow-lg"
                type="date"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex justify-center items-center">
              <label className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
                To:
              </label>
            </div>
            <div className="col-span-2">
              <input
                className="bg-palette-gray75 text-palette-gray50 text-[8pt] h-8 w-full rounded-md m-1 cursor-pointer drop-shadow-lg"
                type="date"
              ></input>
            </div>
          </div>
          <div className="grid grid-cols-2 col-span-2 gap-x-2 mx-6">
            <div className="w-auto">
              <SecondaryBtn iconImage={SearchIcon} iconTitle="Search" />
            </div>
            <div className="w-auto">
              <SecondaryBtn iconImage={ExportIcon} iconTitle="Export" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center pt-6">
        <div className="grid grid-cols-6 gap-x-10 md:w-3/4 lg:w-[800px] pb-3 border-b border-palette-gray75">
          <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
            Channel
          </div>
          <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
            Type
          </div>
          <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
            Origin
          </div>
          <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
            Date Occured
          </div>
          <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt]">
            File Path
          </div>
          <div className="text-white font-roboto lg:text-[10pt] md:text-[8pt] flex justify-center">
            Preview
          </div>
        </div>
      </div>
      <div>
        {logsData.map((log) => (
          <LogItem
            key={log[0]} // Make sure each log item has a unique key
            LogChannel={log[1]}
            LogType={log[2]}
            LogOrigin={log[3]}
            LogDate={log[4]}
            LogPath={log[5]}
          />
        ))}
      </div>
    </div>
  );
}
export default logs;
