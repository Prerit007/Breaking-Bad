import React from "react";
import Spinner from "../ui/Spinner";
import CharItem from "./CharItem";

const Grid = ({ items, isLoading }) => {
  return isLoading ? (
    <Spinner />
  ) : (
    <section className="cards">
      {items.map((item) => (
        <CharItem key={item.char_id} item={item} />
      ))}
    </section>
  );
};

export default Grid;
