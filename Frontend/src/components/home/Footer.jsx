import { useNavigate } from "react-router-dom";
import { FaWrench, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Brand */}
          <div>
            <button
              onClick={() => navigate("/")}
              className="flex items-center gap-2 mb-4 group"
            >
              <div className="bg-blue-600 p-2 rounded-lg group-hover:bg-blue-700 transition">
                <FaWrench className="text-white text-sm" />
              </div>
              <span className="text-xl font-bold text-white">
                Repair<span className="text-blue-400">ium</span>
              </span>
            </button>

            <p className="text-sm leading-relaxed max-w-xs">
              India's most trusted appliance repair service. 500+ certified
              technicians across 50+ cities.
            </p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4 text-lg">
              <FaFacebook className="cursor-pointer hover:text-white transition" />
              <FaInstagram className="cursor-pointer hover:text-white transition" />
              <FaTwitter className="cursor-pointer hover:text-white transition" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <button
                    onClick={() => navigate(link.path)}
                    className="hover:text-white transition-colors hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MdPhone className="text-blue-400 flex-shrink-0" />
                +91 9876543210
              </li>
              <li className="flex items-center gap-2">
                <MdEmail className="text-blue-400 flex-shrink-0" />
                support@repairium.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm">
          <span>
            &copy; {new Date().getFullYear()} Repairium. All rights reserved.
          </span>
          <span className="text-gray-500">
            Made with ❤️ in India
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;