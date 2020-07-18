import React from "react";
import classes from "./SearchSection.module.css";
import { Select } from "antd";
import { Input } from "antd";

const { Search } = Input;

const { Option } = Select;

function SearchSection(props) {
  return (
    <div className={classes.SearchSection}>
      <div className={classes.search_input_wrapper}>
        <Select defaultValue="stores" style={{ width: 120 }}>
          <Option value="stores">Stores</Option>
          <Option value="products">Products</Option>
        </Select>
        <Search
          placeholder="input search text"
          enterButton="Search"
          size="large"
          onSearch={(value) => console.log(value)}
        />
      </div>
    </div>
  );
}

export default SearchSection;
