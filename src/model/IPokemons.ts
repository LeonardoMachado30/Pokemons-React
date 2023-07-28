type IPokemons = {
  id: number;
  name: string;
  species: any;
  sprites: {
    ack_default: any;
    back_female: any;
    back_shiny: any;
    back_shiny_female: any;
    front_default: any;
    front_female: any;
    front_shiny: any;
    front_shiny_female: any;
    versions: {
      "generation-v": {
        "black-white": { animated: IAnimated };
      };
    };
  };
  weight: number;
  types: [{ type: { name: string } }];
};

type IAnimated = {
  back_default: string | null;
  back_female: string | null;
  back_shiny: string | null;
  back_shiny_female: null;
  front_default: string | null;
  front_female: string | null;
  front_shiny: string | null;
  front_shiny_female: null;
};

export default IPokemons;
