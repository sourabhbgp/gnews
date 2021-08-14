const Search = () => {
  return (
    <div className="p-8">
      <form
        className="m-4 flex justify-center items-center w-full"
        onSubmit={(e) => {
          e.preventDefault();
          // router.push(`/search?term=${searchTerm}`);
        }}>
        <input
          className="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white text-base w-5/12  focus:outline-none"
          placeholder="Enter the Search Term"
          name="term"
          // onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="px-8 rounded-r-lg bg-blue-500 text-white font-bold p-4 uppercase border-blue-500 border-t border-b border-r  text-base  focus:outline-none  hover:bg-gray-600">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
