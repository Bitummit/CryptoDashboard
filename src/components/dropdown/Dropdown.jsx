import { useState, useEffect, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";


// Later maybe use url params instead of filter state

export default function Dropdown(props) {
  const [selectedFilter, setFilter] = useState(props.filters[0]);
  const [isOpen, setIsOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <div ref={menuRef} className="relative flex flex-col w-full md:w-40">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue text-gray-100 p-3 text-lg rounded-lg flex items-center justify-center"
      >
        {selectedFilter}
        {isOpen ? (
          <ArrowDropUpIcon className="scale-125" />
        ) : (
          <ArrowDropDownIcon className="scale-125" />
        )}
      </button>
      {isOpen && (
        <div className="absolute bg-colorBgSecondary text-colorTextPrimary border border-colorBorder rounded-lg top-16 w-full">
          {props.filters.map((item) => (
            <div
              onClick={() => {
                setFilter(item);
              }}
              className="cursor-pointer hover:bg-colorBgThird hover:border-l-colorTextGraySecond hover:border-l-4 text-xl p-2 m-1"
            >
              {" "}
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
