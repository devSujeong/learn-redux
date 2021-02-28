import { createStore } from 'redux'; // store 만듦

const initialState = {
  counter: 0,
  text: '',
  list: [],
};

const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

const increase = () => ({
  type: INCREASE
});

const decrease = () => ({
  type: DECREASE
});

const changeText = text => ({
  type: CHANGE_TEXT,
  text
});

const addToList = item => ({
  type: ADD_TO_LIST,
  item
});

function reducer(state = initialState, action) {
  switch(action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state
  }
}

const store = createStore(reducer);
console.log(store.getState()); // 현재 store안에 있는 state의 상태를 조회

// make subscribe
const listener = () => {
  const state = store.getState();
  console.log(state);
}

const unsubscribe = store.subscribe(listener);
// unsubscribe(); // 구독 해지하고 싶을 때 호출

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('안녕하세요'));
store.dispatch(addToList({
  id: 1,
  text: 'wow'
}));

// window.store = store; // 브라우저 콘솔에서 사용할 수 있도록 등록해줌