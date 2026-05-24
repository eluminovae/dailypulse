import { create } from 'zustand';
import type { Habit, SvgIcon, Color } from '../types';

interface HabitStore {
  habits: Habit[];
  addHabit: (
    title: string,
    frequency: string,
    icon: SvgIcon,
    color: Color,
    isCompleted: boolean,
    streak?: number,
    description?: string
  ) => void;
  toggleHabit: (
    id: string
  ) => void;
  removeHabit: (
    id: string
  ) => void
}

export const useHabitStore = create<HabitStore>((set) => ({
  habits: [],
  addHabit: (
    title,
    frequency,
    icon, 
    color,
    isCompleted = false,
    streak = 0,
    description = ''
  ) => set(state => ({
    habits: [
      ...state.habits,
      {
        id: crypto.randomUUID(),
        title,
        frequency,
        icon,
        color,
        isCompleted,
        streak,
        description
      }
    ]
  })),
  toggleHabit: (id) => set(state => ({
    habits: state.habits.map(habit => 
      habit.id === id
        ? {...habit, isCompleted: !habit.isCompleted}
        : habit
    )
  })),
  removeHabit: (id) => set(state => ({
    habits: state.habits.filter(habit => habit.id !== id)
  }))
}))