import { useState, useEffect, useRef } from "react";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useSearchParams } from "react-router-dom";

// Later maybe use url params instead of filter state

export default function Dropdown(props) {
  const [selectedFilter, setFilter] = useState(props.filters[0]);
  const [isOpen, setIsOpen] = useState(false);

  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
  });

  return (
    <div ref={menuRef} className="relative flex flex-col mx-5 mt-3 md:mx-0 md:w-40 md:mt-0 rounded-lg">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="bg-blue-100 text-gray-100 p-3 text-lg rounded-lg flex items-center justify-between h-12"
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
                setIsOpen(false);
                //fetch с фильтром и seachParams
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
