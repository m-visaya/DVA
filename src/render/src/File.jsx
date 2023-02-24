import ReturnButton from "../components/returnButton";
import FileDash from "../components/fileDash";

function file() {
  return (
    <div className="bg-black h-screen flex flex-col relative">
      <div className="absolute z-10 place-items-start 2xl:pl-10 lg:pl-8 md:pl-6 mt-5">
        <ReturnButton returnTitle="File" to="/" />
      </div>
      <FileDash />
    </div>
  );
}

export default file;
