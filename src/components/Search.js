import React, {useState} from "react";

function Search({handleSearch}) {

  //state to change
  const [search, setSearch] = useState('')

  function handleSubmit(e) {
    e.preventDefault();
    handleSearch(search)
    setSearch('')
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
