import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function AppLayout() {
  return (
    <div className="min-h-screen bg-[#F6F5F2] p-5">
      <div className="mx-auto flex h-[calc(100vh-40px)] max-w-[1700px] gap-5">

        {/* Sidebar */}
        <Sidebar />

        {/* Workspace */}
        <main className="flex flex-1 flex-col overflow-hidden rounded-[34px] border border-[#ECE9E3] bg-white shadow-[0_12px_40px_rgba(15,23,42,.05)]">

          <Navbar />

          <section className="flex-1 overflow-y-auto px-10 pb-10">
            <Outlet />
          </section>

        </main>

      </div>
    </div>
  );
}