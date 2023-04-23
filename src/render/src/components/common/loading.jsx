import LoadSpinner from "../../assets/graphics/spinner.svg"

function Loading(props) {
  return (
    <div className="relative w-screen h-screen bg-black opacity-90 z-20">
      <span className="flex absolute top-1/2 w-full justify-center -mt-7">
      <img src={LoadSpinner} className="animate-spin w-10"></img>
        <p className="absolute top-12 text-gray-400 text-center">
          {props.message}
        </p>
      </span>
    </div>
  );
}

export default Loading;
