function fileButton({filename}) {
  return (

      <div
        className="box-border bg-palette-gray100 h-12 w-auto rounded-xl cursor-pointer drop-shadow-lg">
        <div className="flex justify-center h-full items-center">
            <div>
              <p className="text-palette-gray50 font-roboto lg:text-[10pt] md:text-[8pt]">
                {filename}
              </p>
            </div>
        </div>
      </div>

  );
}

export default fileButton;
