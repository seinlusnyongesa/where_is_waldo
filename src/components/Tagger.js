import React from "react";

const Tagger = ({ pos, handleTargetClick, gameData }) => {
  console.log(gameData);
  return (
    <ul
      className="absolute bg-orange-600 text-lg font-semibold cursor-pointer rounded-md"
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    >
      {gameData.map((p, i) => (
        <li
          key={i}
          className="hover:bg-orange-200 p-2 rounded-md"
          data-name={`${p.name}`}
          onClick={handleTargetClick}
        >
          {p.name}
        </li>
      ))}
    </ul>
  );
};

export default Tagger;
