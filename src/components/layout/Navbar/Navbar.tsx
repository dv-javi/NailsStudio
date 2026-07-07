import type { Dispatch, SetStateAction } from "react";
import { NavLink } from "react-router-dom";

import "@tabler/icons-webfont/dist/tabler-icons.css";

import ContactModal from "@/components/sections/ContactModal/ContactModal";
import { bookLink } from "@/data/contact";
import { navItems } from "@/data/navigation";
import { useModal } from "@/hooks/useModal";
import { brandImages, resolveGlobAsset } from "@/utils/assets";

import "./navbar.css";

type NavbarProps = {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
};

export default function Navbar({ collapsed, setCollapsed }: NavbarProps) {
  const { isOpen, open, close } = useModal();

  return (
    <>
      <aside className={`sidebar ${collapsed ? "collapsed" : ""}`}>
        <div className="sidebar-header">
          <img
            className={`logo-sidebar ${collapsed ? "collapsed-logo" : ""}`}
            src={resolveGlobAsset(brandImages, "nailstudio-logo.svg")}
            alt="Nailstudio logo"
            onClick={() => collapsed && setCollapsed(false)}
          />

          {!collapsed && (
            <button
              type="button"
              className="collapse-btn"
              onClick={() => setCollapsed(true)}
              aria-label="Contraer sidebar"
            >
              <i className="ti ti-chevron-left" aria-hidden="true" />
            </button>
          )}
        </div>

        <nav className="sidebar-nav">
          {navItems.map(({ path, label, icon }) => (
            <NavLink
              key={path}
              to={path}
              aria-label={label}
              className={({ isActive }) =>
                `nav-item ${isActive ? "active" : ""}`
              }
            >
              <i className={`ti ${icon}`} aria-hidden="true" />
              {!collapsed && <span className="nav-label">{label}</span>}
            </NavLink>
          ))}

          <button
            type="button"
            className="nav-item contact-btn"
            onClick={open}
            aria-label="Abrir formulario de contacto"
          >
            <i className="ti ti-mail" aria-hidden="true" />
            {!collapsed && <span className="nav-label">Contacto</span>}
          </button>
        </nav>

        <div className="sidebar-spacer" />

        <a
          href={bookLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Reservar cita (se abre en una nueva pestaña)"
        >
          <button type="button" className="book-btn" aria-label="Reservar cita">
            <i className="ti ti-calendar-event" aria-hidden="true" />
            {!collapsed && <span>Reservar cita</span>}
          </button>
        </a>
      </aside>

      <nav className="bottom-nav">
        {navItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            aria-label={label}
            className={({ isActive }) =>
              `bottom-nav-item ${isActive ? "active" : ""}`
            }
          >
            <i className={`ti ${icon}`} aria-hidden="true" />
            <span className="bottom-nav-label">{label}</span>
          </NavLink>
        ))}

        <button
          type="button"
          className="bottom-nav-item contact-mobile-btn"
          onClick={open}
          aria-label="Abrir formulario de contacto"
        >
          <i className="ti ti-mail" aria-hidden="true" />
          <span className="bottom-nav-label">Contacto</span>
        </button>
      </nav>

      <ContactModal isOpen={isOpen} onClose={close} />
    </>
  );
}
