import React from "react";
import { Input } from "semantic-ui-react";

function Search({ handleSearch, search }) {
  return (
    <div>
      <Input
        type="text"
        placeholder="Search"
        onChange={handleSearch}
        value={search}
      />
    </div>
  );
}

export default Search;
