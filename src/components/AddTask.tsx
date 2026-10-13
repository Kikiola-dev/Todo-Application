
interface AddTaskProps {
  newTaskTitle: string;
  setNewTaskTitle: (title: string) => void;
  newTaskDescription: string;
  setNewTaskDescription: (description: string) => void;
  onAddTask: () => void;
}

function AddTask({
  newTaskTitle,
  setNewTaskTitle,
  newTaskDescription,
  setNewTaskDescription,
  onAddTask,
}: AddTaskProps) {
  return (
    <div className="add-task-form">
      <input
        type="text"
        placeholder="Enter a task..."
        value={newTaskTitle}
        onChange={(event) => setNewTaskTitle(event.target.value)}
      />

      <input
      type="text"
      placeholder="Enter a task description..."
      value={newTaskDescription}
      onChange={(event) =>
        setNewTaskDescription(event.target.value)}
        />
      

      <button onClick={onAddTask}>Add Task</button>
    </div>
  );
}


export default AddTask;