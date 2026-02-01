import { Routes, Route, Navigate } from "react-router-dom";

/* Recruiter system */
import RecruiterLogin from "./pages/RecruiterLogin";
import Dashboard from "./pages/Dashboard";
import InterviewHub from "./pages/InterviewHub";
import UploadInterview from "./pages/UploadInterview";
import Analytics from "./pages/Analytics";
import Settings from "./pages/Settings";
import Reports from "./pages/Reports";
import SampleReport from "./pages/SampleReport";
import InterviewDetails from "./pages/InterviewDetails";

/* Applicant system */
import Applicant_SignUp from "./Applicant_SignUp";
import Login_Applicant from "./Login_Applicant";
import Reset_Password from "./Reset_Password";
import Confirm_Reset from "./Confirm_Reset";
import Set_New_Password from "./Set_New_Password";
import My_Applications from "./My_Applications";
import My_Profile from "./My_Profile";

/* Admin + public */
import Adminlog from "./Adminlog";
import Admindash from "./Admindash";
import Homepage from "./Homepage";
import Jobs from "./Jobs";
import Jobdetails1 from "./Jobdetails1";
import Jobdetails2 from "./Jobdetails2";
import Jobdetails3 from "./Jobdetails3";
import Jobdetails4 from "./Jobdetails4";
import Jobdetails5 from "./Jobdetails5";
import Jobdetails6 from "./Jobdetails6";

export default function App() {
  return (
    <Routes>

      {/* Default */}
      <Route path="/" element={<Navigate to="/home" replace />} />

      {/* Public */}
      <Route path="/home" element={<Homepage />} />
      <Route path="/jobs" element={<Jobs />} />
      <Route path="/jobdetails1" element={<Jobdetails1 />} />
      <Route path="/jobdetails2" element={<Jobdetails2 />} />
      <Route path="/jobdetails3" element={<Jobdetails3 />} />
      <Route path="/jobdetails4" element={<Jobdetails4 />} />
      <Route path="/jobdetails5" element={<Jobdetails5 />} />
      <Route path="/jobdetails6" element={<Jobdetails6 />} />

      {/* Applicant */}
      <Route path="/signup" element={<Applicant_SignUp />} />
      <Route path="/login-applicant" element={<Login_Applicant />} />
      <Route path="/reset_password" element={<Reset_Password />} />
      <Route path="/confirm-reset" element={<Confirm_Reset />} />
      <Route path="/set-new-password" element={<Set_New_Password />} />
      <Route path="/my_applications" element={<My_Applications />} />
      <Route path="/my_profile" element={<My_Profile />} />

      {/* Admin */}
      <Route path="/admin-login" element={<Adminlog />} />
      <Route path="/admin/dashboard" element={<Admindash />} />

      {/* Recruiter */}
      <Route path="/recruiter/login" element={<RecruiterLogin />} />
      <Route path="/recruiter/dashboard" element={<Dashboard />} />
      <Route path="/recruiter/interviewer-hub" element={<InterviewHub />} />
      <Route path="/recruiter/upload-interview" element={<UploadInterview />} />
      <Route path="/recruiter/analytics" element={<Analytics />} />
      <Route path="/recruiter/settings" element={<Settings />} />
      <Route path="/recruiter/reports" element={<Reports />} />
      <Route path="/recruiter/reports/:reportId" element={<SampleReport />} />
      <Route path="/recruiter/interview-details" element={<InterviewDetails />} />

    </Routes>
  );
}
