import React from "react";
import style from "./Navbar.module.scss";


const Navbar = () => {
  return (
    <div className={style.navbar}>
      <div>logo</div>
      <ul>
        <li>Recettes!</li>
        <li>Connexion!!</li>
        <li>Inscription!!</li>
        <li>Deconnexion!!!</li>
        <li>Profil!!!</li>

      </ul>
      <input/>
    </div>
  )
}

export default Navbar
