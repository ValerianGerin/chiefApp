import React from "react";
import style from "./UserProfil.module.scss";

const UserProfil = (props) => {

  return (
    <section className={style.userProfilContainer}>
      <div>
        <img src="https://toppng.com/uploads/preview/roger-berry-avatar-placeholder-11562991561rbrfzlng6h.png"/>
        <p>{props.name}</p>
      </div>
      <h2>Votre carnet de recettes</h2>
      <div></div>
      <div>
        <button>Creer une nouvelle recette</button>
      </div>
    </section>
  );
};

export default UserProfil;
