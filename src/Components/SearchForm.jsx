import React from "react";
import { useGlobalContext } from "../Context/context";
const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext();

  return (
    <section className="section search">
      <form className="search-form">
        <div className="form-control">
          <input type="text" name="name" placeholder="Search here"/>
        </div>
      </form>
    </section>
  );
};

export default SearchForm;
