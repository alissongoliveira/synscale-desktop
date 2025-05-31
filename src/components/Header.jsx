import { Menu } from "lucide-react";
import Avatar from "./Avatar";

export default function Header() {
  return (
    <header className="flex items-center gap-4 p-4 bg-white shadow">
      <Menu size={28} className="text-slate-800 cursor-pointer" />
      <Avatar letra="A" />
      <div className="flex items-center gap-2">
        <img src="/logo.png" alt="Logo SynScale" className="h-12" />
      </div>
    </header>
  );
}
