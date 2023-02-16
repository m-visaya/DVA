import Icon from "../components/icon"
import Tooltip from "../components/tooltip"
import liveIcon from "../assets/live.svg"
import fileIcon from "../assets/file.svg"
import configureIcon from "../assets/configure.svg"
import exitIcon from "../assets/exit.svg"


function dashboard() {
  return (
    <div className="bg-palette-gray100 h-screen flex flex-col">
      <div className="flex justify-center h-full items-center">
        <div className="grid grid-cols-4 lg:gap-x-14 md:gap-x-8">
          <div>
            <Icon 
              iconImage={liveIcon}
              iconTitle="Live"/>
          </div>
          <div>
            <Icon 
                iconImage={fileIcon}
                iconTitle="File"/>
          </div>
          <div>
            <Icon 
                iconImage={configureIcon}
                iconTitle="Configure"/>
          </div>
          <div>
            <Icon 
                iconImage={exitIcon}
                iconTitle="Exit"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default dashboard;
