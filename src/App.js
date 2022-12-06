import { useState } from "react";
import Header from './components/Header';
import Tasks from './components/Tasks';


const App = () => {
  const [tasks, setTasks] = useState([
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
      reminder: true,
    }
  
])
  return (
    <div className='container'>
      <Header/>
      <Tasks tasks={tasks}/>
      
    </div>
  )
}


export default App;
