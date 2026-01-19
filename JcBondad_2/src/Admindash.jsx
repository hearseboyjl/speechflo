import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminDashboard() {
  const navigate = useNavigate();

  const [applicantQuery, setApplicantQuery] = useState("");
  const [recruiterQuery, setRecruiterQuery] = useState("");

  const applicants = useMemo(
    () => [
      {
        id: 1,
        name: "Fiona Malota",
        email: "fionalouella@gmail.com",
        position: "Area Sales Supervisor",
        registered: "2025-09-30",
      },
      {
        id: 2,
        name: "Alessandra Hajjah",
        email: "hajjahs@gmail.com",
        position: "Accounting Lead",
        registered: "2025-10-05",
      },
    ],
    []
  );

  const recruiters = useMemo(
    () => [
      {
        id: 1,
        name: "Kimmerly Zamora",
        email: "kimzamora@avanteph.com",
        department: "HR",
        added: "2021-05-01",
      },
      {
        id: 2,
        name: "JL Lopez",
        email: "jl.lopez@avanteph.com",
        department: "Technical Hiring",
        added: "2025-10-05",
      },
    ],
    []
  );

  const filteredApplicants = useMemo(() => {
    const q = applicantQuery.trim().toLowerCase();
    if (!q) return applicants;
    return applicants.filter(
      (a) =>
        String(a.id).includes(q) ||
        a.name.toLowerCase().includes(q) ||
        a.email.toLowerCase().includes(q) ||
        a.position.toLowerCase().includes(q) ||
        a.registered.toLowerCase().includes(q)
    );
  }, [applicantQuery, applicants]);

  const filteredRecruiters = useMemo(() => {
    const q = recruiterQuery.trim().toLowerCase();
    if (!q) return recruiters;
    return recruiters.filter(
      (r) =>
        String(r.id).includes(q) ||
        r.name.toLowerCase().includes(q) ||
        r.email.toLowerCase().includes(q) ||
        r.department.toLowerCase().includes(q) ||
        r.added.toLowerCase().includes(q)
    );
  }, [recruiterQuery, recruiters]);
 
  const handleLogout = () => {
  
    navigate("/");      
  };

  return (
    <div className="min-h-screen w-screen bg-white relative">
      <button
        onClick={handleLogout}
        title="Back to Login"
        aria-label="Back to Login"
        className="fixed bottom-6 left-6 p-2 rounded hover:bg-slate-100 active:scale-95 transition"
      >
        <LogoutArrowIcon className="h-6 w-6 text-slate-800" />
      </button>

      <div className="mx-auto max-w-6xl px-8 py-8">
        <h1 className="text-2xl font-bold text-slate-900 mb-6">
          Admin Dashboard
        </h1>

        {/* Applicant Management */}
        <Section
          title="Applicant Management"
          actionLabel="+ Add Applicant"
          onAction={() => alert("Add Applicant")}
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <input
              value={applicantQuery}
              onChange={(e) => setApplicantQuery(e.target.value)}
              placeholder="Search applicants..."
              className="h-7 w-40 rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-700 outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <TableFrame>
            <thead>
              <tr>
                <Th>Applicant ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Applied Position</Th>
                <Th>Date Registered</Th>
                <Th className="text-center">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filteredApplicants.map((a) => (
                <tr key={a.id} className="border-t border-slate-800/70">
                  <Td className="text-center">{a.id}</Td>
                  <Td>{a.name}</Td>
                  <Td>{a.email}</Td>
                  <Td>{a.position}</Td>
                  <Td className="text-center">{a.registered}</Td>
                  <Td>
                    <div className="flex items-center justify-center gap-3">
                      <button className="h-7 w-16 rounded bg-[#0B1456] text-white text-xs shadow-sm hover:opacity-90">
                        Edit
                      </button>
                      <button className="h-7 w-16 rounded bg-[#E2B007] text-slate-900 text-xs shadow-sm hover:opacity-90">
                        Delete
                      </button>
                    </div>
                  </Td>
                </tr>
              ))}
              {filteredApplicants.length === 0 && (
                <tr className="border-t border-slate-800/70">
                  <Td colSpan={6} className="text-center text-slate-600">
                    No applicants found.
                  </Td>
                </tr>
              )}
            </tbody>
          </TableFrame>
        </Section>

        {/* Recruiter Management */}
        <Section
          title="Recruiter Management"
          actionLabel="+ Add Recruiter"
          onAction={() => alert("Add Recruiter")}
        >
          <div className="mb-2 flex items-center justify-between gap-3">
            <input
              value={recruiterQuery}
              onChange={(e) => setRecruiterQuery(e.target.value)}
              placeholder="Search recruiters..."
              className="h-7 w-40 rounded-sm border border-slate-300 bg-white px-2 text-[11px] text-slate-700 outline-none focus:ring-2 focus:ring-slate-200"
            />
          </div>

          <TableFrame>
            <thead>
              <tr>
                <Th>Employment ID</Th>
                <Th>Name</Th>
                <Th>Email</Th>
                <Th>Department</Th>
                <Th>Date Added</Th>
                <Th className="text-center">Actions</Th>
              </tr>
            </thead>
            <tbody>
              {filteredRecruiters.map((r) => (
                <tr key={r.id} className="border-t border-slate-800/70">
                  <Td className="text-center">{r.id}</Td>
                  <Td>{r.name}</Td>
                  <Td>{r.email}</Td>
                  <Td>{r.department}</Td>
                  <Td className="text-center">{r.added}</Td>
                  <Td>
                    <div className="flex items-center justify-center gap-3">
                      <button className="h-7 w-16 rounded bg-[#0B1456] text-white text-xs shadow-sm hover:opacity-90">
                        Edit
                      </button>
                      <button className="h-7 w-16 rounded bg-[#E2B007] text-slate-900 text-xs shadow-sm hover:opacity-90">
                        Delete
                      </button>
                    </div>
                  </Td>
                </tr>
              ))}
              {filteredRecruiters.length === 0 && (
                <tr className="border-t border-slate-800/70">
                  <Td colSpan={6} className="text-center text-slate-600">
                    No recruiters found.
                  </Td>
                </tr>
              )}
            </tbody>
          </TableFrame>
        </Section>
      </div>
    </div>
  );
}

/* --------- helpers --------- */

function Section({ title, actionLabel, onAction, children }) {
  return (
    <div className="mb-8 rounded-md bg-slate-100 p-5 shadow-sm border border-slate-200">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-bold text-slate-900">{title}</h2>
        <button
          onClick={onAction}
          className="h-6 rounded bg-[#0B1456] px-3 text-[10px] text-white shadow-sm hover:opacity-90"
        >
          {actionLabel}
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
}

function TableFrame({ children }) {
  return (
    <div className="overflow-hidden rounded-sm border border-slate-800/70 bg-white">
      <table className="w-full border-collapse text-[11px] text-slate-900">
        {children}
      </table>
    </div>
  );
}

function Th({ className = "", children }) {
  return (
    <th
      className={[
        "bg-slate-100 border-r border-slate-800/70 px-3 py-2 text-[11px] font-semibold",
        className,
      ].join(" ")}
    >
      {children}
    </th>
  );
}

function Td({ className = "", children, colSpan }) {
  return (
    <td
      colSpan={colSpan}
      className={[
        "border-r border-slate-800/70 px-3 py-3 align-middle",
        className,
      ].join(" ")}
    >
      {children}
    </td>
  );
}

function LogoutArrowIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M10 7v10" />
      <path d="M10 7h6a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-6" />
      <path d="M4 12h9" />
      <path d="M7 9l-3 3 3 3" />
    </svg>
  );
}
