import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  ListPokemon,
  Compare,
  Historic,
  Pagination,
  Pokemons,
  Search,
  SocialButtons,
  useState,
  IPokemons,
} from "@exportDefault";

export const getStaticProps: GetStaticProps<{
  pokemons: IPokemons[];
}> = async () => {
  const _pokemons = new Pokemons();
  const { results } = await _pokemons.get(15);
  const urlList: string[] = results.map((data: any) => data.url);
  const pokemons: IPokemons[] = await _pokemons.getAll(urlList);
  return {
    props: { pokemons },
    revalidate: 345600, // Revalidar cada 4 días  };
  };
};

function Home({ pokemons }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [pokemons2, setPokemons] = useState(null);
  const [compare, setCompare] = useState({ Pokemon1: null, Pokemon2: null });

  return (
    <>
      <div className="relative flex flex-col items-center justify-between px-5 !bg-[url('/images/background_default.png')] bg-no-repeat h-[120vh] bg-cover clound-animation">
        <h1 className="text-center text-6xl font-bold py-4 text-white">
          LISTA DE POKEMONS
        </h1>
        <Search setApiOptions={setPokemons} />
      </div>
      <div className="bg-[#69aa10]">
        <section className="container !px-4 ">
          <Historic />

          {/* 
      <CompareContext.Provider
        className="container"
        value={{ compare, setCompare }}
      > */}

          <ListPokemon pokemons={pokemons} />

          {/* ITEMS FLUTUANTES */}
          {compare.Pokemon1 !== null && <Compare />}
          {/* </CompareContext.Provider> */}

          <Pagination />

          <SocialButtons />
        </section>
      </div>
    </>
  );
}

export default Home;
