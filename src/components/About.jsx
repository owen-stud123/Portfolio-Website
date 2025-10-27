import { Code, Palette, Zap } from "lucide-react";

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive and performant web applications using modern frameworks and technologies."
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating beautiful and intuitive user interfaces that provide excellent user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing websites for speed and efficiency to deliver the best possible performance."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto"></div>
        </div>
        
        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-gray-600 text-center leading-relaxed">
            I'm a passionate web developer. I love turning ideas into reality through clean 
            code and thoughtful design.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="text-center p-6 rounded-lg hover:shadow-lg transition"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-sky-100 text-sky-600 rounded-full mb-4">
                <skill.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
