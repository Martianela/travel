import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";
const Footor = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className=" max-w-[1240px] flex mx-auto flex-col px-4  ">
        <div className="sm:flex text-center justify-between items-center">
          <h1>BEACHES.</h1>
          <div className="flex justify-between w-full sm:max-w-[280px] my-4 ">
            <FaFacebook className="icon" />
            <FaTwitter className="icon" />
            <FaYoutube className="icon" />
            <FaPinterest className="icon" />
            <FaInstagram className="icon" />
          </div>
        </div>

        <div className="flex justify-between">
          <ul className="flex">
            <li>About</li>
            <li>Particepents</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Advertising</li>
          </ul>
          <ul className="text-right lg: flex ">
            <li>Home</li>
            <li>Destination</li>
            <li>Travel</li>
            <li>Views</li>
            <li>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footor;
