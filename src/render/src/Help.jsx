import ReturnButton from "../components/common/returnButton";
import Accordion from '../components/common/accordion';

function help() {
  return (
    <div className="bg-palette-white75 dark:bg-palette-gray100 min-h-screen flex flex-col">
      <div className="flex justify-center pt-7">
        <div className="relative md:-left-72 lg:-left-80">
            <ReturnButton returnTitle="Help" to="/" />
        </div>
      </div>
      <div className="flex justify-center pt-10">
        <div className="md:w-3/4 lg:w-[800px] pb-1/4">
            <Accordion allowMultipleOpen>
            <div label='The Binary Classifier Model'>
            <p>The binary classifier integrated within this application is a result of applying transfer learning methods
                to a multiclass classifier model. It is retrained to binary classes while retaining the original weights, and refined to make accurate binary detection of vehicular accidents. 
            </p>
            <br/>
            <p>
                <strong>Base Model:</strong> Xception
            </p>
            <p>
                <strong>Author:</strong> François Chollet
            </p>
            <p>
                <strong>Dataset:</strong> Car Accident and Prediction (CADP)
            </p>
            </div>
            <div label='Live Module'>
                <p>Live module allows the detection of vehicular accident using video streams from connected input devices.</p>
                <br/>
                <img src="../assets/screens/live.png" className="w-9/12 rounded-lg"/>
                <br/>
                <p className="text-[8pt]">
                <strong>Note:</strong> Only cameras detected by the OS can be selected, if your camera is not listed during the initial configuration,
                please verify the camera connection and its associated driver software with your OS.
                </p>
            </div>
            <div label='Connecting Network Cameras'>
            <p>Connection to network cameras such as CCTV and IP Cameras are supported through a middleware <strong>Open Broadcasting Software</strong>.</p>
            <br/>
                <ol className="list-decimal list-inside">
                    <li>Download and Install latest software from https://obsproject.com/</li>
                    <br/>
                    <li>In the sources panel add a media source.
                        <img src="../assets/screens/obs1.png" className="w-9/12 rounded-lg"/>
                        <br/>
                    </li>
                    <li>Uncheck the local file checkbox and add the streaming URL of your CCTV / IP camera in the input field.
                        <img src="../assets/screens/obs2.png" className="w-9/12 rounded-lg"/>
                        <br/>
                    </li>
                    <li>Select OBS Virtual Camera as Camera input device in the app.
                        <img src="../assets/screens/camconfig.png" className="w-9/12 rounded-lg"/>
                        <br/>
                    </li>
                    <li>Start a live detection.
                        <img src="../assets/screens/livenet.png" className="w-9/12 rounded-lg"/>
                    </li>
                </ol>
            <br/>
            <p className="text-[8pt]">
            <strong>Note:</strong> Multiple cameras can be arranged in the OBS viewport for multi camera detection, but keep in mind that the entire viewport will be logged when an accident is detected.
            </p>
            </div>
            <div label='File Module'>
                <p>File module allows the detection of vehicular accident using video streams from user provided video files.</p>
                <br/>
                <img src="../assets/screens/file.png" className="w-9/12 rounded-lg"/>
            </div>
            <div label='Logging Threshold'>
                <p>As the model evaluates the classification per frame, a log threshold is implemented to prevent continous logging of accidents if one is detected. The value of the threshold can be adjusted in the settings. 
                </p>
                <br/>
                <img src="../assets/screens/threshold.png" className="w-9/12 rounded-lg"/>
            </div>
            <div label='Hardware Requirements'>
                <strong>Minimum Requirements</strong>
                <ul>
                    <li>64-bit 4 Core Processor</li>
                    <li>6 GB RAM</li>
                    <li>2 GB VRAM</li>
                </ul>
                <br/>
                <strong>Recommended Requirements</strong>
                <ul>
                    <li>64-bit 8 Core Processor</li>
                    <li>16 GB RAM</li>
                    <li>4 GB VRAM</li>
                </ul>
                <br/>
                <p className="text-[8pt]">
                <strong>Note:</strong> Running the application below the indicated minimum is not recommended, as it can greatly affect the detection performance.
                </p>
            </div>
            <div label='Project Info'>
                <p>This project is a requirement for the degree Bachelor of Science in Computer Science at Technological Institute of the Philippines.</p><br/>
                <strong>Marco C. Visaya</strong>
                <p>qmcvisaya@tip.edu.ph</p>
                <br/>
                <strong>Bryan Kristofer A. Manabat</strong>
                <p>qbkamanabat@tip.edu.ph</p>
                <br/>
                <strong>Ralph Christian S. Bernardino</strong>
                <p>qrcsbernardino@tip.edu.ph</p>
            </div>
        </Accordion>
        </div>
      </div>
    </div>
  );
}

export default help;
