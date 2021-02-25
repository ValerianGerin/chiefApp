import React, { useState } from "react";
import { withRouter } from "react-router";

import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";

import style from "./Register.module.scss";

const Register = (props) => {
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

    const availableEmail = body.email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);

    if (body.email !== "" && availableEmail !== null) {
      if (body.password !== "") {
        try {
          fetch("http://localhost:3000/user/new", {
            method: "POST",
            body: JSON.stringify(body),
            headers: { "Content-type": "application/json" },
          })
            .then((res) => {
              const statusCode = res.status;
              const message = res.json();
              return Promise.all([statusCode, message]);
            })
            .then(([statusCode, message]) => {
              if (statusCode !== 201) {
                setFormMessage(message);
              } else {
                setFormMessage("");
                fetch("http://localhost:3000/auth/signin", {
                  method: "POST",
                  body: JSON.stringify(body),
                  headers: { "Content-type": "application/json" },
                })
                  .then((res) => {
                    return Promise.resolve(res.json());
                  })
                  .then((token) => {
                    props.login(token);
                    props.history.push("/");
                  });
              }
            });
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
