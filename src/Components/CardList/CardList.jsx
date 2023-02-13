import { useState, useEffect, useContext, useCallback } from "react";
import { Skeleton } from "@mui/material";
import styled from "styled-components";

import axios from "axios";
//COMPONENTS
import {
  Api,
  LoadingContext,
  PokemonContext,
  CompareContext,
  Card,
  Compare,
  Pagination,
  Search,
  Image,
  Historic,
  Loading,
} from "../index";

import logo_linkedin from "/public/images/logo_linkedin.svg";
import logo_github from "/public/images/logo_github.svg";

function CardList() {
  const [apiOptions, setApiOptions] = useState(null);
  const [hideBySearch, setHideBySearch] = useState(null);
  const [api, setApi] = useState(null);
  const [compare, setCompare] = useState({ Pokemon1: null, Pokemon2: null });
  const count = ["Skeleton", "Skeleton", "Skeleton"];
  useEffect(() => {
    let cleanup = (callback) => callback;
    console.log("CARDLIST");
    if (apiOptions === null) {
      setTimeout(async () => {
        const uri = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=15`;

        await Api(uri)
          .then(async ({ results }) => {
            const promisses = await results.map(({ url }) => url);
            return axios
              .all(promisses.map(async (promess) => axios.get(promess)))
              .then((data) => {
                return data.map(({ data }) => {
                  return [data.name, data.sprites.front_default, data.id];
                });
              });
          })
          .then(async (pokemons) => {
            setApiOptions(pokemons);
            cleanup(() => true);
          });
      }, 1000);
    }

    () => {
      return cleanup();
    };
  }, [apiOptions]);

  return (
    <div>
      <Search setApiOptions={setApiOptions} />
      <Historic />
      <h1 className={`${hideBySearch}`} style={{ textAlign: "center" }}>
        LISTA DE POKEMONS
      </h1>

      <CompareContext.Provider
        className="container"
        value={{ compare, setCompare }}
      >
        {apiOptions === null ? (
          <SkeletonContainer>
            {count.map((value, index) => {
              return (
                <Skeleton
                  key={index}
                  width={376}
                  height={540}
                  animation="wave"
                />
              );
            })}
          </SkeletonContainer>
        ) : (
          <Card pokemons={apiOptions} />
        )}

        {/* ITEMS FLUTUANTES */}
        {compare.Pokemon1 !== null && <Compare />}
      </CompareContext.Provider>

      <Pagination hideBySearch={hideBySearch} />

      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/flavio-leonardo-ads/"
            target={`_blank`}
          >
            <Image
              src={logo_linkedin}
              width={40}
              height={40}
              alt="LinkedIn"
              loading="lazy"
            />
          </a>
        </li>
        <li>
          <a href="https://github.com/LeonardoMachado30" target={`_blank`}>
            <Image
              src={logo_github}
              width={40}
              height={40}
              alt="GitHub"
              loading="lazy"
            />
          </a>
        </li>
      </ul>
    </div>
  );
}

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

export default CardList;
