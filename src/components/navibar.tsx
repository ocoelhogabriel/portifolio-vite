import { Link, useLocation } from "react-router-dom";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "./ui/navigation-menu";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "Sobre" },
  { to: "/projects", label: "Projetos" },
  { to: "/resume", label: "Currículo" },
  { to: "/contact", label: "Contato" },
];

export function Navbar() {
  const location = useLocation();
  return (
    <nav className="w-full flex justify-center border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
      <NavigationMenu className="max-w-6xl w-full px-4">
        <NavigationMenuList className="flex flex-row gap-1 md:gap-4 mx-auto py-3">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.to}>
              <Link
                to={link.to}
                className={`px-3 md:px-4 py-2 rounded-md transition-all duration-200 font-medium text-sm md:text-base hover:bg-accent hover:text-accent-foreground ${
                  location.pathname === link.to 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav>
  );
}
