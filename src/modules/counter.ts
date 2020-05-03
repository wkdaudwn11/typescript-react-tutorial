// 액션 타입 선언
// 뒤에 as const를 붙여줌으로써 나중에 액션 객체를 만들게 action.type의 값을 추론하는 과정에서
// action.type이 string으로 추론되지 않고 'counter/INCREASE'와 같이 실제 문자열 값으로 추론 되도록 해줍니다.
const INCREASE = "counter/INCREASE" as const;
const DECREASE = "counter/DECREASE" as const;
const INCREASE_BY = "counter/INCREASE_BY" as const;

// 액션 생성함수 선언
export const increase = () => ({
  type: INCREASE,
});

export const decrease = () => ({
  type: DECREASE,
});

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload: diff,
});

// 모든 액션 객체들에 대한 타입 준비
// ReturnType<typeof ____> 는 특정 함수의 반환값을 추론해줍니다.
// 상단부에서 액션타입을 선언 할 때  as const를 하지 않으면 이 부분이 제대로 작동하지 않습니다.
type CounterAction =
  | ReturnType<typeof increase>
  | ReturnType<typeof decrease>
  | ReturnType<typeof increaseBy>;

// 이 리덕스 모듈에서 관리 할 상태의 타입을 선언
type CounterState = {
  count: number;
};

// 초기 상태 선언
const initialState: CounterState = {
  count: 0,
};

// 리듀서 작성
const counter = (
  state: CounterState = initialState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case INCREASE:
      return { count: state.count + 1 };
    case DECREASE:
      return { count: state.count - 1 };
    case INCREASE_BY:
      return { count: state.count + action.payload };
    default:
      return state;
  }
};

export default counter;
