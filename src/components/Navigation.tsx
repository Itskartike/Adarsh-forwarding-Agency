import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../data/logo.png";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentPage,
  onPageChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["home", "services", "about", "contact"];

  const handleNavClick = (page: string) => {
    onPageChange(page);
    setIsOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16 md:h-18 lg:h-20">
          <div
            className="flex items-center gap-1.5 sm:gap-2 md:gap-3 cursor-pointer group"
            onClick={() => handleNavClick("home")}
          >
            <img
              src={logo}
              alt="Adarsh Forwarding Agency Pvt Ltd. Logo"
              className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span
                className="text-xs sm:text-sm md:text-base lg:text-xl font-bold text-primary tracking-wide leading-tight"
                style={{
                  fontSize: "clamp(0.75rem, 0.65rem + 1vw, 1.25rem)",
                  whiteSpace: "nowrap",
                }}
              >
                ADARSH FORWARDING
              </span>
              <span
                className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base font-semibold text-gray-600 tracking-wider leading-tight"
                style={{
                  fontSize: "clamp(0.625rem, 0.55rem + 0.8vw, 1rem)",
                }}
              >
                AGENCY PVT LTD.
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`relative px-4 py-2 capitalize font-semibold text-base transition-all duration-300 ${
                  currentPage === item
                    ? "text-accent"
                    : "text-gray-700 hover:text-primary"
                }`}
              >
                {item}
                {currentPage === item && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-accent to-pink-600 animate-slide-in-left"></span>
                )}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-primary hover:text-accent transition-colors p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 animate-fade-in border-t border-gray-100">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left px-6 py-3 capitalize font-semibold transition-all duration-200 ${
                  currentPage === item
                    ? "text-accent bg-gradient-to-r from-pink-50 to-transparent border-l-4 border-accent"
                    : "text-gray-700 hover:bg-gray-50 hover:text-primary hover:pl-8"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};
