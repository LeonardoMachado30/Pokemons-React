import { GetStaticProps, InferGetStaticPropsType } from "next";
import {
  Card,
  Compare,
  CompareContext,
  Historic,
  Pagination,
  Pokemons,
  Search,
  Skeleton,
  SocialButtons,
  axios,
  styled,
  useEffect,
  useState,
  IPokemon,
} from "@exportDefault";

interface IUrl {
  name: string;
  url: string;
}

export const getStaticProps: GetStaticProps<{
  pokemon: IPokemon[];
}> = async () => {
  const pokemons = new Pokemons();
  const { results } = await pokemons.get();
  const urlList = results.map((data: IUrl) => data.url);
  let pokemon: IPokemon[] = await pokemons.getAll(urlList);

  return { props: { pokemon } };
};

const SkeletonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

function Home({ pokemon }: InferGetStaticPropsType<typeof getStaticProps>) {
  const [pokemons2, setPokemons] = useState(null);
  const [compare, setCompare] = useState({ Pokemon1: null, Pokemon2: null });
  const countSkeleton = Array.from({ length: 6 }, (_, index) => index + 1);
  console.log(pokemon);
  return (
    <div className="container">
      <Search setApiOptions={setPokemons} />
      <Historic />
      <h1 style={{ textAlign: "center" }}>LISTA DE POKEMONS</h1>
      {/* 
      <CompareContext.Provider
        className="container"
        value={{ compare, setCompare }}
      > */}
      {pokemon === null ? (
        <SkeletonContainer>
          {countSkeleton.map((value, index) => {
            return (
              <Skeleton key={index} width={376} height={540} animation="wave" />
            );
          })}
        </SkeletonContainer>
      ) : (
        <Card pokemons={pokemon} />
      )}

      {/* ITEMS FLUTUANTES */}
      {compare.Pokemon1 !== null && <Compare />}
      {/* </CompareContext.Provider> */}

      <Pagination />

      <SocialButtons />
    </div>
  );
}

export default Home;
