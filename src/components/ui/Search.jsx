import React, { useState } from "react";

const Search = ({ getName }) => {
  const [text, setText] = useState("");

  const onChange = (q) => {
    setText(q);
    getName(q);
  };

  return (
    <section className="search">
      <form>
        <input
          placeholder="Search Character ..."
          type="text"
          value={text}
          className="form-control"
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        />
      </form>
    </section>
  );
};

export default Search;
