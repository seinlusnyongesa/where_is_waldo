import React from "react";

const Navbar = ({ setPlayerPopup, isPlayerPopupOpen }) => {
  return (
    <nav className="bg-slate-500">
      <div className="flex justify-around  items-center p-2">
        <h1 className="text-2xl">where's weldo?</h1>
        <h1 className="text-2xl">00:00:00</h1>
        <button
          onClick={() => setPlayerPopup(!isPlayerPopupOpen)}
          className="bg-red-200 rounded-full p-1 w-8 h-8 text-center font-bold"
        >
          3
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
