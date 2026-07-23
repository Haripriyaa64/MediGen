import Logo from "@/components/ui/Logo";
import {
  FileHeart,
  FileText,
  History,
  LayoutGrid,
  MessageSquareText,
  Settings,
  Stethoscope,
  Pill,
} from "lucide-react";
import { NavLink } from "react-router-dom";

const navigation = [
  {
    title: "Dashboard",
    icon: LayoutGrid,
    path: "/",
  },
  {
    title: "Medical Chat",
    icon: MessageSquareText,
    path: "/chat",
  },
  {
    title: "Symptoms",
    icon: Stethoscope,
    path: "/symptoms",
  },
  {
    title: "Prescription",
    icon: FileText,
    path: "/prescription",
  },
  {
    title: "Medicine Scanner",
    icon: Pill,
    path: "/medicine",
},
  {
    title: "Reports",
    icon: FileHeart,
    path: "/reports",
  },
  {
    title: "History",
    icon: History,
    path: "/history",
  },
  {
    title: "Settings",
    icon: Settings,
    path: "/settings",
  },
];

export default function Sidebar() {
  return (
    <aside className="flex h-full w-[285px] flex-col rounded-[32px] border border-[#ECE9E3] bg-white p-6 shadow-[0_12px_40px_rgba(15,23,42,.05)]">

      <Logo />

      <div className="mt-12 flex-1 space-y-2">
        {navigation.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `group flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-[#F4F4F5] text-zinc-900"
                    : "text-zinc-500 hover:bg-[#F8F8F8] hover:text-zinc-900"
                }`
              }
            >
              <Icon size={20} />

              <span className="font-medium">
                {item.title}
              </span>
            </NavLink>
          );
        })}
      </div>

      <div className="rounded-3xl border border-[#ECE9E3] bg-[#FAFAF9] p-4">

        <div className="flex items-center gap-3">

          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 text-white font-semibold">
            G
          </div>

          <div>

            <p className="font-medium text-zinc-900">
              Guest User
            </p>

            <p className="text-sm text-zinc-500">
              Free Plan
            </p>

          </div>

        </div>

      </div>

    </aside>
  );
}