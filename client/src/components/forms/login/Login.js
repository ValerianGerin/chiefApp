import React, { useState, useContext } from "react";
import { extractUserIdFromToken } from "../../../utils/Func.utils";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthContext";

import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";

import style from "./Login.module.scss";

const Login = (props) => {
  const { login, getUserInfos } = useContext(AuthContext);

  const initialStateForm = { email: "", password: "" };

  const [form, setForm] = useState(initialStateForm);
  const [formMessage, setFormMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const LogUser = async (body) => {
    try {
      const signin = await fetch("http://localhost:3000/auth/signin", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" },
      });
      const signinResponseMessage = await signin.json();
      const signinResponseStatus = signin.status;

      if (signinResponseStatus !== 200) {
        setFormMessage(signinResponseMessage);
      } else {
        setFormMessage("");
        login(signinResponseMessage);
        // getUserInfos(extractUserIdFromToken(signinResponseMessage));
        props.history.push("/");
      }
    } catch (error) {
      setFormMessage("Une erreur s'est produite veuillez réessayer");
    }
  };

  //Form submit
  const handleSubmit = (e) => {
    const body = { ...form };

    e.preventDefault();

    const availableEmail = body.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (body.email !== "" && availableEmail !== null) {
      if (body.password !== "") {
        try {
          LogUser(body);
        } catch (error) {
          if (error) {
            e.preventDefault();
            setFormMessage("Une erreur s'est produite veuillez réessayer");
          }
        }
      } else {
        setFormMessage("Vous devez choisir un mot de passe");
      }
    } else {
      setFormMessage("Format d'email invalide");
    }
  };

  const displayPassword = () => {
    setDisplay(!display);
  };

  return (
    <>
      <div className={style.loginContainer}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="email"
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Mot de passe</label>
            <input
              type={display ? "text" : "password"}
              name="password"
              placeholder="mot de passe"
              onChange={handleChange}
            />
            {display ? (
              <MdVisibility onClick={() => displayPassword()} />
            ) : (
              <AiFillEyeInvisible onClick={() => displayPassword()} />
            )}
          </div>
          <div>
            <button>Connexion</button>
            <button>Reinitialiser</button>
          </div>
          <h2>{formMessage}</h2>
          <Link to="/" className={style.backToHome}>
            <GiReturnArrow />
            <p>Revenir a l'accueil</p>
          </Link>
          <div>
            <Link to="/register">Pas encore de compte?</Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
