import { Mail, Phone, MapPin, Send, CheckCircle, XCircle } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ganzaowe23@gmail.com",
      link: "mailto:ganzaowe23@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+250 780 803 666",
      link: "tel:+250780803666"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kigali, Rwanda",
      link: null
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("https://portfolio-contact-api-i5sp.onrender.com", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({ 
          type: "success", 
          message: data.message || "Message sent successfully! I'll get back to you soon." 
        });
        
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: ""
        });
      } else {
        setStatus({ 
          type: "error", 
          message: data.error || "Failed to send message. Please try again." 
        });
      }
    } catch (error) {
      setStatus({ 
        type: "error", 
        message: "Failed to send message. Please make sure the server is running or contact me directly." 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4 group-hover:bg-sky-600 group-hover:text-white transition-colors duration-300">
                <info.icon className="w-7 h-7" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600 group-hover:text-sky-600 transition-colors">
                {info.details}
              </p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
            {status.message && (
              <div 
                className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                  status.type === "success" 
                    ? "bg-green-50 text-green-800 border border-green-200" 
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                ) : (
                  <XCircle className="w-5 h-5 flex-shrink-0" />
                )}
                <p>{status.message}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name *
                </label>
                <input 
                  type="text" 
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition"
                  placeholder=""
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email *
                </label>
                <input 
                  type="email" 
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition"
                  placeholder=""
                  required
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject *
              </label>
              <input 
                type="text" 
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition"
                placeholder=""
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message *
              </label>
              <textarea 
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent transition resize-none"
                placeholder=""
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
