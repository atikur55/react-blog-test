import React from "react";
import { useGlobalContext } from "../Context/context";
import Loading from "./Loading";
import CockTail from "./CockTail";
const CocktailList = () => {
  const { cocktails, loading } = useGlobalContext();
  if (loading) {
    return <Loading />;
  }
  if (cocktails.length < 1) {
    return <h2>No cockails matched your search criteria</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">cocktails</h2>
      <div className="cocktails-center">
        {cocktails.map((item) => {
          return <CockTail key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
};

export default CocktailList;
