import { Routes, Route } from "react-router-dom";
import Applicant_SignUp from "./Applicant_SignUp";
import Login_Applicant from "./Login_Applicant";
import Reset_Password from "./Reset_Password";
import Confirm_Reset from "./Confirm_Reset";
import Set_New_Password from "./Set_New_Password";
import Submit_Application from "./Submit_Application";
import My_Applications from "./My_Applications";
import Old_Applicant from "./old_applicant";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Applicant_SignUp />} />
      <Route path="/login-applicant" element={<Login_Applicant />} />
      <Route path="/reset_password" element={<Reset_Password />} />
      <Route path="/confirm-reset" element={<Confirm_Reset />} />
      <Route path="/set-new-password" element={<Set_New_Password />} />
      <Route path="/submit-application" element={<Submit_Application />} />
      <Route path="/my_applications" element={<My_Applications />} />
      <Route path="/old_applicant" element={<Old_Applicant />} />
    </Routes>
  );
}
