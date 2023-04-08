import React from "react";
import ReactSwipe from "react-swipe";

function preview(){

    let reactSwipeEl;

    return(
      <div className="bg-palette-white75 dark:bg-palette-gray100 min-h-screen flex flex-col">
        <div clasName="flex h-full m-24">
            <ReactSwipe
              className="carousel"
              swipeOptions={{ continuous: false }}
              ref={el => (reactSwipeEl = el)}
            >
              <div> 
                {/* loop this div block */}
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
                  className="object-cover object-bottom"></img>
              </div>
              <div
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
                  className="object-fill"></img>
              </div>
            </ReactSwipe>
        </div>
        <div className="z-10">
          <button
            className="absolute bottom-0 left-0 top-0 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={() => reactSwipeEl.prev()}>
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </span>
          </button>
          <button
            className="absolute bottom-0 right-0 top-0 flex w-[15%] items-center justify-center border-0 bg-none p-0 text-center text-white opacity-50 transition-opacity duration-150 ease-[cubic-bezier(0.25,0.1,0.25,1.0)] hover:text-white hover:no-underline hover:opacity-90 hover:outline-none focus:text-white focus:no-underline focus:opacity-90 focus:outline-none motion-reduce:transition-none"
            type="button"
            onClick={() => reactSwipeEl.next()}>
            <span className="inline-block h-8 w-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="h-8 w-8">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </span>
          </button>
        </div>
        <div className="z-20">
          <div className="absolute bottom-9 left-1/2 transform -translate-x-1/2 box-border drop-shadow-lg bg-palette-white75 dark:bg-palette-gray75 h-auto w-3/4 rounded-xl">
            <div className="grid grid-cols-3 grid-rows-2 py-3 px-5 gap-y-3">
              <div>
                <p className="text-palette-gray75 dark:text-palette-gray50 font-bold font-roboto text-[10pt] ">
                  Type :
                </p>
                <p className="text-palette-gray75 dark:text-palette-gray50 font-roboto text-[8pt]">
                  Live Capture
                </p>
              </div>
              <div>
                <p className="text-palette-gray75 dark:text-palette-gray50 font-bold font-roboto text-[10pt] ">
                  Origin :
                </p>
                <p className="text-palette-gray75 dark:text-palette-gray50 font-roboto text-[8pt]">
                  OBS Virtual Camera
                </p>
              </div>
              <div>
                <p className="text-palette-gray75 dark:text-palette-gray50 font-bold font-roboto text-[10pt] ">
                  Date Occured :
                </p>
                <p className="text-palette-gray75 dark:text-palette-gray50 font-roboto text-[8pt]">
                  4:39:25 04/09/2023
                </p>
              </div>
              <div className="col-span-2">
                <p className="text-palette-gray75 dark:text-palette-gray50 font-bold font-roboto text-[10pt] ">
                  File Path :
                </p>
                <p className="text-palette-gray75 dark:text-palette-gray50 font-roboto text-[8pt]">
                  C:/Users/Administrator/Documents/DVA/saved/accident001
                </p>
              </div>
              <div className="flex justify-center items-center bg-primary-blue dark:bg-palette-gray100 ease-in duration-200 hover:bg-palette-gray25 dark:hover:bg-primary-gray rounded-xl cursor-pointer">
                <p className="text-white dark:text-palette-gray50 font-roboto text-[10pt]">Open Directory</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
   }
   export default preview;