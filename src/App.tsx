import React from "react";
import Greetings from "./Greetings";
import Counter from "./Counter";
import MyForm from "./MyForm";
import ReducerSample from "./ReducerSample";
import CounterContainer from "./containers/CounterContainer";
import TodoApp from "./containers/TodoApp";

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
      <ReducerSample />
      <br />
      <hr />
      <h1>Redux - Counter</h1>
      <CounterContainer />
      <hr />
      <h1>Redux - Todo List</h1>
      <TodoApp />
      <hr />
    </div>
  );
}

export default App;
