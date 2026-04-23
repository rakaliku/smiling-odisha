import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Career Counseling", path: "/career" },
  { name: "Social Work", path: "/social-work" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <nav className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-background shadow-warm ring-2 ring-primary/15">
            <img
              src="/smiling-odisha-logo.jpeg"
              alt="Smiling Odisha logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg font-bold text-foreground">Smiling Odisha</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Guidance · Service</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium rounded-full transition-colors",
                  active ? "text-primary" : "text-foreground/70 hover:text-foreground"
                )}
              >
                {item.name}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-gradient-hero" />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden md:block">
          <Button asChild variant="default" className="rounded-full bg-gradient-hero hover:opacity-90 shadow-warm">
            <Link to="/career">Get Started</Link>
          </Button>
        </div>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border/60 bg-background">
          <div className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setOpen(false)}
                className={cn(
                  "px-4 py-3 rounded-lg text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-muted text-primary"
                    : "text-foreground/80 hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <Button asChild className="rounded-full bg-gradient-hero mt-2">
              <Link to="/career" onClick={() => setOpen(false)}>Get Started</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
