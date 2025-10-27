import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ganzaowe23@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+250 780 803 666"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Kigali, Rwanda"
    }
  ];

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
            <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-sky-100 text-sky-600 rounded-full mb-4">
                <info.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-gray-600">{info.details}</p>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="bg-white p-8 rounded-lg shadow-md">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Your Name
                </label>
                <input 
                  type="text" 
                  id="name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-600"
                  placeholder=" "
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Your Email
                </label>
                <input 
                  type="email" 
                  id="email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-600"
                  placeholder=" "
                />
              </div>
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                Subject
              </label>
              <input 
                type="text" 
                id="subject"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-600"
                placeholder=" "
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                Message
              </label>
              <textarea 
                id="message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-sky-600"
                placeholder=" "
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition font-medium flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
