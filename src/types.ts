import type { ComponentType, SVGProps } from 'react';

export type SvgIcon = ComponentType<SVGProps<SVGSVGElement>>;

export type Color = '#161A1DFF' | '#3B82F6FF' | '#A855F7FF' | '#F43F5EFF' | '#F59E0BFF' | '#6366F1FF' | '#F97316FF' | '#06B6D4FF';

export type Theme = 'light' | 'dark';

// ColorProfile {
//   teal: '#161A1DFF';
//   blue: '#3B82F6FF';
//   purple: '#A855F7FF';
//   salmon: '#F43F5EFF';
//   yellow: '#F59E0BFF';
//   indigo: '#6366F1FF';
//   orange: '#F97316FF';
//   cyan: '#06B6D4FF'
// }

export interface Task {
  id: string;
  title: string;
  tags: string[];
  isCompleted?: boolean; 
  description?: string;
  priority?: string;
  dueDate?: Date;
}

export interface Habit {
  id: string;
  title: string;
  frequency: string;
  icon: SvgIcon;
  color: Color;
  isCompleted: boolean,
  streak?: number;
  description?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  theme: Theme;
  isLoggedIn: boolean;
}