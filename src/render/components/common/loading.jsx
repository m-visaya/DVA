function Loading(props) {
  return (
    <div className="relative w-screen h-screen bg-black opacity-90 z-20">
      <span className="flex absolute top-1/2 w-full justify-center -mt-7">
        <span className="animate-ping absolute inline-flex  h-8 w-8 rounded-full bg-red-700"></span>
        <span className="absolute inline-flex rounded-full h-8 w-8 bg-red-700 opacity-70"></span>
        <p className="absolute top-10 text-gray-400 text-center">
          {props.message}
        </p>
      </span>
    </div>
  );
}

export default Loading;
