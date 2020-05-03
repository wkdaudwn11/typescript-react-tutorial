import React, { useState } from "react";

const Counter = () => {
  // Generic으로 타입 표시. 생략해도 상관은 없음
  const [count, setCount] = useState<number>(0);

  // Generic을 사용하는 경우는 보통 null 일 수도 있고 아닐 수도 있는 경우에 많이 쓰임.
  type Information = { name: string; description: string };
  const [info, setInformation] = useState<Information | null>(null);

  const onIncrease = () => setCount(count + 1);
  const onDecrease = () => setCount(count - 1);

  return (
    <div>
      <h1>{count}</h1>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
    </div>
  );
};

export default Counter;
