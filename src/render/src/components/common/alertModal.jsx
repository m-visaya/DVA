import { Link } from "react-router-dom";

function AlertModal(props) {
  const closeModal = () => {
    props.setShowAccidentModal(false);
  };

  return (
    <div className="static">
      <div className="fixed h-full w-full bg-black z-10 top-0 opacity-50"></div>
      <div className="fixed top-0 right-0 left-0 z-20 flex justify-center items-center h-full">
        <div className="box-border bg-palette-white75 dark:bg-palette-gray100 h-auto  w-[325px] rounded-xl md:scale-[0.85] lg:scale-[1]">
          <div className="grid grid-rows-2 justify-center py-5">
            <div className="text-red-500 font-bold font-roboto text-[16pt]">
              Accident Detected
            </div>
            <div className="text-palette-gray75 dark:text-palette-gray50 font-roboto text-[10pt]">
              An accident has been detected. <br /> Details saved in logs.
            </div>
            <div className="grid grid-cols-2 gap-x-3 w-64 mt-3">
              <Link to="/logs" state={{ from: location.pathname }}>
                <div className="box-border bg-palette-white25 dark:bg-secondary-gray ease-in duration-200 hover:bg-palette-gray25 dark:hover:bg-primary-gray h-10 w-full rounded-2xl m-1 cursor-pointer">
                  <div className="flex justify-center h-full items-center">
                    <div className="flex h-full items-center">
                      <div className="col-span-3">
                        <p className="text-palette-gray100 dark:text-palette-gray50 font-bold font-roboto lg:text-[10pt] md:text-[8pt]">
                          View Logs
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
              <div>
                <div
                  className="box-border bg-palette-white25 dark:bg-secondary-gray ease-in duration-200 hover:bg-palette-gray25 dark:hover:bg-primary-gray h-10 w-full rounded-2xl m-1 cursor-pointer"
                  onClick={closeModal}
                >
                  <div className="flex justify-center h-full items-center">
                    <div className="flex h-full items-center">
                      <div className="col-span-3">
                        <p className="text-palette-gray100 dark:text-palette-gray50 font-bold font-roboto lg:text-[10pt] md:text-[8pt]">
                          Continue
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AlertModal;
