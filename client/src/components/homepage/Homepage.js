import React from "react";
import style from "./Homepage.module.scss";
import { Searchbar } from "../index";
import chiefImg from "../../assets/img/chiefImg.png";

const Homepage = () => {
  return (
    <>
      {/* First section */}
      <section>
        <div className={style.backgroundimg}>
          <Searchbar />
          <h1>Les meilleures recettes du monde</h1>
        </div>
      </section>

      {/* Second section */}
      <section>
        <div>
          <h1>
            Qui sommes nous?
            <div></div>
          </h1>
          <p>
            Une association française, créée en janvier 2009, réunissant une
            équipe de professionnels venus de différents horizons du monde des
            arts culinaires, de la table et de la communication. Son objectif:
            Faire connaître la richesse et la diversité du patrimoine
            alimentaire et culinaire de France.
          </p>
        </div>
        <img src={chiefImg} alt="master chief" />
      </section>

      {/* Third section */}
      <section>
        <div>
          <article>
            <h1>Nos ambitions</h1>
            <p>
              Chef vous donne des idées pour réaliser une cuisine unique. Nos
              experts vous aideront pour donner forme à vos recettes grâce au
              savoir-faire de nos chefs.
            </p>
          </article>
          <article>
            <h1>Nos valeurs</h1>
            <p>
              Chef se met sur le devant de la scène par la diversité des
              recettes proposé quelque soi le pays, la culture ou l'ethnie d'où
              elles viennent.
            </p>
          </article>
          <article>
            <h1>Notre équipe</h1>
            <p>
              Nous entremêlons aussi bien professionnels aguerris que des
              amateurs tout le monde à quelque chose à apporter.
            </p>
          </article>
        </div>
      </section>

      {/* Fourth section */}
      <section>
        <article>
          <p>Les entrées</p>
        </article>
        <article>
          <p>Les poissons</p>
        </article>
        <article>
          <p>Les soupes</p>
        </article>
      </section>
    </>
  );
};

export default Homepage;
