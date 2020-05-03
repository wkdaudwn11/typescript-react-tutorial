import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
  };
  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
  };
  return (
    <div>
      <Greetings name="MJ" onClick={onClick} />
      <Counter />
      <MyForm onSubmit={onSubmit} />
    </div>
  );
}

export default App;
