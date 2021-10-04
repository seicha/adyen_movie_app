import React, { useState } from "react";

const Search = (setMovies) => {
  const [searchValue, setSearchValue] = useState("");
  
  const sendValue = (e) => {
    setMovies.getInputValue(e.target.value); 
  }

  const resetInputField = () => {
    setSearchValue("");
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setMovies.getSubmit(searchValue);
    resetInputField();    
  }
  
  return (
    <div className="searchContainer">
      <form className="search">
        <input
          onChange={sendValue}
          type="text"
          placeholder="Pirate"
          className="form-control"
        />
        <input onClick={handleSubmit} type="submit" value="SEARCH" className="btn btn-primary"/>      
      </form>
    </div>
  );
}

export default Search;