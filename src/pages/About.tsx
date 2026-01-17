import { Ship, Award, Users, Zap } from "lucide-react";

interface AboutProps {
  onPageChange: (page: string) => void;
}

export const About: React.FC<AboutProps> = ({ onPageChange }) => {
  const values = [
    {
      icon: Award,
      title: "Act With Integrity",
      description:
        "We conduct our business with honesty, transparency, and ethical practices in all our operations.",
    },
    {
      icon: Users,
      title: "Exceed Customer Expectations",
      description:
        "We go beyond what is expected to deliver exceptional service and satisfaction to our clients.",
    },
    {
      icon: Zap,
      title: "Continuous Improvement",
      description:
        "We constantly evolve and enhance our processes to provide better logistics solutions.",
    },
    {
      icon: Ship,
      title: "Efficiency and Flexibility",
      description:
        "We adapt to your needs while maintaining optimal efficiency in our service delivery.",
    },
    {
      icon: Award,
      title: "Punctuality and Timeliness",
      description:
        "We ensure timely delivery and adherence to schedules in all our services.",
    },
    {
      icon: Ship,
      title: "100% Reliability",
      description:
        "We are committed to being a dependable partner you can trust for all your logistics needs.",
    },
  ];

  const timeline = [
    {
      year: "2004",
      title: "Founded",
      description:
        "Adarsh Forwarding Agency Pvt Ltd. was established with a vision to revolutionize Indian logistics.",
    },
    {
      year: "2010",
      title: "Expansion",
      description:
        "Extended operations to major ports including Mumbai, Kolkata, and more.",
    },
    {
      year: "2015",
      title: "Technology",
      description:
        "Implemented advanced tracking and management systems for better visibility.",
    },
    {
      year: "2024",
      title: "Leadership",
      description:
        "Recognized as industry leader with 500+ satisfied clients across 50+ countries.",
    },
  ];

  return (
    <div className="w-full">
      <section className="gradient-primary text-white py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 md:mb-6 animate-slide-in-left tracking-tight leading-tight">
            About{" "}
            <span className="text-white">
              ADARSH FORWARDING AGENCY PVT LTD.
            </span>
          </h1>
          <p
            className="text-base md:text-xl text-gray-100 max-w-3xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.2s" }}
          >
            Your trusted partner for custom clearance, freight forwarding, and
            transportation solutions across India
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4 md:mb-6">
              Our Story
            </h2>
            <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
              Founded in 2004,{" "}
              <span className="font-semibold text-primary">
                Adarsh Forwarding Agency Pvt Ltd.
              </span>{" "}
              has established itself as a reliable partner for businesses
              requiring custom clearance, freight forwarding, and transportation
              services. Based in Navi Mumbai, we specialize in providing
              comprehensive logistics solutions that streamline your supply
              chain operations.
            </p>
            <p className="text-gray-600 mb-4 text-base md:text-lg leading-relaxed">
              Our expertise spans custom clearance documentation, freight
              forwarding coordination, custom consultancy including IEC and DGFT
              licenses, and 365-day surface transportation services across
              India. We handle everything from general cargo to project cargo
              and over-dimensional cargo movements.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Located at Balaji Bhawan in CBD Belapur, our team is dedicated to
              providing efficient, reliable, and professional logistics services
              that help your business thrive in the competitive market.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Our Mission & Vision
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                Mission
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We aim to be a recognised player in providing high quality
                logistic solutions and build a trustworthy, long lasting
                relationship with our customers.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">
                Vision
              </h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Adarsh Group shall be the world leader in providing logistic
                services of world-class standards and shall be the first choice
                for the customers. Behind this vision stand our main values:
                innovation, trust and professionalism; based on which we are
                confident of achieving success.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                  style={{
                    animation: `scaleUp 0.6s ease-out ${index * 0.1}s both`,
                  }}
                >
                  <Icon className="w-10 h-10 md:w-12 md:h-12 text-accent mx-auto mb-3 md:mb-4" />
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2 md:mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary mb-4 md:mb-6 tracking-tight">
              Why Partner With{" "}
              <span className="block mt-2">
                ADARSH FORWARDING AGENCY PVT LTD.?
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-8 md:mt-12">
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  12K FRT
                </p>
                <p className="font-bold text-primary mb-2 md:mb-3 text-sm md:text-base">
                  Heavy Machinery Handled
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Second hand machineries for Chhattisgarh power project
                </p>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  24 Hours
                </p>
                <p className="font-bold text-primary mb-2 md:mb-3 text-sm md:text-base">
                  Project Registration
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  USD 450M power station project completed for New IGI
                </p>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:shadow-lg transition-shadow">
                <p className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  ₹4B+
                </p>
                <p className="font-bold text-primary mb-2 md:mb-3 text-sm md:text-base">
                  Zero Claim Record
                </p>
                <p className="text-gray-600 text-sm md:text-base">
                  Handled cargoes worth INR 4,000 Million without any claim
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 md:mb-4">
              Our Management Team
            </h2>
            <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto px-4">
              Led by experienced professionals dedicated to excellence in
              logistics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                  AP
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                  Mr. Avnish P. Singh
                </h3>
                <p className="text-accent font-semibold text-sm md:text-base">
                  Proprietor
                </p>
              </div>
              <div className="text-gray-600 text-xs md:text-sm leading-relaxed">
                <p className="mb-2 md:mb-3">
                  MBA, Post Graduate Diploma in International Trade Management
                  (PGDITM), Customs Regulations 8 holder which is the highest
                  category in Indian customs clearance field.
                </p>
                <p>
                  With 16 years of experience, he has worked in both user
                  industry as well as service providers, leading our branch
                  operations with unmatched expertise.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-green-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                  MS
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                  Mr. Mayank Singh
                </h3>
                <p className="text-accent font-semibold text-sm md:text-base">
                  Marketing Head
                </p>
              </div>
              <div className="text-gray-600 text-xs md:text-sm leading-relaxed">
                <p className="mb-2 md:mb-3">
                  MBA in Marketing & International Business, serving as our Head
                  of Marketing and Business Development.
                </p>
                <p>
                  With 5 years of experience in the field, he specializes in
                  understanding and fulfilling customer needs with precision and
                  dedication.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-white p-6 md:p-8 rounded-2xl shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300">
              <div className="text-center mb-4 md:mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 md:mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-xl md:text-2xl font-bold">
                  SS
                </div>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-1">
                  Mr. Shivam Singh
                </h3>
                <p className="text-accent font-semibold text-sm md:text-base">
                  Head Operations
                </p>
              </div>
              <div className="text-gray-600 text-xs md:text-sm leading-relaxed">
                <p className="mb-2 md:mb-3">
                  MBA in International Business with a Mechanical Engineering
                  background, leading our Operations & Business Development.
                </p>
                <p>
                  With about 9 years of experience in Projects, CHA operations
                  and General Forwarding, he ensures seamless operational
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 md:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6 md:mb-8">
            Ready to Experience Excellence?
          </h2>
          <button
            onClick={() => onPageChange("contact")}
            className="px-8 md:px-10 py-3 md:py-4 bg-accent text-white rounded-lg font-bold text-base md:text-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch Today
          </button>
        </div>
      </section>
    </div>
  );
};
