import React, { useState } from "react";
import { AiFillEyeInvisible } from "react-icons/ai";
import { MdVisibility } from "react-icons/md";
import style from "./Register.module.scss";

const Register = () => {
  const [display, setDisplay] = useState(false);

  const displayPassword = ()=>{
    setDisplay(!display);
  }
  return (
    <div className={style.container}>
      <form>
        <div>
          <label>Email</label>
          <input type="text" placeholder="email" />
        </div>
        <div>
          <label>Mot de passe</label>
          <input type={display? "text" : "password"} placeholder="mot de passe" />
          {display ? (
            <MdVisibility onClick={()=>displayPassword()}/>
          ) : (
            <AiFillEyeInvisible onClick={()=>displayPassword()}/>
          )}
        </div>
        <div>
          <button>Inscription</button>
          <button>Reinitialiser</button>
        </div>
      </form>
    </div>
  );
};

export default Register;
