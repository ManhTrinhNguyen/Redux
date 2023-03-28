import { createStore } from "redux"

const reducerFn = (state = { counter: 0 }, action) => {
  console.log(action)
  
  if (action.type === "INC") {
    return {counter : state.counter + 1}
  } else if (action.type === "DNC") {
    return {counter : state.counter - 1}
  } else if (action.type === "ADD") {
    console.log(action.payload)
    return {counter: state.counter + action.payload}
  }
  return state
}

const store = createStore(reducerFn)

export default store