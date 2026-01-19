import Menubar from "./Menubar";

export default function AppShell({ children }) {
  return (
    <div className="min-h-screen w-screen overflow-x-hidden">
      {/* New pastel gradient background */}
      <div className="min-h-screen w-full bg-gradient-to-b from-[#F4F2E9] to-[#AFDDCC]">
        <Menubar />

        {/* Main content */}
        <main className="ml-[88px] min-h-screen w-[calc(100%-88px)]">
          <div className="min-h-screen w-full p-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
