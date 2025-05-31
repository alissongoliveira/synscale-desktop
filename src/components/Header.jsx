import { Menu } from "lucide-react";
import Avatar from "./Avatar";

export default function Header({ onMenuClick }) {
  return (
    <header className="flex items-center gap-4 p-4 bg-white shadow relative z-50">
      <button onClick={onMenuClick}>
        <Menu size={28} className="text-slate-800 cursor-pointer" />
      </button>
      <Avatar letra="A" />
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo SynScale" className="h-12" />
      </div>
    </header>
  );
}
