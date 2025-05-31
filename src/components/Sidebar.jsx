import { User, Monitor, FileText, Database, Scale, LogOut } from "lucide-react";
import SubMenu from "./SubMenu";
import { useEffect, useRef, useState } from "react";

const items = [
  { icon: <User size={18} />, label: "Cadastros", hasSubMenu: true },
  { icon: <Monitor size={18} />, label: "Monitoramento das Balanças" },
  { icon: <FileText size={18} />, label: "Relatórios" },
  { icon: <Database size={18} />, label: "Bases" },
  { icon: <Scale size={18} />, label: "Emissão de Pesagens" },
  { icon: <LogOut size={18} />, label: "Sair" },
];

export default function Sidebar({ isOpen, onClose }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [submenuVisible, setSubmenuVisible] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setSubmenuVisible(false);
        setIsCollapsed(false);
        onClose(); // fecha a sidebar principal
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleItemClick = (label, hasSubMenu) => {
    if (label === "Cadastros" && hasSubMenu) {
      setIsCollapsed(true);
      setSubmenuVisible(true);
    } else {
      setSubmenuVisible(false);
      setIsCollapsed(false);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div
        ref={ref}
        className={`fixed top-[90px] left-0 z-40 ${
          isCollapsed ? "w-16" : "w-64"
        } bg-white shadow transition-all duration-200`}
      >
        <ul className="divide-y divide-slate-200">
          {items.map(({ icon, label, hasSubMenu }) => (
            <li
              key={label}
              onClick={() => handleItemClick(label, hasSubMenu)}
              className={`flex items-center ${
                isCollapsed ? "justify-center" : "gap-2"
              } h-12 p-3 text-sm font-mono hover:bg-slate-100 cursor-pointer`}
            >
              {icon}
              {!isCollapsed && label}
            </li>
          ))}
        </ul>
      </div>

      <SubMenu
        visible={submenuVisible}
        onClose={() => setSubmenuVisible(false)}
      />
    </>
  );
}
