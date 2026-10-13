
import type { Task } from "../types";

function useTaskProgress(tasks: Task[]) {
  const completedTasks = tasks.filter(
    (task) => task.completed,
  ).length;

  const totalTasks = tasks.length;

  let percentage = 0;

  if (totalTasks > 0) {
    percentage = Math.round(
      (completedTasks / totalTasks) * 100,
    );
  }

  return {
    completedTasks,
    totalTasks,
    percentage,
  };
}

export default useTaskProgress;