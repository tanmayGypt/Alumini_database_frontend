const SearchBar = ({ handleSearch, handleFilter }) => {
  return (
    <div className="flex justify-center mt-4">
      <div className="flex items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="Search interviews..."
          onChange={handleSearch}
          className="p-3 border border-gray-300 rounded-l w-full text-lg focus:outline-none"
          style={{ maxWidth: "400px" }}
        />
        <button
          onClick={handleFilter}
          className="p-3 bg-blue-500 text-white rounded-r hover:bg-blue-600 focus:outline-none"
        >
          Filter
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
