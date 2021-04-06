import { useState } from "react";
import "./App.css";
import data from "./Data";
import List from "./List";

function App() {
  const [wishes, setWishes] = useState(data);
  console.log(data);
  return (
    <main>
      <section className="container">
        <h3>{wishes.length} Birthday Wish</h3>
        <List wishes={wishes} />
        <button onClick={() => setWishes([])}>Clear All</button>
      </section>
    </main>
  );
}

export default App;
