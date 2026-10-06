import { useState } from "react";
import {  NavLink } from "react-router";
import "./Navbar.css";

const links = [
  { to: "/", label: "Products" },
  { to: "/counter", label: "Counter" },
  { to: "/todo", label: "Todo" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <NavLink to="/" className="navbar-brand" onClick={() => setOpen(false)}>
        My App
      </NavLink>
      <button
        className="navbar-toggle"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav className={`navbar-links ${open ? "open" : ""}`}>
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === "/"}
            className={({ isActive }) =>
              `navbar-link ${isActive ? "active" : ""}`
            }
            onClick={() => setOpen(false)}
          >
            {label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
