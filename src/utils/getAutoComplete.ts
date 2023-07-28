async function getAutoComplete(): Promise<any> {
  if (localStorage.getItem("PokemonList") !== null) return;

  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1279");
  const data = await response.json();
  const names: string[] = data.results.map((obj) => obj.name);
  localStorage.setItem("PokemonList", JSON.stringify(names));
  return names;
}

export default getAutoComplete;
