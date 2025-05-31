import { User, Monitor, FileText, Database, Scale, LogOut } from "lucide-react";
import SubMenu from "./SubMenu";
import SubMenuRelatorios from "./SubMenuRelatorios";
import SubMenuBases from "./SubMenuBases";
import { useEffect, useRef, useState } from "react";

const items = [
  { icon: <User size={18} />, label: "Cadastros", hasSubMenu: "cadastros" },
  { icon: <Monitor size={18} />, label: "Monitoramento das Balanças" },
  {
    icon: <FileText size={18} />,
    label: "Relatórios",
    hasSubMenu: "relatorios",
  },
  { icon: <Database size={18} />, label: "Bases", hasSubMenu: "bases" },
  { icon: <Scale size={18} />, label: "Emissão de Pesagens" },
  { icon: <LogOut size={18} />, label: "Sair" },
];

export default function Sidebar({ isOpen, onClose }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);
  const ref = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setActiveSubMenu(null);
        setIsCollapsed(false);
        onClose();
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  const handleItemClick = (label, hasSubMenu) => {
    if (hasSubMenu) {
      setIsCollapsed(true);
      setActiveSubMenu(hasSubMenu); // "cadastros", "relatorios", "bases"
    } else {
      setIsCollapsed(false);
      setActiveSubMenu(null);
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

      {activeSubMenu === "cadastros" && (
        <SubMenu visible={true} onClose={() => setActiveSubMenu(null)} />
      )}

      {activeSubMenu === "relatorios" && (
        <SubMenuRelatorios
          visible={true}
          onClose={() => setActiveSubMenu(null)}
        />
      )}

      {activeSubMenu === "bases" && (
        <SubMenuBases visible={true} onClose={() => setActiveSubMenu(null)} />
      )}
    </>
  );
}
