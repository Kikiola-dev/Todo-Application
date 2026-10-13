
import { useState, useEffect } from "react";
import type { Task } from "../types";

function useTasks() {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (savedTasks !== null) {
      try {
        const parsedTasks = JSON.parse(savedTasks) as Task[];

        // Support tasks saved before descriptions were added.
        return parsedTasks.map((task) => ({
          ...task,
          description: task.description ?? "",
        }));
      } catch {
        console.error("Could not load saved tasks.");
      }
    }

    return [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title: string, description: string) {
    if (title.trim() === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: title.trim(),
      description: description.trim(),
      completed: false,
    };

    setTasks([...tasks, newTask]);
  }

  function toggleTask(taskId: number) {
    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      }),
    );
  }

  function deleteTask(taskId: number) {
    setTasks(tasks.filter((task) => task.id !== taskId));
  }

  function saveEdit(
    taskId: number,
    newTitle: string,
    newDescription: string,
  ) {
    if (newTitle.trim() === "") {
      return;
    }

    setTasks(
      tasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            title: newTitle.trim(),
            description: newDescription.trim(),
          };
        }

        return task;
      }),
    );
  }

  return {
    tasks,
    setTasks,
    addTask,
    toggleTask,
    deleteTask,
    saveEdit,
  };
}

export default useTasks;