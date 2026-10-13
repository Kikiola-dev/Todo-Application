
interface TaskFiltersProps {
  filter: string;
  setFilter: (filter: string) => void;
  totalTasks: number;
  activeTasks: number;
  completedTasks: number;
}

function TaskFilters({
  filter,
  setFilter,
  totalTasks,
  activeTasks,
  completedTasks,
}: TaskFiltersProps) {
  return (
    <div className="filter-buttons">
      <button
        className={filter === "all" ? "active-filter" : ""}
        onClick={() => setFilter("all")}
      >
        All ({totalTasks})
      </button>

      <button
        className={filter === "active" ? "active-filter" : ""}
        onClick={() => setFilter("active")}
      >
        Active ({activeTasks})
      </button>

      <button
        className={filter === "completed" ? "active-filter" : ""}
        onClick={() => setFilter("completed")}
      >
        Completed ({completedTasks})
      </button>
    </div>
  );
}

export default TaskFilters;