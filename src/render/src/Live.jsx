import ReturnButton from "../components/returnButton"
import LiveDash from "../components/liveDash"
import LiveStatus from "../components/liveStatus";


function test() {
  return (
    <div className="bg-black h-screen flex flex-col h-full">
      <div className="place-items-start">
        <ReturnButton />
      </div>
      <div className="flex justify-center relative">
        <div className="fixed bottom-[50px]">
          <LiveDash />
        </div>
      </div>
    </div>
  );
}

export default test;
