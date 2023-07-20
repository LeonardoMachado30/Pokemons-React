import { useCallback, useState, useEffect, useContext } from "react";
import { IPokemon, Image, styled } from "../index";
import Info from "../Info/Info";
import { PokemonContext } from "../index";
import selectColor from "@utils/pokemonColor";

interface IProp {
  pokemons: IPokemon[];
}
const Container = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  width: 100%;
  padding: 0;
  margin: 0;
  gap: 70px;
  place-items: center;
  transition: 0.2s;
`;

export default function Card({ pokemons }: IProp) {
  const [id, setId] = useState(null);

  const closeInfo = () => {
    setId(null);
  };

  return (
    <Container>
      {pokemons?.map((item, index) => {
        const validId = id !== null && id === item.id;
        const styleCheet = selectColor(item.types[0].type.name);
        return (
          <li
            className="card"
            key={index}
            style={{
              backgroundColor: styleCheet.color,
              backgroundImage: `url(${styleCheet?.img})`,
              backgroundSize: "cover",
            }}
          >
            <Image
              src={item.sprites.front_default}
              alt={item.name}
              width={200}
              height={200}
              loading="lazy"
            />
            <p>{item.name}</p>
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
    </Container>
  );
}
