import { NavLink } from "react-router-dom";
import { LayoutDashboard, CheckSquare, ListTodo, Settings } from 'lucide-react';

const links = [
  {to: '/', icon: LayoutDashboard, label: 'Dashboard'},
  {to: '/habits', icon: CheckSquare, label: 'Habits'},
  {to: '/tasks', icon: ListTodo, label: 'Tasks'},
  {to: '/settings', icon: Settings, label: 'Settings'}
];

export default function BottomNav() {
  return (
    <nav className="flex justify-around p-2 border-t bg-white dark:bg-gray-800">
      {
        links.map(({to, icon: Icon, label}) => (
          <NavLink 
            key={to}
            to={to}
            className={(isActive) => {
              `flex flex-col items-center text-xs ${isActive ? 'text-green-500' : 'text-gray-400'}`
            }}
          >
            <Icon size={20} />
            <span>{label}</span>
          </NavLink>
        ))
      }
    </nav>
  )
}