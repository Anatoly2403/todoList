import AddTodo from "./Components/AddTodo";
import Header from "./Components/Header";
import Todos from "./Components/Todos";
import TodoState from "./State/TodoState";

function App() {
  return (
    <TodoState>
      <Header />
      <div className="container mt-4">
        <AddTodo />
        <Todos />
      </div>
    </TodoState>
  );
}

export default App;
