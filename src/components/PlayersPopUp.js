import React from "react";
import monk from "../assets/images/monk.jpg";
import waldo from "../assets/images/waldo.jpg";
const PlayersPopUp = () => {
  return (
    <div className="absolute right-0">
      <div className="flex flex-col gap-2  bg-slate-400 p-4 mx-8 mt-2 rounded-md">
        <div className="flex gap-2 items-center">
          <div className="w-20 ">
            <img src={monk} alt="monk" className="rounded-full" />
          </div>
          <div>
            <h2 className="font-bold">monk</h2>
          </div>
        </div>

        <div className="flex gap-2 items-center">
          <div className="w-20 ">
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
