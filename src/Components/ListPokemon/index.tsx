import { IPokemons } from "@exportDefault";
import Card from "./Card";

interface IProp {
  pokemons: IPokemons[];
}

export default function ListPokemons({ pokemons }: IProp) {
  return (
    <ul className="flex flex-wrap gap-8 justify-center items-center">
      {pokemons?.map((pokemon) => (
        <Card pokemon={pokemon} key={pokemon.id} />
      ))}
    </ul>
  );
}
