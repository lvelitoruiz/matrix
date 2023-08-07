import React, { useState } from "react";

interface DropDownProps {
  onDropDownChange: (rowsCols: number) => void;
}

const DropDown: React.FC<DropDownProps> = ({ onDropDownChange }) => {
  const [openDrop, setDropDown] = useState(false);

  const selectRatio = (valueNumber: number) => {
    onDropDownChange(valueNumber);
    setDropDown(false);
  };

  return (
    <div className="relative overflow-visible h-18 w-auto">
      <div
        className="relative cursor-pointer rounded flex m-1 border-b-4 border-l-0 shadow-lg bg-red-500 border-red-800 text-white hover:bg-red-400 hover:border-red-700 transition duration-300 ease-in-out"
        aria-hidden
        onClick={() => setDropDown(!openDrop)}
      >
        <span className="block px-3 py-2 rounded">Cols / Rows</span>
      </div>
      {openDrop ? (
        <ul className="text-center absolute top-[100%] bg-green-500 w-[200px] py-4 right-[4px] text-white rounded border-green-700 border-b-4">
          <li
            onClick={(event) => selectRatio(2)}
            className="cursor-pointer w-full py-2 px-4 border-b border-green-400 transition duration-300 ease-in-out hover:bg-green-600"
          >
            2 Columns / 2 Rows
          </li>
          <li
            onClick={(event) => selectRatio(3)}
            className="cursor-pointer w-full py-2 px-4 border-b border-green-400 transition duration-300 ease-in-out hover:bg-green-600"
          >
            3 Columns / 3 Rows
          </li>
          <li
            onClick={(event) => selectRatio(4)}
            className="cursor-pointer w-full py-2 px-4 border-b border-green-400 transition duration-300 ease-in-out hover:bg-green-600"
          >
            4 Columns / 4 Rows
          </li>
          <li
            onClick={(event) => selectRatio(5)}
            className="cursor-pointer w-full py-2 px-4 border-b border-green-400 transition duration-300 ease-in-out hover:bg-green-600"
          >
            5 Columns / 5 Rows
          </li>
          <li
            onClick={(event) => selectRatio(6)}
            className="cursor-pointer w-full py-2 px-4 transition duration-300 ease-in-out hover:bg-green-600"
          >
            6 Columns / 6 Rows
          </li>
        </ul>
      ) : null}
    </div>
  );
};

export default DropDown;
