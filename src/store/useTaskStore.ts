import { create } from 'zustand';
import type { Task } from '../types';

interface TaskStore {
  tasks: Task[];
  addTask: (
    title: string,
    tags: string[],
    description?: string,
    priority?: string,
    dueDate?: Date
  ) => void;
  toggleTask: (
    id: string
  ) => void;
  removeTask: (
    id: string
  ) => void;
}

export const useTaskStore = create<TaskStore>((set) => ({
  tasks: [],
  addTask: (
    title,
    tags,
    description = '',
    priority,
    dueDate,
  ): void => set(state => ({
    tasks: [
      ...state.tasks,
      {
        id: crypto.randomUUID(), 
        title,
        tags,
        isCompleted: false,
        description,
        priority,
        dueDate
      }
    ]
  })),
  toggleTask: (id): void => set(state => ({
    tasks: state.tasks.map(task => 
      task.id === id
        ? { ...task, isCompleted: !task.isCompleted }
        : task
    )
  })),
  removeTask: (id): void => set(state => ({
    tasks: state.tasks.filter(task => task.id !== id)
  }))
}))