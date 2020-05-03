import React from "react";
// import Greetings from "./Greetings";
import Greetings from "./Greetings";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  return <Greetings name="MJ" onClick={onClick} />;
}

export default App;
