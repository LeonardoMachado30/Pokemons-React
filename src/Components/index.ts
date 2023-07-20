import { useState, useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import axios from "axios";
import { Skeleton } from "@mui/material";
//COMPONENTS
import Card from "@component/Card";
import Compare from "@component/Compare";
import Info from "@component/Info/Info";
import Loading from "@component/Loading";
import Pagination from "@component/Pagination";
import Search from "@component/Search";
import Historic from "@component/Historic";
import SocialButtons from "@component/SocialButtons";
//UTILS
import { CompareContext, PokemonContext } from "@utils/context";
import getAutoComplete from "@utils/getAutoComplete";
//SERVICES
import Pokemons from "@services/pokemon.service";
//moodel
import IPokemon from "@model/IPokemon";

export {
  Image,
  useState,
  useEffect,
  Skeleton,
  styled,
  axios,
  Card,
  Compare,
  Info,
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

export type { IPokemon };
