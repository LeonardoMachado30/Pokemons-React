import { IPokemon, axios } from "@exportDefault";
import { AxiosResponse } from "axios";

interface IRequestPokemon {
  count: number;
  next: string;
  previous: null;
  results: [];
}

export default class Pokemons {
  constructor(private uriBase = "/pokemon/?limit=60") {}

  private api = axios.create({
    baseURL: "https://pokeapi.co/api/v2",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
  });

  async get(): Promise<IRequestPokemon> {
    try {
      const resp = await this.api.get<IRequestPokemon>(this.uriBase);
      return resp.data;
    } catch (e) {
      return e;
    }
  }

  async getAll(urls: string[]): Promise<IPokemon[]> {
    try {
      const requests = urls.map((url: string) => axios.get<IPokemon>(url));

      const responses = await Promise.all(requests);

      const data = responses.map((response) => response.data);
      return data;
    } catch (e) {
      throw new Error(e);
    }
  }

  // async getAll(url: Array<string>) {
  //   return await axios
  //     .all(url.map(async (uri) => await axios.get(uri)))
  //     .then((data) => console.log(data));

  //   return pokemons.map(({ data }) => {
  //     return {
  //       name: data.name,
  //       species: data.species,
  //       sprites: {
  //         ack_default: data.sprites.ack_default,
  //         back_female: data.sprites.back_female,
  //         back_shiny: data.sprites.back_shiny,
  //         back_shiny_female: data.sprites.back_shiny_female,
  //         front_default: data.sprites.front_default,
  //         front_female: data.sprites.front_female,
  //         front_shiny: data.sprites.front_shiny,
  //         front_shiny_female: data.sprites.front_shiny_female,
  //         home: {
  //           dream_world: data.sprites.other.home,
  //         },
  //       },
  //       weight: data.weight,
  //       types: data.types,
  //     };
  //   });
  // }
}
