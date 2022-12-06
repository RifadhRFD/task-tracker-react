
const tasks = [
  {
    id: 1,
    text: 'Doctor\'s Appointment',
    day: 'Feb 5th at 2.300pm',
    reminder: true,
  },
  {
    id: 1,
    text: 'Teacher\'s Appointment',
    day: 'Feb 5th at 2.300pm',
    reminder: true,
  },
  {
    id: 1,
    text: 'Student\'s Appointment',
    day: 'Feb 5th at 2.300pm',
    reminder: true,
  }
];

const Task = () => {
  return (
    <>
      {tasks.map((task) => ( <h3>{task.text}</h3> )
      
      )}
    </>
  )
}

export default Task
