import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  //states
  const [people, setPeople] = useState(data);

  //functions

  const clearHandler=()=>{
    setPeople([]);
  }

  return (
    <main>
      <section className="container">
        <h3> {people.length} birthdays today {people.id}</h3>
        <List people={people} />
        <button onClick={() => {clearHandler()}}>Clear all</button>
      </section>
    </main>
  );
}

export default App;
