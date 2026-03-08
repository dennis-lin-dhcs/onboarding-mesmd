import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import IntegratedPlansLocalNeedsAssessmentPage from "../pages/IntegratedPlansLocalNeedsAssessmentPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ip-lna" element={<IntegratedPlansLocalNeedsAssessmentPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
