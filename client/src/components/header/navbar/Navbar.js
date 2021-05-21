import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/AuthContext";

import style from "./Navbar.module.scss";
import logo from "../../../assets/img/logo.jpg";

import { VscAccount } from "react-icons/vsc";
import { AiOutlineLogout } from "react-icons/ai";

const Navbar = () => {
  const { loggedStatus, logout } = useContext(AuthContext);

  return (
    <nav className={style.navbar}>
      <ul>
        <li>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </li>

        <li>
          <Link to="/recipes">Recettes</Link>
        </li>
        {loggedStatus.isLogged ? (
          <>
            <li>
              <Link to="/profil">
              <VscAccount></VscAccount>
              <p>Profil</p>
              </Link>
            </li>
            <li>
              <Link to="/">
                <AiOutlineLogout onClick={logout}></AiOutlineLogout>
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Connexion</Link>
            </li>
            <li>
              <Link to="/register">S'inscrire</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
