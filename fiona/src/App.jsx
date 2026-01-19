import { Routes, Route, Navigate } from "react-router-dom";
import RecruiterLogin from "./pages/RecruiterLogin";
import Dashboard from "./pages/Dashboard";
import InterviewHub from "./pages/InterviewHub";
import UploadInterview from "./pages/UploadInterview";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import SampleReport from "./pages/SampleReport";
import InterviewDetails from "./pages/InterviewDetails";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/recruiter/login" replace />} />
      <Route path="/recruiter/login" element={<RecruiterLogin />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/interviewer-hub" element={<InterviewHub />} />
      <Route path="/upload-interview" element={<UploadInterview />} />
      <Route path="/analytics" element={<Analytics />} /> 
      <Route path="/settings" element={<Settings />} />
      <Route path="/reports" element={<Reports />} />
      <Route path="/reports/:reportId" element={<SampleReport />} />
      <Route path="/interview-details" element={<InterviewDetails />} />
      <Route path="/profile" element={<div />} />
      <Route path="/logout" element={<div />} />
      <Route path="/dashboard/export" element={<div />} />
      <Route path="/dashboard/new-upload" element={<div />} />
      <Route path="/dashboard/bulk-analysis" element={<div />} />
      <Route path="/dashboard/export-summary" element={<div />} />

    </Routes>
  );
}
