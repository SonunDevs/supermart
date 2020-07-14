import React from "react";
import classes from "./SearchSection.module.css";

function SearchSection(props) {
  return (
    <div className={classes.SearchSection}>
      <div className={classes.search_input_wrapper}>
        <select>
          <option>stores</option>
          <option>products</option>
        </select>
      </div>
    </div>
  );
}

export default SearchSection;
