import { ExternalLink } from "lucide-react";

// Importing images
import card1 from "../assets/images/card-1-D83uj-qZ.png";
import card2 from "../assets/images/card-2-BJ8-9N8h.png";
import card3 from "../assets/images/card-3-Ka1ll87R.png";
import card4 from "../assets/images/card-4-1lvzje-u.png";
import card5 from "../assets/images/card-5-TrbU7d8r.png";
import card6 from "../assets/images/card-6-CMi2awuo.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Hospital Monitoring Web App",
      category: "Web Development",
      image: card1,
      description: "Real-time patient monitoring system for healthcare facilities",
      link: "https://github.com/owen-stud123/hospital_monitoring_group14.git"
    },
    {
      id: 2,
      title: "Weather Travel Planner",
      category: "Web Application",
      image: card2,
      description: "Smart travel planning app with weather forecasting integration",
      link: "https://github.com/owen-stud123/Weather-Travel-Planner.git"
    },
    {
      id: 3,
      title: "ALU AirBnB Clone",
      category: "Full Stack",
      image: card3,
      description: "Complete accommodation booking platform clone with modern features",
      link: "https://github.com/owen-stud123/alu-AirBnB_clone_v2.git"
    },
    {
      id: 4,
      title: "MoMo Data Analysis",
      category: "Data Science",
      image: card4,
      description: "Mobile money transaction analysis and visualization dashboard",
      link: "https://github.com/owen-stud123/MoMo-Data-Analysis.git"
    },
    {
      id: 5,
      title: "Productivity Tracker",
      category: "Web Application",
      image: card5,
      description: "Task management and productivity monitoring web application",
      link: "https://github.com/owen-stud123/Productivity_webApp.git"
    },
    {
      id: 6,
      title: "ShockWave",
      category: "Full Stack",
      image : card6,
      description: "Digital Marketplace for Graphic Designers & Businesses",
      link: "https://github.com/owen-stud123/ShockWave.git"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">My Portfolio</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={project.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition block"
            >
              <div className="relative overflow-hidden h-64 bg-gray-100">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-100 group-hover:scale-110 transition-transform duration-300"
                  style={{ display: 'block' }}
                  onError={(e) => {
                    console.error('Image failed to load:', project.image);
                    e.target.src = 'https://via.placeholder.com/800x600?text=Image+Not+Found';
                  }}
                />
                <div className="absolute inset-0 bg-sky-600 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                  <ExternalLink className="text-white w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
              <div className="p-6">
                <span className="text-sm text-sky-600 font-medium">{project.category}</span>
                <h3 className="text-xl font-semibold text-gray-900 mt-2 mb-2">{project.title}</h3>
                <p className="text-gray-600">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
