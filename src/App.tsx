import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return (
    <div>
      <Greetings name="MJ" onClick={onClick} />
      <Counter />
    </div>
  );
}

export default App;
