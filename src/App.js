import { useState, useEffect } from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async() => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])


  //Fetch Tasks
  const fetchTasks = async(id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`)
    const data = await res.json()

    return data
  }


  //Add Task
  const addTask = async(task) => {
    const res = await fetch(`http://localhost:3000/tasks`,{
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task),
    })
    
    const data = await res.json()
    setTasks([...tasks, data])
    
    
    // const id = Math.floor(Math.random() * 10000) + 1
    // console.log(id)
    // const newTask = { id, ...task }
    // setTasks([...tasks, newTask])
  }

  //Delete Task
  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:3000/tasks/${id}`,
    {
      method: 'DELETE'
    })

    res.status === 200
      ? setTasks(tasks.filter((task) => task.id !== id))
      : alert('Error Deleting This Task')
  }

  //Toggle Reminder
  const toggleReminder = async(id) => {
    const taskToToggle = await fetchTasks(id)
    const updTask = { ...taskToToggle,
    reminder: !taskToToggle.reminder }

    const res = await fetch(`http://localhost:3000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body:JSON.stringify(updTask)
    })

    const data = await res.json()

    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder:
      data.reminder } : task 
      ))
  }

  //output
  return (
    <div className='container'>
      <Header 
      onAdd={() => setShowAddTask
        (!showAddTask)}
      showAdd={showAddTask}  
      />
      {showAddTask && <AddTask onAdd={addTask} 
      /> }
      {tasks.length > 0 ? (
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : ( 
        'No Tasks To Show'   
      )}
    </div>
    
  )
}

export default App;