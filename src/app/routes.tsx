import { Navigate, Route, Routes } from 'react-router-dom'
import AppLayout from '../layout/AppLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import LocalEnvironmentSetupPage from "../pages/integrated_plans/LocalEnvironmentSetupPage";
import LocalNeedsAssessmentPage from "../pages/integrated_plans/LocalNeedsAssessmentPage";
import BmadAboutPage from '../pages/bmad/BmadAboutPage'
import BmadSetupPage from '../pages/bmad/BmadSetupPage'
import BmadDemoPage from '../pages/bmad/BmadDemoPage'
import BmadInstallationPage from '../pages/bmad/BmadInstallationPage'
import BmadCreatingPrdPage from '../pages/bmad/BmadCreatingPrdPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/ip/setup" element={<LocalEnvironmentSetupPage/>} />
        <Route path="/ip/lna" element={<LocalNeedsAssessmentPage />} />
        <Route path="/bmad/about" element={<BmadAboutPage />} />
        <Route path="/bmad/setup" element={<BmadSetupPage />} />
        <Route path="/bmad/setup/installation" element={<BmadInstallationPage />} />
        <Route path="/bmad/setup/creating-a-prd" element={<BmadCreatingPrdPage />} />
        <Route path="/bmad/demo" element={<BmadDemoPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
