import { IPokemons, axios } from "@exportDefault";
interface IApiPokemon {
  count: number;
  next: string;
  previous: null;
  results: IPokemons[];
}
interface IPokemonsClass {
  get: () => Promise<IApiPokemon>;
  getAll: (urls: string[]) => Promise<IPokemons[]>;
}

export default class Pokemons implements IPokemonsClass {
  private apiCreateAxios = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  });

  constructor(private urlBase = "/pokemon/?limit=") {}

  async get(length?: number): Promise<IApiPokemon> {
    try {
      if (length < 15) throw new Error("Minimun value is 15 pokemons");

      const concatUrl: string = `${this.urlBase}${length}`;
      const resp: any = await this.apiCreateAxios.get<IApiPokemon>(concatUrl);
      return resp.data;
    } catch (e) {
      return e;
    }
  }

  async getAll(urls: string[]): Promise<IPokemons[]> {
    try {
      const requests = await urls.map(
        async (url: string) => await axios.get<IPokemons>(url)
      );

      const responses = await Promise.all(requests);

      return await responses.map((response) => response.data);
    } catch (e) {
      throw new Error(e);
    }
  }
}
