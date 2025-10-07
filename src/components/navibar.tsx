import { Menu, Moon, Sun } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "@/lib/useTheme";
import { Analytics } from "@vercel/analytics/next";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/resume", label: "Currículo" },
  { to: "/projects", label: "Projetos" },
  // { to: "/contact", label: "Contato" },
];

export function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  return (
    <>
      <Analytics />;
      <nav className="w-full border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm print:hidden">
        <div className="max-w-6xl w-full mx-auto flex items-center justify-between px-2 sm:px-4 py-2">
          <span className="font-bold text-lg text-primary">Gabriel Coelho</span>
          <button
            className="sm:hidden p-2"
            onClick={() => setOpen((v) => !v)}
            aria-label="Abrir menu"
          >
            <Menu className="w-7 h-7 text-primary" />
          </button>
          <div className="hidden sm:flex flex-row gap-1 md:gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-3 md:px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm md:text-base hover:bg-accent hover:text-accent-foreground ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Botão de alternância de tema */}
            <button
              className="ml-2 px-2 py-2 rounded-md hover:bg-accent transition-colors focus:outline-none focus:ring"
              aria-label="Alternar tema"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              tabIndex={0}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-700" />
              )}
            </button>
          </div>
        </div>
        {/* Mobile menu */}
        {open && (
          <div className="flex flex-col sm:hidden bg-card border-t border-border px-4 py-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`mb-2 px-3 py-2 rounded-md transition-all duration-200 font-medium text-base hover:bg-accent hover:text-accent-foreground ${
                  location.pathname === link.to
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            {/* Botão de alternância de tema no menu mobile */}
            <button
              className="mt-2 px-2 py-2 rounded-md hover:bg-accent transition-colors w-fit"
              aria-label="Alternar tema"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-700" />
              )}
            </button>
          </div>
        )}
      </nav>
    </>
  );
}
