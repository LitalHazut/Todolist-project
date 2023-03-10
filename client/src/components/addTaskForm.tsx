import React from 'react';
import { useAddTask } from '../context/addContext';
const AddTaskForm: React.FC<{}> = () => {
  const [newTask, setNewTask] = React.useState('');

  return (
    <>
      <div className='row'>
        <div className='col'>
          <NewTaskInput newTask={newTask} setNewTask={setNewTask} />
        </div>
        <div className='col-auto'>
          <SubmitTask newTask={newTask} setNewTask={setNewTask} />
        </div>
      </div>
      <br />
    </>
  );
};

const NewTaskInput: React.FC<{
  newTask: string;
  setNewTask: (newTask: string) => void;
}> = ({ newTask, setNewTask }) => (
  <input
    value={newTask}
    onChange={(e) => setNewTask(e.target.value)}
    className='form-control from-control-lg'
  />
);

const SubmitTask: React.FC<{
  newTask: string;
  setNewTask: (newTask: string) => void;
}> = ({ newTask, setNewTask }) => {
  const addTask = useAddTask(setNewTask);

  return (
    <button
      onClick={(e) => addTask(newTask)}
      className='btn btn-lg btn-success'
    >
      Add Task
    </button>
  );
};

export default AddTaskForm;
