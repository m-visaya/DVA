import { Link } from "react-router-dom";
import configureIcon from "../assets/graphics/configure.svg";
// import exitIcon from "../assets/graphics/exit.svg";
import fileIcon from "../assets/graphics/file.svg";
import liveIcon from "../assets/graphics/live.svg";
import logIcon from "../assets/graphics/logs.svg";
import Icon from "../components/dashboard/icon";

function Dashboard() {
  return (
    <div className="bg-palette-gray100 h-screen flex flex-col">
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-2 gap-6">
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
    </div>
  );
}

export default Dashboard;
