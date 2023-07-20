import { useEffect, useState, useContext } from "react";
import styled from "styled-components";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RefreshIcon from "@mui/icons-material/Refresh";

import reactStringReplace from "react-string-replace";

import { getAutoComplete, Api, PokemonContext } from "../index";

function Search({ setApiOptions }) {
  const [value, setValue] = useState("");
  const [name, setName] = useState("");
  const result = value === "" || name === "" ? false : true;

  const getName = (value) => {
    const pokemonList = localStorage.getItem("PokemonList");

    if (pokemonList.includes(value)) {
      const pokemonsSelect = JSON.parse(pokemonList).filter((e) => {
        return e.includes(value) ? e : "";
      });

      setName(pokemonsSelect);
    }
  };

  async function handleSearch(_value) {
    await Api(`https://pokeapi.co/api/v2/pokemon/${_value}`).then((data) => {
      setApiOptions([[data?.name, data?.sprites?.front_default, data?.id]]);
      setValue("");
      return;
    });
    return;
  }

  useEffect(() => {
    document.title = "PESQUISAR";
    window.onscroll = () => {
      setValue("");
    };
    // document.body.addEventListener("click", (e) => {
    //   console.log("click body");
    // });
  }, [value, name]);

  return (
    <div className="search">
      <Container>
        <ButtonBack
          onClick={() => {
            setValue(null);
            setName("");
            setApiOptions(null);
          }}
        >
          {value === null ? <RefreshIcon /> : <ArrowBackIcon />}
        </ButtonBack>

        <Input
          type="text"
          placeholder="Digite o nome de um pokemon"
          value={value}
          onFocus={(e) => {
            getAutoComplete();
            setValue(e.target.value);
          }}
          onKeyUp={(e) => {
            setValue(e.target.value.toLocaleLowerCase());
            getName(e.target.value);
          }}
          onChange={(e) => {
            setValue(e.target.value.toLocaleLowerCase());
          }}
        />
        {result && (
          <Content>
            <PokemonList>
              {name.map((pokemon, index) => {
                return (
                  <Pokemon
                    key={index}
                    id={pokemon}
                    onClick={(e) => {
                      setValue(e.target.id);
                      handleSearch(e.target.id);
                      setName("");
                    }}
                  >
                    {reactStringReplace(pokemon, value, (match, i) => (
                      <i key={i}>{match}</i>
                    ))}
                  </Pokemon>
                );
              })}
            </PokemonList>
          </Content>
        )}
      </Container>
    </div>
  );
}
const Container = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 400px;
`;

const PokemonList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  padding: 12px;
  gap: 10px;
  margin: 0;
  position: relative;
  left: 0;
  width: 94%;
  z-index: 50;
  background-color: #fff;
`;

const Pokemon = styled.li`
  cursor: pointer;
  padding: 10px;
  border-radius: 4px;

  font-size: 14px;

  :hover {
    background-color: #c1c1c1;
    color: #fff;
  }

  > i {
    color: var(--color-primary);
  }
`;

const Content = styled.section`
  margin: 0;
  position: absolute;
  top: 50px;
  right: 2px;
  width: 90%;
  z-index: 50;
  background-color: #fff;
  max-height: 300px;
  overflow-y: auto;
  overflow-x: hidden;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 8px;
`;

const ButtonBack = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  max-width: 40px;
  width: 100%;
  height: 100%;
  background: var(--color-primary);
  border: 0;
  border-radius: 8px 0 0 8px;
  cursor: pointer;
  :hover {
    background-color: var(--color-secondary);
    transition: 0.4s;
  }
  > svg {
    color: #fff;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 32px;
  padding: 8px 8px 8px 50px;
  font-size: 1.2rem;
  border: 1px solid #c1c1c1;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  border-radius: 8px;

  :focus-visible {
    border: 1px solid var(--color-primary) !important;
    outline: initial !important;
  }
`;

export default Search;
