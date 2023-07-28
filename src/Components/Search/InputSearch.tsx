import getAutoComplete from "@utils/getAutoComplete";
import axios from "axios";
import { useEffect, useState } from "react";
import AutoCompletePopUp from "./AutoCompletePopUp";

interface InputSearchProps {}

export default function InputSearch({}: InputSearchProps): JSX.Element {
  const [value, setValue] = useState("");
  const [inputValue, setInputValue] = useState<string>(null);

  const searchPokemon = async (_inputValue): Promise<void> => {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${_inputValue}`
    );

    const data = await response.json();
  };

  //   useEffect(() => {
  //     document.title = "PESQUISAR";
  //     window.onscroll = () => {
  //       setValue("");
  //     };
  //   }, [value, name]);

  return (
    <>
      <input
        className="w-full h-10 p-2 pl-12 text-lg border-0 border-b-2 border-green-700 bg-transparent text-white font-bold focus-within:border-0"
        type="text"
        placeholder="Digite o nome de um pokemon"
        onFocus={() => getAutoComplete()}
        onKeyUp={(e) =>
          setInputValue(e.currentTarget.value.toLocaleLowerCase())
        }
      />
      {inputValue && (
        <AutoCompletePopUp
          inputValue={inputValue}
          searchPokemon={searchPokemon}
        />
      )}
    </>
  );
}
