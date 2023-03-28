import {useSelector , useDispatch} from "react-redux"
import './App.css';

function App() {
  const counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  function increase() {
    dispatch({type:"INC"})
  }

  function decrease() {
    dispatch({type: "DNC"})
  }

  function addBy() {
    dispatch({type: "ADD", payload: 10})
}
  return (
    <div className="App">
      <h1>Counter</h1>
      <h1>{counter}</h1>
      <button onClick={increase}>Increasement</button>
      <button onClick={decrease}>Decreasment</button>
      <button onClick={addBy}>Add by 10</button>
    
    </div>
  );
}

export default App;
