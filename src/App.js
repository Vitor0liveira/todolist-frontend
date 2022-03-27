import './App.css'
import DisplayTodos from './component/DisplayTodos'
import Todos from './component/Todos'

function App() {
  return (
    <div className="App">
      <Todos />
      <DisplayTodos />
    </div>
  )
}

export default App
