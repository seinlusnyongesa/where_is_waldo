import React from "react";
import monk from "../assets/images/monk.jpg";
import waldo from "../assets/images/waldo.jpg";
const PlayersPopUp = () => {
  return (
    <div className="fixed right-0 z-10 top-16">
      <div className="flex flex-col  bg-orange-400 mx-8 mt-2 rounded-md">
        <div className="flex gap-2 items-center  hover:bg-orange-200 p-2">
          <div className="w-14 ">
            <img src={monk} alt="monk" className="rounded-full" />
          </div>
          <div>
            <h2 className="font-bold">monk</h2>
          </div>
        </div>

        <div className="flex  items-center hover:bg-orange-200 p-2">
          <div className="w-14 ">
            <img src={waldo} alt="waldo" className="rounded-full" />
          </div>
          <div>
            <h2 className="font-bold">waldo</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayersPopUp;
