import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import LocalEnvironmentSetupPage from "../pages/integrated_plans/LocalEnvironmentSetupPage";
import LocalNeedsAssessmentPage from "../pages/integrated_plans/LocalNeedsAssessmentPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ip/setup" element={<LocalEnvironmentSetupPage/>} />
        <Route path="/ip/lna" element={<LocalNeedsAssessmentPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
