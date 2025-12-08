import { Github, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com/owen-stud123", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ganza-owen-44a205327", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">My Portfolio</h3>
            <p className="text-gray-400">
              Creating beautiful digital experiences that make a difference.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-sky-400 transition">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-sky-400 transition">About</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-sky-400 transition">Portfolio</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-sky-400 transition">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Me</h3>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-sky-600 transition"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-1">
           By Ganza Owen
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
