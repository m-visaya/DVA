import ReturnButton from "../components/returnButton"
import FileDash from "../components/fileDash"

function file() {
  return (
    <div className="bg-black h-screen flex flex-col h-full">
      <div className="place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton 
          returnTitle="File"
          />
      </div>
      <div className="flex justify-center relative">
        <div className="fixed bottom-[50px]">
          <FileDash />
        </div>
      </div>
    </div>
  );
}

export default file;
