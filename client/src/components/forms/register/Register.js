import React, { useState } from "react";
import { withRouter } from "react-router";

import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";

import style from "./Register.module.scss";

const Register = (props, { login }) => {
  const initialStateForm = { name: "", email: "", password: "" };

  const [form, setForm] = useState(initialStateForm);
  const [formMessage, setFormMessage] = useState("");
  const [display, setDisplay] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    const body = { ...form };
    e.preventDefault();
    try {
      fetch("http://localhost:3000/user/new", {
        method: "POST",
        body: JSON.stringify(body),
        headers: { "Content-type": "application/json" },
      }).then((res) => {
        if (res.status === 400) {
          setFormMessage("Format d'email invalide");
        } else if (res.status === 409) {
          setFormMessage("Cet email est deja utilisé");
        } else if (res.status === 424) {
          setFormMessage("Une erreur s'est produite veuillez réessayer");
        } else {
          setFormMessage("");
          fetch("http://localhost:3000/auth/signin", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json" },
          }).then((res) => {console.log(res)});
          props.history.push("/");
        }
      });
    } catch (error) {
      if (error) {
        e.preventDefault();
        setFormMessage("Une erreur s'est produite veuillez réessayer");
      }
    }
  };

  const displayPassword = () => {
    setDisplay(!display);
  };
  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Pseudo</label>
          <input type="text" name="name" onChange={handleChange} />
        </div>
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
          <button>Inscription</button>
          <button>Reinitialiser</button>
        </div>
        <h2>{formMessage}</h2>
      </form>
    </div>
  );
};

export default Register;
