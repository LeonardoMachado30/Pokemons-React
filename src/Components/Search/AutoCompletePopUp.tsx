import { useEffect, useState } from "react";
import reactStringReplace from "react-string-replace";

interface IAutoCompletePopUp {
  inputValue: string;
  searchPokemon: (inputValue: string) => void;
}

export default function AutoCompletePopUp({
  inputValue,
  searchPokemon,
}: IAutoCompletePopUp): JSX.Element {
  const [names, setNames] = useState<string[]>(null);

  useEffect(() => {
    const getName = () => {
      const PokemonList = JSON.parse(localStorage.getItem("PokemonList"));
      const namesList = PokemonList.filter((e) => e.includes(inputValue));
      setNames(namesList);
    };
    getName();
  }, [inputValue]);

  return (
    <>
      {names && (
        <section className="absolute z-50 overflow-y-auto overflow-x-hidden rounded-lg w-full max-h-[300px] top-9">
          <ul className="flex flex-col justify-center px-1 gap-2 bg-white z-50">
            {names?.map((pokemon, index) => {
              return (
                <li
                  className="cursor-pointer p-4 hover:bg-red-700 hover:text-white hover:rounded"
                  key={index}
                  id={pokemon}
                  onClick={(e) => {
                    searchPokemon(inputValue);
                  }}
                >
                  {reactStringReplace(pokemon, inputValue, (match, i) => (
                    <i key={i} className="text-[var(--color-primary)]">
                      {match}
                    </i>
                  ))}
                </li>
              );
            })}
          </ul>
        </section>
      )}
    </>
  );
}
