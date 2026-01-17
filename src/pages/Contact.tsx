import { useState } from "react";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  onPageChange: (page: string) => void;
}

export const Contact: React.FC<ContactProps> = ({ onPageChange }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(false);
    setSubmitted(false);

    try {
      const result = await emailjs.send(
        "service_2ptuoty",
        "template_s4epmk7",
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
          to_email: "mumbai@adarshforwarding.com",
        },
        "wA77jT8CrAnwi5fOt"
      );

      console.log("Email sent successfully:", result);
      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      }, 3000);
    } catch (err) {
      console.error("Failed to send email:", err);
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["(022)-4969 2907", "(022)-4006 8855"],
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mumbai@adarshforwarding.com"],
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Office No 617, 6th Floor A Wing",
        "BALAJI BHAWAN, Sector 11 CBD",
        "Belapur, Navi Mumbai",
        "Maharashtra 400614",
      ],
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["Mon-Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 2:00 PM"],
    },
  ];

  return (
    <div className="w-full">
      <section className="gradient-primary text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 animate-slide-in-left">
            Contact Us
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-gray-100 max-w-3xl mx-auto animate-fade-in px-4"
            style={{ animationDelay: "0.2s" }}
          >
            Get in touch with our team to discuss your logistics needs and
            receive a personalized quote
          </p>
        </div>
      </section>

      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow text-center"
                  style={{
                    animation: `fadeIn 0.6s ease-in-out ${index * 0.1}s both`,
                  }}
                >
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-accent mx-auto mb-2 sm:mb-3" />
                  <h3 className="text-base sm:text-lg font-bold text-primary mb-1 sm:mb-2">
                    {info.title}
                  </h3>
                  <div className="space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 text-xs sm:text-sm">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-6 sm:mb-8 text-center">
            Find Us Here
          </h2>
          <div className="rounded-xl overflow-hidden shadow-xl border-4 border-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.8426288869744!2d73.01824287516826!3d19.01685598216395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c3d6b8f8f8f9%3A0x1234567890abcdef!2sBalaji%20Bhawan%2C%20Sector%2011%2C%20CBD%20Belapur%2C%20Navi%20Mumbai%2C%20Maharashtra%20400614!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Adarsh Forwarding Agency Office Location"
              className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px]"
            ></iframe>
          </div>
          <div className="mt-6 text-center">
            <a
              href="https://www.google.com/maps/dir//Office+No+617,+6th+Floor+A+Wing,+BALAJI+BHAWAN,+Sector+11+CBD+Belapur,+Navi+Mumbai,+Maharashtra+400614"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
            >
              <MapPin size={20} />
              Get Directions
            </a>
          </div>
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
            <div className="animate-slide-in-left">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4 sm:mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-6 sm:mb-8 text-sm sm:text-base">
                Fill out the form below and our team will get back to you within
                24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">Select a service</option>
                    <option value="custom-clearance">Custom Clearance</option>
                    <option value="freight-forwarding">
                      Freight Forwarding
                    </option>
                    <option value="custom-consultancy">
                      Custom Consultancy
                    </option>
                    <option value="surface-transportation">
                      Surface Transportation
                    </option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-primary mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base border-2 border-gray-300 rounded-lg focus:border-accent focus:outline-none transition-colors resize-none disabled:bg-gray-100 disabled:cursor-not-allowed"
                    placeholder="Tell us about your logistics requirements..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-4 sm:px-6 py-2.5 sm:py-3 bg-accent text-white rounded-lg font-bold text-base sm:text-lg hover:bg-pink-600 transition-all duration-300 transform hover:scale-105 disabled:bg-gray-400 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </button>

                {submitted && (
                  <div className="p-3 sm:p-4 bg-green-100 text-green-700 rounded-lg animate-fade-in border border-green-300 text-sm sm:text-base">
                    <strong>✓ Success!</strong> Your message has been sent
                    successfully. We'll get back to you soon.
                  </div>
                )}

                {error && (
                  <div className="p-3 sm:p-4 bg-red-100 text-red-700 rounded-lg animate-fade-in border border-red-300 text-sm sm:text-base">
                    <strong>✗ Error!</strong> Failed to send message. Please try
                    again or contact us directly at{" "}
                    <a
                      href="mailto:mumbai@adarshforwarding.com"
                      className="underline"
                    >
                      mumbai@adarshforwarding.com
                    </a>
                  </div>
                )}
              </form>
            </div>

            <div className="animate-slide-in-right">
              <div className="bg-gray-100 rounded-2xl p-6 sm:p-8 h-full">
                <h4 className="text-xl sm:text-2xl font-bold text-primary mb-4 sm:mb-6">
                  Office Hours
                </h4>
                <div className="space-y-3 sm:space-y-4 text-gray-700">
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-300">
                    <span className="font-semibold text-base sm:text-lg">
                      Monday - Friday
                    </span>
                    <span className="text-sm sm:text-lg">
                      9:00 AM - 6:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3 border-b border-gray-300">
                    <span className="font-semibold text-base sm:text-lg">
                      Saturday
                    </span>
                    <span className="text-sm sm:text-lg">
                      10:00 AM - 2:00 PM
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 sm:py-3">
                    <span className="font-semibold text-base sm:text-lg">
                      Sunday
                    </span>
                    <span className="text-gray-500 text-sm sm:text-lg">
                      Closed
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-secondary p-6 sm:p-8 rounded-xl text-center text-white shadow-xl">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
              Prefer to Call?
            </h2>
            <p className="text-sm sm:text-base text-gray-100 mb-4 sm:mb-6 px-4">
              Our customer service team is ready to assist you with your
              logistics needs
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="tel:+912249692907"
                className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                📞 Call: (022)-4969 2907
              </a>
              <a
                href="tel:+912240068855"
                className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg text-sm sm:text-base"
              >
                📞 Call: (022)-4006 8855
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
