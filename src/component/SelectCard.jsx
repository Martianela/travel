import React from "react";

const selectCard = (props) => {
  return (
    <div className="relative">
      <img src={props.bg} alt="/" className="w-full h-full object-cover" />
      <div className="bg-gray-900/30 absolute top-0 left-0 w-full h-full">
        <p className="left-4  text-xl text-white absolute bottom-4 font-bold">
          {props.text}
        </p>
      </div>
    </div>
  );
};

export default selectCard;
