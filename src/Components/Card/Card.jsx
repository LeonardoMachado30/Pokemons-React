import { useCallback, useState, useEffect, useContext } from "react";
import { Image } from "../index";
import Info from "../Info/Info";
import { PokemonContext } from "../index";

function Card({ pokemons }) {
  const [id, setId] = useState(null);

  const closeInfo = () => {
    setId(null);
  };

  return (
    <ul className="card-list">
      {pokemons.map((item, index) => {
        const validId = id !== null && id === item[2];
        return (
          <li className="card" key={index}>
            <Image
              src={item[1]}
              alt={item[0]}
              width={200}
              height={200}
              loading="lazy"
            />
            <p>{item[0]}</p>
            <button
              className={`height-card ${!validId ? "btn-card" : "opacity-0"}`}
              onClick={() => {
                setId(item[2]);
              }}
            >
              Info
            </button>
            {validId && <Info prop={{ id, closeInfo }} />}
          </li>
        );
      })}
    </ul>
  );
}

export default Card;
