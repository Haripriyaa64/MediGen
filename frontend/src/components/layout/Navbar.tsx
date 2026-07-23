import {
  Bell,
  Moon,
  Search,
} from "lucide-react";

export default function Navbar() {
  return (
    <header className="flex h-24 items-center justify-between px-10">

      <div>

        <p className="text-sm text-zinc-500">
          Good afternoon 👋
        </p>

        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-zinc-900">
          How can I help you today?
        </h2>

      </div>

      <div className="flex items-center gap-3">

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECE9E3] bg-white transition hover:bg-[#F8F8F8]">

          <Search size={19} />

        </button>

        <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECE9E3] bg-white transition hover:bg-[#F8F8F8]">

          <Moon size={19} />

        </button>

        <button className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[#ECE9E3] bg-white transition hover:bg-[#F8F8F8]">

          <Bell size={19} />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500"></span>

        </button>

      </div>

    </header>
  );
}