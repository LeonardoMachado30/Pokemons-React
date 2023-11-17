import { useCallback, useContext, useEffect, useState } from "react";
import styled from "styled-components";

import { CompareContext, Image } from "../index";
import CompareInfo from "./CompareInfo";

import CompareArrowsIcon from "@mui/icons-material/CompareArrows";

function Compare() {
  const [disabled, setDisabled] = useState(true);
  const [comparison, setComparison] = useState({});
  const [closeCompare, setCloseCompare] = useState("");
  const { compare } = useContext(CompareContext);
  const { Pokemon1, Pokemon2 } = compare;
  const allowPokemon1 = Pokemon1 !== undefined && Pokemon1;
  const allowPokemon2 = Pokemon1 !== undefined && Pokemon2;
  const allowPokemons =
    Pokemon1 !== undefined && Pokemon2 !== undefined ? true : false;

  const comparePokemons = useCallback(
    (pokemon1, pokemon2) => {
      const prop = {
        Pokemon1: {
          ...Pokemon1,
          comparison: {
            atk: pokemon1.atk - pokemon2.atk,
            def: pokemon1.def - pokemon2.def,
            hp: pokemon1.hp - pokemon2.hp,
            speed: pokemon1.speed - pokemon2.speed,
            media:
              Pokemon1.hp + Pokemon1.atk + Pokemon1.def + Pokemon1.speed * 4,
            atkClass:
              pokemon1.atk > pokemon2.atk ? "compared-up" : "compared-down",
            defClass:
              pokemon1.def > pokemon2.def ? "compared-up" : "compared-down",
            hpClass:
              pokemon1.hp > pokemon2.hp ? "compared-up" : "compared-down",
            speedClass:
              pokemon1.speed > pokemon2.speed ? "compared-up" : "compared-down",
          },
        },
        Pokemon2: {
          ...Pokemon2,
          comparison: {
            atk: pokemon2.atk - pokemon1.atk,
            def: pokemon2.def - pokemon1.def,
            hp: pokemon2.hp - pokemon1.hp,
            speed: pokemon2.speed - pokemon1.speed,
            media:
              pokemon2.hp + pokemon2.atk + pokemon2.def + pokemon2.speed * 4,
            atkClass:
              pokemon2.atk > pokemon1.atk ? "compared-up" : "compared-down",
            defClass:
              pokemon2.def > pokemon1.def ? "compared-up" : "compared-down",
            hpClass:
              pokemon2.hp > pokemon1.hp ? "compared-up" : "compared-down",
            speedClass:
              pokemon2.speed > pokemon1.speed ? "compared-up" : "compared-down",
          },
        },
      };

      setComparison(prop);
    },
    [Pokemon1, Pokemon2]
  );

  useEffect(() => {
    if (allowPokemons) {
      setDisabled(false);
      return comparePokemons(Pokemon1, Pokemon2);
    }
  }, [Pokemon1, Pokemon2, allowPokemons, comparePokemons]);

  return (
    <section className="compare-container">
      {allowPokemons && (
        <div className={`card-comapre-body ${closeCompare}`}>
          <Close
            onClick={() => {
              setCloseCompare("d-none");
            }}
          >
            X
          </Close>
          <Image
            src={Pokemon1?.sprite_front}
            alt={Pokemon1?.name}
            width={60}
            height={60}
          />
          {/* 
          {allowPokemon1 && <CompareInfo prop={comparison?.Pokemon1} />}

          {allowPokemon2 && <CompareInfo prop={comparison?.Pokemon2} />} */}

          <Image
            src={Pokemon2?.sprite_front}
            alt={Pokemon2?.name}
            width={60}
            height={60}
          />
        </div>
      )}

      <div className="card-comapre">
        <div>{allowPokemon1 && Pokemon1.name}</div>

        <Button
          disabled={disabled}
          onClick={() => {
            setCloseCompare("");
          }}
        >
          <CompareArrowsIcon />
        </Button>

        <div>{allowPokemon2 && Pokemon2.name}</div>
      </div>
    </section>
  );
}

const Close = styled.button`
  position: absolute;
  top: -8px;
  right: 10px;
  background-color: var(--color-secondary);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 4px;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;

  > svg:hover {
    transition: 0.2s ease-in-out;

    color: var(--color-primary);
  }
`;

export default Compare;
