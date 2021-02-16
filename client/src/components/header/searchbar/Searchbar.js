import React from "react";
import style from "./Searchbar.module.scss";
import { BiSearchAlt } from "react-icons/bi";

const Searchbar = () => {
  return (
    <>
      <BiSearchAlt className={style.collapsedSearchbar} size={45}></BiSearchAlt>
      <input className={style.searchbar} type="text" />
    </>
  );
};

export default Searchbar;
