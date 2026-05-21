import { Outlet } from "react-router-dom";
import BottomNav from './BottomNav'

export default function MainLayout() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="flex-1 p-4">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}