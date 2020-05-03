import React from "react";

type GreetingsProps = {
  name: string;
  mark: string;
  optional?: string;
  onClick: (name: string) => void;
};

/** React.FC 를 사용 할 때는 props 의 타입을 Generics 로 넣어서 사용합니다. 이렇게 React.FC를 사용해서 얻을 수 있는 이점은 두가지가 있습니다.
 * 첫번째는, props 에 기본적으로 children 이 들어가있다는 것 입니다.
 * 두번째는 컴포넌트의 defaultProps, propTypes, contextTypes 를 설정 할 때 자동완성이 될 수 있다는 것 입니다.
 * 한편으로는 단점도 존재하긴 합니다. children 이 옵셔널 형태로 들어가있다보니까 어찌 보면 컴포넌트의 props 의 타입이 명백하지 않습니다. 예를 들어 어떤 컴포넌트는 children이 무조건 있어야 하는 경우도 있을 것이고, 어떤 컴포넌트는 children 이 들어가면 안되는 경우도 있을 것입니다. React.FC 를 사용하면 기본적으로는 이에 대한 처리를 제대로 못하게 됩니다. 만약에 하고 싶다면 결국 Props 타입 안에 children 을 설정해야하죠.
  type GreetingsProps = {
    name: string;
    children: React.ReactNode;
  };
 * 그리고 defaultProps가 제대로 작동하지 않음.
 * 결론: 안쓰는 것을 권장함.
 */
// const Greetings: React.FC<GreetingsProps> = ({ name }) => (
//   <div>Hello, {name}</div>
// );

function Greetings({ name, mark, optional, onClick }: GreetingsProps) {
  function handleClick() {
    onClick(name);
  }

  return (
    <div>
      Hello, {name} {mark}
      {optional && <p>{optional}</p>}
      <div>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
}

Greetings.defaultProps = {
  mark: "!",
};

export default Greetings;
