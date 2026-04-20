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
import BmadArchitectureDesignPage from '../pages/bmad/BmadArchitectureDesignPage'
import BmadGovernanceModelPage from '../pages/bmad/BmadGovernanceModelPage'
import BmadChangeControlPage from '../pages/bmad/BmadChangeControlPage'
import BmadPersonaAndAgentGovernancePage from '../pages/bmad/BmadPersonaAndAgentGovernancePage'
import BmadTraceabilityAndAuditPage from '../pages/bmad/BmadTraceabilityAndAuditPage'

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
        <Route path="/bmad/demo/architecture-design" element={<BmadArchitectureDesignPage />} />
        <Route path="/bmad/compliance/governance-model" element={<BmadGovernanceModelPage />} />
        <Route path="/bmad/compliance/change-control" element={<BmadChangeControlPage />} />
        <Route path="/bmad/compliance/persona-and-agent-governance" element={<BmadPersonaAndAgentGovernancePage />} />
        <Route path="/bmad/compliance/traceability-and-audit" element={<BmadTraceabilityAndAuditPage />} />
        <Route path="/bmad/demo" element={<BmadDemoPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
