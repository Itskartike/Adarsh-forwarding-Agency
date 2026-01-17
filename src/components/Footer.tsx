import { Mail, Phone, MapPin } from "lucide-react";

interface FooterProps {
  onPageChange: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onPageChange }) => {
  return (
    <footer className="bg-primary text-white mt-12 md:mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-6 md:mb-8">
          <div>
            <h3 className="text-xl md:text-2xl font-extrabold mb-3 md:mb-4 text-white tracking-tight">
              ADARSH FORWARDING AGENCY PVT LTD.
            </h3>
            <p className="text-gray-300 text-sm md:text-base">
              Your trusted partner in global logistics and international trade
              solutions.
            </p>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => onPageChange("home")}
                  className="hover:text-accent transition-colors text-left text-sm md:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange("services")}
                  className="hover:text-accent transition-colors text-left text-sm md:text-base"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange("about")}
                  className="hover:text-accent transition-colors text-left text-sm md:text-base"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onPageChange("contact")}
                  className="hover:text-accent transition-colors text-left text-sm md:text-base"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Services
            </h4>
            <ul className="space-y-1.5 md:space-y-2 text-gray-300">
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors text-sm md:text-base"
                >
                  Customs Clearance
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors text-sm md:text-base"
                >
                  Customs Consultancy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors text-sm md:text-base"
                >
                  Freight Forwarding
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors text-sm md:text-base"
                >
                  Surface Transportation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-base md:text-lg font-semibold mb-3 md:mb-4">
              Contact
            </h4>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-center gap-2">
                <Phone size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="text-xs md:text-sm">
                  (022)-4969 2907 / (022)-4006 8855
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="md:w-[18px] md:h-[18px]" />
                <span className="text-xs md:text-sm break-all">
                  mumbai@adarshforwarding.com
                </span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 md:w-[18px] md:h-[18px]" />
                <span className="text-xs md:text-sm">
                  Office No 617, 6th Floor A Wing, BALAJI BHAWAN, Sector 11 CBD,
                  Belapur, Navi Mumbai, Maharashtra 400614
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-6 md:pt-8">
          <div className="flex justify-center items-center">
            <p className="text-gray-400 text-xs md:text-sm text-center">
              &copy; 2024 Adarsh Forwarding Agency Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
