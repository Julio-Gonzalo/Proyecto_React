// import { useState } from "react";
import "../../main/style.scss";

export function Gallery({ data }) {
  return (
    <>
      {data.map((character, index) => (
        <article className={"section-article"} key={index}>
          <div className="section-article-div">
            <img
              src={`http://localhost:3000/${character.image}`}
              alt={character.name}
              className="section-article-div-img"
            />
            <span className="section-article-div-span">{character.name}</span>
          </div>
        </article>
      ))}
    </>
  );
}
