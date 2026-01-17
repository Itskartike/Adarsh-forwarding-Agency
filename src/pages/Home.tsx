import { ImageCarousel } from "../components/ImageCarousel";
import { services } from "../data/services";
import {
  ArrowRight,
  Building2,
  Cog,
  MapPin,
  Zap,
  Grid3x3,
  Quote,
  Building,
  ShoppingBag,
  Home as HomeIcon,
  Car,
  Factory,
  Bolt,
  Hammer,
  Shirt,
  Globe,
  FlaskConical,
  Construction,
  Flame,
  Moon,
  Sun,
  Leaf,
  Users,
} from "lucide-react";

interface HomeProps {
  onPageChange: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onPageChange }) => {
  const featuredServices = services.slice(0, 6);

  const clients = [
    { name: "ROXX", icon: ShoppingBag },
    { name: "OLIVE", icon: HomeIcon },
    { name: "Wheels", icon: Car },
    { name: "Rico Home Applications", icon: HomeIcon },
    { name: "Automark", icon: Car },
    { name: "Sarvoday Rubber Corporation", icon: Factory },
    { name: "Golden Bullet", icon: Bolt },
    { name: "CG Power Solutions", icon: Zap },
    { name: "Tarini Steel Company Ltd", icon: Hammer },
    { name: "Candor Textiles Pvt Ltd", icon: Shirt },
    { name: "Globus - Your Global Partner", icon: Globe },
    { name: "Elastochemie Impex", icon: FlaskConical },
    { name: "RCC", icon: Construction },
    { name: "Vikas Welding", icon: Flame },
    { name: "Nindiya Relax Krofull Jiyoooo", icon: Moon },
    { name: "Sunsource Energy - An SHV Energy Company", icon: Sun },
    { name: "Green Hitech Solution", icon: Leaf },
    { name: "Lamba Bros Pvt Ltd", icon: Users },
  ];

  return (
    <div className="w-full">
      <section className="relative pt-12 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <ImageCarousel />

          <div className="mt-12 md:mt-20 text-center animate-fade-in px-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary mb-4 md:mb-6 tracking-tight leading-tight">
              Your Global Logistics Partner
            </h1>
            <p className="text-base md:text-lg text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto">
              We specialize in comprehensive import-export solutions, customs
              clearance, and supply chain management across major Indian ports.
            </p>
            <button
              onClick={() => onPageChange("contact")}
              className="hero-cta inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-accent text-white rounded-lg font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Get Started <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-3">
              Our Esteemed Clients
            </h2>
            <p className="text-gray-600">
              Trusted by leading organizations across industries
            </p>
          </div>

          <div className="relative">
            <div className="flex overflow-hidden">
              <div className="flex animate-marquee">
                {clients.map((client, index) => {
                  return (
                    <div
                      key={index}
                      className="flex-shrink-0 mx-6 bg-white px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:z-50 border border-gray-200 relative"
                    >
                      <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <div className="flex animate-marquee" aria-hidden="true">
                {clients.map((client, index) => {
                  return (
                    <div
                      key={`duplicate-${index}`}
                      className="flex-shrink-0 mx-6 bg-white px-10 py-6 rounded-lg shadow-sm hover:shadow-md transition-all duration-300 transform hover:scale-105 hover:z-50 border border-gray-200 relative"
                    >
                      <span className="text-xl font-bold text-gray-800 whitespace-nowrap">
                        {client.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Our Experience
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Proven track record of delivering excellence in logistics and
              customs clearance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div
              className="bg-gradient-to-br from-blue-50 to-white p-5 md:p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300"
              style={{ animation: "fadeIn 0.6s ease-in-out 0s both" }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base md:text-xl">
                    12K
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-1.5 md:mb-2">
                    Heavy Machinery Handling
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Handled 12,000 FRT of second hand machineries for
                    Chhattisgarh power project
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-green-50 to-white p-5 md:p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300"
              style={{ animation: "fadeIn 0.6s ease-in-out 0.15s both" }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base md:text-xl">
                    24h
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-1.5 md:mb-2">
                    Rapid Project Execution
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Project for New IGI - Handled project registration for a
                    power station worth USD 450 Million completed within 24
                    hours
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-purple-50 to-white p-5 md:p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
              style={{ animation: "fadeIn 0.6s ease-in-out 0.3s both" }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base md:text-xl">
                    ₹4B
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-1.5 md:mb-2">
                    Zero Claim Record
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Handled around INR 4,000 Million worth of cargoes without
                    any claim
                  </p>
                </div>
              </div>
            </div>

            <div
              className="bg-gradient-to-br from-orange-50 to-white p-5 md:p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-300"
              style={{ animation: "fadeIn 0.6s ease-in-out 0.45s both" }}
            >
              <div className="flex items-start gap-3 md:gap-4">
                <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-base md:text-xl">
                    385
                  </span>
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-1.5 md:mb-2">
                    Solar Panel Clearance
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    Custom clearance of 385 TEU's of solar panels within 45 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Sectors We Cater To
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Serving diverse industries with specialized logistics solutions
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: Building2,
                label: "Banks",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Cog,
                label: "Heavy Engineering",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: MapPin,
                label: "SEZs",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Zap,
                label: "Power & Transmission",
                color: "from-yellow-500 to-yellow-600",
              },
              {
                icon: Grid3x3,
                label: "Miscellaneous",
                color: "from-purple-500 to-purple-600",
              },
            ].map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 md:p-8 rounded-xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 text-center group"
                  style={{
                    animation: `fadeIn 0.6s ease-in-out ${index * 0.1}s both`,
                  }}
                >
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-4 bg-gradient-to-br ${sector.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}
                  >
                    <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <h3 className="text-sm md:text-lg font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {sector.label}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Our Core Services
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Comprehensive logistics solutions tailored to your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {featuredServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group bg-white p-6 md:p-10 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl hover:border-accent transition-all duration-500 transform hover:-translate-y-2"
                  style={{
                    animation: `scaleUp 0.6s ease-out ${index * 0.15}s both`,
                  }}
                >
                  <div className="flex items-start gap-4 md:gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-accent to-pink-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-primary mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
                        {service.description}
                      </p>
                      <button
                        onClick={() => onPageChange("services")}
                        className="text-accent font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 text-sm md:text-base"
                      >
                        Learn More{" "}
                        <ArrowRight
                          size={18}
                          className="group-hover:translate-x-1 transition-transform"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12 md:mt-16">
            <button
              onClick={() => onPageChange("services")}
              className="px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-primary to-secondary text-white rounded-xl font-bold text-base md:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              View All Services
            </button>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Client Testimonials
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              What our valued clients say about our services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="relative bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-blue-100 hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-accent opacity-20" />
              <div className="relative z-10">
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed italic">
                  "Adarsh Group Agencies is one of the best clearance and
                  forwarding company. They are quick in custom clearance and
                  very reliable. They have saved a lot of cost for our company
                  in logistics. I strongly recommend choosing Adarsh Group
                  Agencies as their service provider."
                </p>
                <div className="border-t-2 border-accent pt-3 md:pt-4">
                  <p className="font-bold text-primary mb-1 text-sm md:text-base">
                    Khandu Kokanee
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Import Manager
                  </p>
                  <p className="text-xs md:text-sm text-accent font-semibold">
                    East Coast Distribution Pvt Ltd (ROXX)
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-green-100 hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-accent opacity-20" />
              <div className="relative z-10">
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed italic">
                  "We are thoroughly pleased with the constant attention given
                  to our account. This company ensures smooth and efficient
                  custom clearance and delivery. Adarsh Group Agencies has been
                  amazing for the growth of our business right from the start.
                  They walked us through all our shipping options with clarity
                  and 100% transparency. Customer service and availability is
                  superb."
                </p>
                <div className="border-t-2 border-accent pt-3 md:pt-4">
                  <p className="font-bold text-primary mb-1 text-sm md:text-base">
                    Mr. Vikas Setia
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">Director</p>
                  <p className="text-xs md:text-sm text-accent font-semibold">
                    XWLS ELECTRIC Pvt. Ltd.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border-2 border-purple-100 hover:shadow-2xl hover:border-accent transition-all duration-300 transform hover:-translate-y-2">
              <Quote className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-12 md:h-12 text-accent opacity-20" />
              <div className="relative z-10">
                <p className="text-sm md:text-base text-gray-700 mb-4 md:mb-6 leading-relaxed italic">
                  "We are thoroughly pleased with the constant attention given
                  to our account, and this company, especially S. Srinivasan and
                  his team, ensures smooth and efficient custom clearance and
                  delivery. We would definitely recommend using Adarsh Group
                  Agency for any and all of your shipping needs."
                </p>
                <div className="border-t-2 border-accent pt-3 md:pt-4">
                  <p className="font-bold text-primary mb-1 text-sm md:text-base">
                    Mr. Sugnesh
                  </p>
                  <p className="text-xs md:text-sm text-gray-600">
                    Import Head
                  </p>
                  <p className="text-xs md:text-sm text-accent font-semibold">
                    Crystal Interior Products Pvt Ltd (OLIVE)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl md:rounded-3xl p-8 md:p-12 lg:p-16 text-white shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -mr-32 -mt-32"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-white opacity-5 rounded-full -ml-48 -mb-48"></div>

            <div className="relative z-10 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
                Ready to Streamline Your Logistics?
              </h2>
              <p className="text-base md:text-xl text-gray-100 mb-8 md:mb-10 max-w-3xl mx-auto px-4">
                Get expert customs clearance, freight forwarding, and
                transportation solutions tailored to your business needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button
                  onClick={() => onPageChange("contact")}
                  className="px-8 md:px-10 py-3 md:py-4 bg-white text-primary rounded-xl font-bold text-base md:text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-xl"
                >
                  Contact Us
                </button>
                <button
                  onClick={() => onPageChange("about")}
                  className="px-8 md:px-10 py-3 md:py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold text-base md:text-lg hover:bg-white hover:text-primary transition-all duration-300 transform hover:scale-105"
                >
                  Learn More About Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
