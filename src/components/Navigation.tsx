import Logo from "../assets/logo.svg";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Accueil", href: "#" },
  { name: "Services", href: "#" },
  
  { name: "Contact", href: "#" },
  { name: "Gallery", href: "#" },
];
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="container mx-auto flex items-center justify-between p-6 shadow-md z-10 sticky top-0">
      <div className="flex items-center gap-2">
        <img src={Logo} alt="" />
        <h1 className="text-3xl text-white font-bold font-poppins capitalize hidden lg:block">Gardenia landscape</h1>
      </div>
      <div className="hidden md:block">
        <ul>
          {navItems.map((item) => (
            <li key={item.name} className="inline-block mx-4">
              <a href={item.href} className="text-white font-poppins hover:text-gray-900">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-accent hover:text-accent/80"
          aria-label="Open navigation menu"
          title="Open navigation menu"
        >
          {isOpen ? <X className="h-6 w-6 motion-scale-in-0" /> : <Menu className="h-6 w-6 motion-scale-in-0" />}
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 h-screen w-[50%] bg-white shadow-lg z-50 transition-all duration-300 md:hidden">
            <ul className="flex flex-col p-6">
              {navItems.map((item) => (
                <li key={item.name} className="mb-4">
                  <a
                    href={item.href}
                    className="text-gray-700 hover:text-gray-900 text-lg"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
