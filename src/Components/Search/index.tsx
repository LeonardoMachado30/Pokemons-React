import InputSearch from "./InputSearch";

function Search({ setApiOptions }) {
  return (
    <section className="flex w-full justify-center self-end pb-16">
      <div className="relative flex w-full max-w-[500px] items-center">
        <InputSearch />
      </div>
    </section>
  );
}

export default Search;
