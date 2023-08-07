import React from "react";
import Button from "../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../DropDown/DropDown";

interface HeaderProps {
  onDropDownChange: (rowsCols: number) => void;
  onRotateSibling: () => void;
}

const Header: React.FC<HeaderProps> = ({
  onDropDownChange,
  onRotateSibling,
}) => {
  const rotateSibling = () => {
    onRotateSibling();
  };
  return (
    <div className="h-18 border-b z-10 shadow-md border-gray-200">
      <div className="flex h-18 container items-center justify-between mx-auto">
        <h1 className="uppercase font-extrabold text-3xl">Luis Velito</h1>
        <div className="flex items-center h-16">
          <DropDown onDropDownChange={onDropDownChange} />
          <Button onRotateSibling={rotateSibling} />
        </div>
      </div>
    </div>
  );
};

export default Header;
