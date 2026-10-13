import "./App.css";
import TaskFilters from "./components/TaskFilters";
import TaskProgress from "./components/TaskProgress";
import type { Task } from "./types";
import TaskItem from "./components/TaskItem";
import AddTask from "./components/AddTask";
import EditTask from "./components/EditTask";
import { useState } from "react";
import useTasks from "./hooks/useTasks";
import useFilteredTasks from "./hooks/useFilteredTasks";
import useTaskProgress from "./hooks/useTaskProgress";

function App() {
  const { tasks, addTask, toggleTask, deleteTask, saveEdit } = useTasks();
  const [newTaskTitle, setNewTaskTitle] = useState<string>("");
  const [newTaskDescription, setNewTaskDescription] = useState<string>("");
  const [editingTaskId, setEditingTaskId] = useState<number | null>(null);
  const [editedTitle, setEditedTitle] = useState<string>("");
  const [editedDescription, setEditedDescription]= useState<string>("");
  const [filter, setFilter] = useState<string>("all");

  const filteredTasks = useFilteredTasks(tasks, filter);

  const { completedTasks, totalTasks, percentage } = useTaskProgress(tasks);

  function startEditing(task: Task) {
    setEditingTaskId(task.id);
    setEditedTitle(task.title);
    setEditedDescription(task.description)
  }

  return (
    <div className="app-container">
      <div className="todo-card">
        <h1>My Todo App</h1>

        <TaskProgress percentage={percentage} />
        <TaskFilters
          filter={filter}
          setFilter={setFilter}
          totalTasks={totalTasks}
          activeTasks={totalTasks - completedTasks}
          completedTasks={completedTasks}
        />

       {filter === "all" && (
  <AddTask
    newTaskTitle={newTaskTitle}
    setNewTaskTitle={setNewTaskTitle}
    newTaskDescription={newTaskDescription}
    setNewTaskDescription={setNewTaskDescription}
    onAddTask={() => {
      addTask(newTaskTitle, newTaskDescription);
      setNewTaskTitle("");
      setNewTaskDescription("");
    }}
  />
)}
        {filteredTasks.map((task) => (
          <div key={task.id}>
            {editingTaskId === task.id ? (
              <EditTask
                editedTitle={editedTitle}
                setEditedTitle={setEditedTitle}
                editedDescription={editedDescription}
setEditedDescription={setEditedDescription}
                onSave={() => {
                  saveEdit(task.id, editedTitle, editedDescription);
                  setEditingTaskId(null);
                  setEditedTitle("");
                  setEditedDescription("");
                }}
                onCancel={() => {
                  setEditingTaskId(null);
                  setEditedTitle("");
                  setEditedDescription("");

                }}
              />
            ) : (
              <TaskItem
                task={task}
                onToggle={toggleTask}
                onEdit={startEditing}
                onDelete={deleteTask}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
