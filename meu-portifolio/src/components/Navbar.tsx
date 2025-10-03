
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
    <nav className="w-full flex justify-center border-b border-border bg-background/80 backdrop-blur sticky top-0 z-20">
      <NavigationMenu className="max-w-4xl w-full">
        <NavigationMenuList className="flex flex-row gap-2 md:gap-6 mx-auto py-2">
          {navLinks.map((link) => (
            <NavigationMenuItem key={link.to}>
              <Link
                to={link.to}
                className={`px-3 py-1 rounded-md transition-colors font-medium text-sm md:text-base hover:bg-accent hover:text-accent-foreground ${location.pathname === link.to ? "bg-accent text-accent-foreground" : "text-muted-foreground"}`}
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
