import TaskList from "./components/TaksList";
import Taskform from "./components/Taskform";


function App() {
  
//task is a variable and setTask is a function 
// esta funcion act
  return (
    <main className = 'bg-zinc-900 h-screen'>
      <div className = 'container mx-auto p-10'>
      <Taskform/>
      <TaskList />
      </div>
    </main>
  );
}

export default App;
