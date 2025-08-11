import Logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start space-y-4">
            <img src={Logo} alt="Gardenia Landscape Logo" className="h-12 w-auto" />
            <h1 className="text-2xl font-bold text-emerald-400 font-poppins">
              Gardenia Landscape
            </h1>
            <p className="text-slate-300 text-center md:text-left max-w-xs">
              Le meilleur service d'aménagement paysager au centre d'Alger
            </p>
          </div>

          {/* Services Section */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-emerald-400 font-poppins">
              Nos Services
            </h2>
            <ul className="space-y-2 text-slate-300">
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Tonte de gazon
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Nettoyage piscine
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Plantation d'arbres
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Pose de gazon
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Entretien de jardin
              </li>
              <li className="hover:text-emerald-400 transition-colors cursor-pointer">
                Système d'irrigation
              </li>
            </ul>
          </div>

          {/* Contact & Social Section */}
          <div className="space-y-4 flex flex-col items-center md:items-start">
            <h2 className="text-xl font-semibold text-emerald-400 font-poppins">
              Suivez-nous
            </h2>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-emerald-500 transition-colors duration-300"
              >
                <img src={facebook} alt="Facebook" className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="bg-slate-800 p-3 rounded-full hover:bg-emerald-500 transition-colors duration-300"
              >
                <img src={instagram} alt="Instagram" className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-slate-700 mt-8 pt-6 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Gardenia Landscape. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
