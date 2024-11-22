import React from "react";

const FilterInput = ({ filter, setFilter }) => (
  <input
    type="text"
    className="filter-input"
    placeholder="Filter by name"
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
  />
);

export default FilterInput;
