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
    home: {
      dream_world: any;
    };
  };
  weight: any;
  types: [{ type: { name: string } }];
};

export default IPokemons;
