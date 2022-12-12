import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';


const App = () => {
  const [showAddTask, setShowAdd] = useState(false)
  const [tasks, setTasks] = useState([
    //add data's
    {
      id: 1,
      text: 'Staff\'s Appointment',
      day: 'Feb 5th at 2.30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Teacher\'s Appointment',
      day: 'Feb 6th at 3.30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Student\'s Appointment',
      day: 'Feb 7th at 4.30pm',
      reminder: false,
    }
  
])

  //Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    console.log(id)
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id ))
  }
//todo:toggle reminder still not working
  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder:
      !task.reminder } : task 
      ))
  }
  //output
  return (
    <div className='container'>
      <Header onAdd={()}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ( 'No Tasks To Show' )
    }
    </div>
  )
}


export default App;