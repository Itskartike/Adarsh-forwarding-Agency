import { services } from "../data/services";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

interface ServicesProps {
  onPageChange: (page: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onPageChange }) => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const toggleService = (id: number) => {
    setExpandedService(expandedService === id ? null : id);
  };

  return (
    <div className="w-full">
      <section className="gradient-primary text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 animate-slide-in-left">
            Our Services
          </h1>
          <p
            className="text-base md:text-xl text-gray-100 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Comprehensive logistics and import-export solutions designed to meet
            your business needs
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="service-card group bg-white p-6 md:p-8 rounded-xl shadow-lg border-2 border-gray-100 hover:border-accent overflow-hidden relative"
                  style={{
                    animation: `scaleUp 0.5s ease-out ${index * 0.08}s both`,
                  }}
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-accent bg-opacity-10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10">
                    <div className="mb-3 md:mb-4 inline-block p-2 md:p-3 bg-accent bg-opacity-10 rounded-lg group-hover:bg-opacity-20 transition-all duration-300">
                      <Icon className="w-6 h-6 md:w-8 md:h-8 text-accent group-hover:scale-110 transition-transform duration-300" />
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description - Hidden on mobile unless expanded */}
                    <p
                      className={`text-sm md:text-base text-gray-600 mb-4 md:mb-6 leading-relaxed ${
                        expandedService === service.id
                          ? "block"
                          : "hidden md:block"
                      }`}
                    >
                      {service.description}
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-2">
                      {/* Service number - Hidden on mobile unless expanded */}
                      <span
                        className={`inline-flex px-3 md:px-4 py-1.5 md:py-2 bg-gray-100 text-gray-700 rounded-full text-xs md:text-sm font-medium group-hover:bg-accent group-hover:text-white transition-all duration-300 ${
                          expandedService === service.id
                            ? "inline-flex"
                            : "hidden md:inline-flex"
                        }`}
                      >
                        Service #{service.id}
                      </span>
                      <button
                        onClick={() => {
                          if (window.innerWidth < 768) {
                            toggleService(service.id);
                          } else {
                            onPageChange("contact");
                          }
                        }}
                        className="text-accent font-semibold hover:text-pink-600 transition-colors duration-300 flex items-center gap-1 text-sm md:text-base"
                      >
                        {window.innerWidth < 768 &&
                        expandedService !== service.id ? (
                          <>
                            View Details <ArrowRight size={16} />
                          </>
                        ) : (
                          <>
                            Inquire <ArrowRight size={16} />
                          </>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-accent to-pink-600 opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 md:mb-6">
                Tailored Solutions for Every Business
              </h2>
              <p className="text-gray-600 mb-3 md:mb-4 text-base md:text-lg">
                Whether you're a small business venturing into international
                trade or an established enterprise seeking optimization, our
                team of experts provides customized logistics solutions that
                align with your goals.
              </p>
              <p className="text-gray-600 mb-6 md:mb-8 text-base md:text-lg">
                We handle every aspect of your supply chain with precision,
                reliability, and transparent communication.
              </p>
              <button
                onClick={() => onPageChange("contact")}
                className="inline-flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-accent text-white rounded-lg font-semibold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
              >
                Get Your Customized Quote <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-3 md:gap-4">
              {[
                { label: "Heavy Machinery", value: "12K FRT" },
                { label: "Project Registration", value: "24 Hours" },
                { label: "Zero Claims", value: "₹4B+" },
                { label: "Solar Panels", value: "385 TEU" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white p-4 md:p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
                  style={{
                    animation: `fadeIn 0.6s ease-in-out ${index * 0.1}s both`,
                  }}
                >
                  <p className="text-xl md:text-2xl font-bold text-accent mb-1 md:mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 font-medium text-xs md:text-sm">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-xl p-8 md:p-12 text-white text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4">
              Need More Information?
            </h2>
            <p className="text-gray-200 mb-6 md:mb-8 text-base md:text-lg">
              Contact our experts today to discuss your logistics requirements
              and discover how we can optimize your supply chain.
            </p>
            <button
              onClick={() => onPageChange("contact")}
              className="px-8 md:px-10 py-2.5 md:py-3 bg-accent text-white rounded-lg font-bold hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 text-sm md:text-base"
            >
              Contact Our Team
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
