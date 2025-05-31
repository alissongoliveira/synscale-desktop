import { User, Monitor, FileText, Database, Scale, LogOut } from "lucide-react";

const items = [
  { icon: <User size={18} />, label: "Cadastros" },
  { icon: <Monitor size={18} />, label: "Monitoramento das Balanças" },
  { icon: <FileText size={18} />, label: "Relatórios" },
  { icon: <Database size={18} />, label: "Bases" },
  { icon: <Scale size={18} />, label: "Emissão de Pesagens" },
  { icon: <LogOut size={18} />, label: "Sair" },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Overlay para clique fora */}
      {isOpen && <div className="fixed inset-0 z-30" onClick={onClose}></div>}

      <div
        className={`fixed top-[90px] left-0 z-40 w-64 bg-white shadow transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="divide-y divide-slate-200">
          {items.map(({ icon, label }) => (
            <li
              key={label}
              className="flex items-center gap-2 p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer"
            >
              {icon}
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
