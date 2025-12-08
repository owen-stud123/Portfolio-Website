import { Monitor, Smartphone, Pencil, Search, ShoppingCart, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Design",
      description: "Creating stunning and responsive websites that captivate your audience and drive results."
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Developing native and cross-platform mobile applications."
    },
    {
      icon: Pencil,
      title: "Graphic Design",
      description: "Crafting beautiful visual identities, logos, and marketing materials for your brand."
    },
    
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Services</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Professional services to help bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 bg-gray-50 rounded-lg hover:bg-sky-50 hover:shadow-lg transition group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-lg mb-4 group-hover:bg-sky-600 group-hover:text-white transition">
                <service.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
