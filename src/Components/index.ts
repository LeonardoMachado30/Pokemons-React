import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import axios from "axios";
import { Skeleton } from "@mui/material";
//COMPONENTS
import SocialButtons from "@component/SocialButtons";
import ListPokemon from "@component/ListPokemon";
import Pagination from "@component/Pagination";
import Historic from "@component/Historic";
import Loading from "@component/Loading";
import Compare from "@component/Compare";
import Search from "@component/Search";
// import Info from "@component/Info";
//UTILS
import { CompareContext, PokemonContext } from "@utils/context";
import getAutoComplete from "@utils/getAutoComplete";
//SERVICES
import Pokemons from "@services/pokemon.service";
//moodel
import IPokemons from "@model/IPokemons";

export {
  Image,
  useState,
  useEffect,
  Skeleton,
  styled,
  axios,
  ListPokemon,
  Compare,
  // Info,
  Loading,
  Pagination,
  Search,
  Historic,
  SocialButtons,
  Pokemons,
  getAutoComplete,
  CompareContext,
  PokemonContext,
};

export type { IPokemons };
