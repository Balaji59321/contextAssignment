import React, { useReducer } from "react";

export const ContextProducer = React.createContext({});

const reducer = (state, action) => {
  console.log(action.ele);
  switch (action.type) {
    case "ADD":
      return [...state, action.val];
    case "UPDATE":
      state[action.val[2]] = action.val[0];
      return [...state];
    case "DELETE":
      return state.filter((ele) => ele !== action.ele);
    default:
      return state;
  }
};

const ContextProvider = (props) => {
  return (
    <ContextProducer.Provider
      value={useReducer(reducer, props.value)}
      className={props.className}
    >
      {props.children}
    </ContextProducer.Provider>
  );
};

export default ContextProvider;

export const ContextConsumer = () => React.useContext(ContextProducer);
