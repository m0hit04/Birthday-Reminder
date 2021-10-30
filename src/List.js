import React from "react";

const List = ({ people }) => {
  return (
    <>
      {people.map((item) => {
        return (
          <div className="person">
            <img src={item.image} className="img" alt=""></img>
            <div>
              <h4>{item.name}</h4>
              <p>{item.age} years</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default List;
