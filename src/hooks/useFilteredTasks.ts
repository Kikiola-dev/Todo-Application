import type { Task } from "../types";

function useFilteredTasks(tasks: Task[], filter: string) {
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") {
      return !task.completed;
    }

    if (filter === "completed") {
      return task.completed;
    }

    return true;
  });

  return filteredTasks;
}

export default useFilteredTasks;