import React from "react";
import BoraBora from "../assets/borabora.jpg";
import KeyWest from "../assets/keywest.jpg";
import Maldives from "../assets/maldives.jpg";
import BoraBora2 from "../assets/borabora2.jpg";
import Maldives2 from "../assets/maldives2.jpg";
import SelectCard from "./SelectCard";
import Maldives3 from "../assets/maldives3.jpg";
const Selects = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4 py-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectCard bg={BoraBora} text="Bora Bora" />
      <SelectCard bg={Maldives} text="Maldives" />
      <SelectCard bg={Maldives2} text="Maldives2" />
      <SelectCard bg={Maldives3} text="Maldives3" />
      <SelectCard bg={BoraBora2} text="Bora Bora2" />
      <SelectCard bg={KeyWest} text="KeyWest" />
    </div>
  );
};

export default Selects;
