import React from "react";

interface ButtonProps {
  onRotateSibling: () => void;
}

const Button: React.FC<ButtonProps> = ({ onRotateSibling }) => {
  const rotateSibling = () => {
    onRotateSibling();
  };
  return (
    <div
      onClick={rotateSibling}
      className="rounded cursor-pointer transition duration-300 ease-in-out flex m-1 border-b-4 border-l-0 shadow-lg bg-blue-500 border-blue-800 hover:bg-blue-400 hover:border-blue-700 text-white"
    >
      <span className="block px-3 py-2 rounded">Rotate Matrix</span>
    </div>
  );
};

export default Button;
