import React from "react";
import { Link } from "react-router-dom";

const MidCard = ({
  link = "/",
  imageSrc = "",
  tag = "",
  text = "Default Text",
  className = "",
  style = {},
}) => {
  return (
    <Link to={link} className={`block group ${className}`} style={style}>
      <div className="relative w-full h-[180px] md:h-[200px] rounded-lg overflow-hidden">
        <img
          src={imageSrc}
          alt={tag || "MidCard image"}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {tag && (
          <div className="absolute bottom-2 left-2 bg-white text-red-600 text-xs px-2 py-1 font-semibold rounded">
            {tag}
          </div>
        )}
      </div>
      <h4
        className="text-lg font-semibold mt-2 hover:underline group-hover:text-gray-700"
        style={style}
      >
        {text}
      </h4>
    </Link>
  );
};

export default MidCard;
