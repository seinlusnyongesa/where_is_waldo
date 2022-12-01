import React from "react";

const Tagger = ({ pos }) => {
  return (
    <ul
      className="absolute bg-orange-600 text-lg font-semibold cursor-pointer rounded-md"
      style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
    >
      <li className="hover:bg-orange-200 p-2 rounded-md">waldo</li>
      <li className="hover:bg-orange-200 p-2 rounded-md">monk</li>
    </ul>
  );
};

export default Tagger;
