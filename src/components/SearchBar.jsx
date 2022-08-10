import React, { Component } from "react";
import { Link } from "react-router-dom";

function SearchBar(props) {
  const search = props.search;

  return (
    <div className="searchBar">
      <input
        placeholder={props.placeholder}
        type="text"
        onChange={(e) => {
          props.action(e.target.value);
          console.log(search);
        }}
      />

      <div className="predict">
        {props.api
          .filter((val) => {
            if (search == "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              console.log(val);
              return val;
            }
          })
          .map((val) => {
            return (
              <div className="autocomplete" key={val.name}>
                <Link to="/about">{val.name}</Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default SearchBar;
