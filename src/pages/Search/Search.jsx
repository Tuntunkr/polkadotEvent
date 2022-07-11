import React from 'react';
import "../Search/Search.css"

function Search() {
  return <>
        <div className="searchbarContainer">
                <input
                  type="search"
                  placeholder="Search topic by names,tags or categories"
                  
                />
                <button type='search' className='blogbtn'>Search</button>
                <span>
                <img src="../images/search.svg" alt=""/>

                </span>
              </div>

  </>;
}

export default Search;


