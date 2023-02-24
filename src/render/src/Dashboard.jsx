import { Link } from "react-router-dom";
import Icon from "../components/icon";
import liveIcon from "../assets/live.svg";
import fileIcon from "../assets/file.svg";
import configureIcon from "../assets/configure.svg";
import exitIcon from "../assets/exit.svg";

function Dashboard() {
  return (
    <div className="bg-palette-gray100 h-screen flex flex-col">
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-4 lg:gap-x-14 md:gap-x-8">
          <div>
            <Link to="/live">
              <Icon 
              iconImage={liveIcon} 
              iconTitle="Live" />
            </Link>
          </div>
          <div>
            <Link to="/file">
              <Icon 
              iconImage={fileIcon} 
              iconTitle="File" />
            </Link>
          </div>
          <div>
            <Icon 
            iconImage={configureIcon} 
            iconTitle="Configure" />
          </div>
          <div>
            <Icon 
            iconImage={exitIcon} 
            iconTitle="Exit" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
