import type { Task } from "../types";

interface TaskItemProps {
  task: Task;
  onToggle: (taskId: number) => void;
  onEdit: (task: Task) => void;
  onDelete: (taskId: number) => void;
}

function TaskItem({ task, onToggle, onEdit, onDelete }: TaskItemProps) {
  return (
    <div className="task-row">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />

    <div className="task-details">
 <span className={task.completed ? "completed-task" : ""}>
  {task.title}
</span>
  {task.description && <p>{task.description}</p>}
</div>

      <button onClick={() => onEdit(task)}>Edit</button>
      <button onClick={() => onDelete(task.id)}>Delete</button>
    </div>
  );
}

export default TaskItem;
