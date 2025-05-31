import { useEffect, useRef, useState } from "react";
import { User, Monitor, FileText, Database, Scale, LogOut } from "lucide-react";

import SubMenu from "./SubMenu";
import SubMenuRelatorios from "./SubMenuRelatorios";
import SubMenuBases from "./SubMenuBases";

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

  const sidebarRef = useRef();
  const submenuRef = useRef();

  const fecharTudo = () => {
    setIsCollapsed(false);
    setActiveSubMenu(null);
    onClose();
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedOutsideSidebar =
        sidebarRef.current && !sidebarRef.current.contains(e.target);

      const clickedOutsideSubmenu =
        !submenuRef.current || !submenuRef.current.contains(e.target);

      if (clickedOutsideSidebar && clickedOutsideSubmenu) {
        fecharTudo();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (label, hasSubMenu) => {
    if (hasSubMenu) {
      setIsCollapsed(true);
      setActiveSubMenu(hasSubMenu);
    } else {
      fecharTudo();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* SIDEBAR PRINCIPAL */}
      <div
        ref={sidebarRef}
        className={`fixed top-[90px] left-0 ${
          isCollapsed ? "w-16 z-10" : "w-64 z-40"
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

      {/* SUBMENUS */}
      {activeSubMenu === "cadastros" && (
        <SubMenu visible={true} onClose={fecharTudo} ref={submenuRef} />
      )}
      {activeSubMenu === "relatorios" && (
        <SubMenuRelatorios
          visible={true}
          onClose={fecharTudo}
          ref={submenuRef}
        />
      )}
      {activeSubMenu === "bases" && (
        <SubMenuBases visible={true} onClose={fecharTudo} ref={submenuRef} />
      )}
    </>
  );
}
