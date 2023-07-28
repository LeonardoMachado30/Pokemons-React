import {
  useEffect,
  useState,
  styled,
  getAutoComplete,
  PokemonContext,
  axios,
} from "@exportDefault";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RefreshIcon from "@mui/icons-material/Refresh";
import reactStringReplace from "react-string-replace";
import AutoCompletePopUp from "./AutoCompletePopUp";
import InputSearch from "./InputSearch";

function Search({ setApiOptions }) {
  return (
    <section className="flex w-full justify-center self-end pb-16">
      <div className="relative flex w-full max-w-[500px] items-center">
        <InputSearch />
      </div>
    </section>
  );
}

export default Search;
