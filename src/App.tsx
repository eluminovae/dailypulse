import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import DashboardPage from './features/dashboard/DashboardPage';
import HabitsListPage from './features/habits/HabitsListPage';
import TasksBoardPage from './features/tasks/TasksBoardPage';
import SettingsPage from './features/settings/SettingsPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />} >
          <Route path='/' element={<DashboardPage />} />
          <Route path='/habits' element={<HabitsListPage />} />
          <Route path='/tasks' element={<TasksBoardPage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App