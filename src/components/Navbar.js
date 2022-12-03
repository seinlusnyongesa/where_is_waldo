import React from "react";

const Navbar = ({ setPlayerPopup, isPlayerPopupOpen, gameData }) => {
  return (
    <nav className="bg-slate-500 fixed w-full z-10">
      <div className="flex justify-between mx-12  items-center p-2">
        <h1 className="text-2xl">where's weldo?</h1>

        <button
          onClick={() => setPlayerPopup(!isPlayerPopupOpen)}
          className="bg-red-200 rounded-full p-1 w-8 h-8 text-center font-bold"
        >
          {gameData ? gameData.length : 0}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
