import React from "react";

const List = ({ wishes }) => {
  return (
    <>
      {wishes.map((wish) => {
        const { id, name, age, image } = wish;
        return (
          <article key={id} className="person">
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;
