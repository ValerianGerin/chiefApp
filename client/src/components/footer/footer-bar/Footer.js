import React from "react";
import style from "./Footer.module.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <h1>&copy; Chief</h1>
      <div>
        <p>
          <Link
            to="/
terms of service"
            target="blank"
          >
            conditions générales d'utilisation
          </Link>
        </p>
        <p>
          <Link
            to="
policy of use of personal data"
            target="blank"
          >
            politique d'utilisation des données personnelles
          </Link>
        </p>
        <p>
          <Link
            to="
legal notice"
            target="blank"
          >
            mentions légales
          </Link>
        </p>
      </div>
      <div>
        <h2>Nous contacter</h2>
        <p>Vous avez une question ? contact@chief.fr</p>
      </div>
    </footer>
  );
};

export default Footer;
