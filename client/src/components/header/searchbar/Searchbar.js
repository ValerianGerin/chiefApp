import React from "react";
import style from "./Searchbar.module.scss";

const Searchbar = () => {
  return (
    <div className={style.searchbar}>
      <input  type="text" placeholder="Chercher: katsu curry, gratin dauphinois, gateau au chocolat..." />
    </div>
  );
};

export default Searchbar;
