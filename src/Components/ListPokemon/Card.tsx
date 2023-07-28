import { IPokemons, Image, useState } from "@exportDefault";
import selectColor from "@utils/pokemonColor";
import Info from "@mui/icons-material/Info";
import SyncIcon from "@mui/icons-material/Sync";

interface IProp {
  pokemon: IPokemons;
}

export default function Card({ pokemon }: IProp): JSX.Element {
  const [activeShiny, setActiveShiny] = useState<boolean>(null);
  const [id, setId] = useState(null);
  const styleCheet = selectColor(pokemon.types[0].type.name);
  const { front_default, front_shiny } =
    pokemon.sprites?.versions["generation-v"]["black-white"]?.animated;
  const imageRender = activeShiny ? front_shiny : front_default;

  return (
    <li className="relative flex flex-col items-center justify-around w-full min-h-[260px] max-w-[260px] hover:scale-105 bg-center bg-[length:74%] bg-no-repeat drop-shadow-xl cursor-pointer close-pokebola">
      <Image
        src={imageRender}
        alt={pokemon.name}
        width={100}
        height={80}
        style={{ height: "100px", width: "100px" }}
        className="mt-5"
      />
      {/* <Image
        src={styleCheet.img}
        alt={styleCheet.type}
        title={styleCheet.type}
        width={40}
        height={40}
        className="absolute top-4 right-4"
      /> */}

      {/* <p className="text-white font-bold text-xl">{pokemon.name}</p> */}

      {/* <div className="flex justify-between gap-2">
        <button
          className="bg-white text-white py-1 px-2 rounded-[100%]
           active:bg-gray-500 hover:scale-110 shadow-lg"
          onClick={() => setId(pokemon.id)}
        >
          <Info className="fill-black" />
        </button>

        <button
          className="bg-white text-white py-1 px-2 rounded-[100%]
           active:bg-gray-500 hover:scale-110 shadow-lg"
          onClick={() => setActiveShiny(!activeShiny)}
        >
          <SyncIcon className="fill-black" />
        </button>
      </div> */}
    </li>
  );
}
