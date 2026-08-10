import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Experiment from './pages/Experiment'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { Home } from './pages/Home'
import { Dashboard } from './pages/Dashboard'
import { AboutUs } from './pages/AboutUs'
import { PrivateRoute } from '../src/components/privateRoute/PrivateRoute'
import { Publications } from './pages/Publications'
import { Courses } from './pages/Courses'
import { Laboratory } from './pages/Laboratory'
import { Training } from './pages/Training'
import { ProfileEdit } from './pages/ProfileEdit'
import { NotFound } from "./pages/NottFound";
import { Contact } from './pages/Contact'
import { ForgotPassword } from './pages/ForgotPassword'
import { AdminDashboard } from './pages/AdminDashboard'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/laboratory' element={<Laboratory />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
        <Route path="forgot-password" element={<ForgotPassword />} />

        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/experiment" element={<Experiment />} />
          <Route path="/training" element={<Training />} />
          <Route path="/profile-edit" element={<ProfileEdit />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}