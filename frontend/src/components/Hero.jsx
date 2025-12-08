import profileImage from '../assets/images/IMG_5576.JPG';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-sky-50 to-blue-100">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-sky-600">Ganza Owen</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8">
            Hi, I'm a passionate web developer.
          </p>
          <div className="mb-8 flex justify-center">
            <img 
              src={profileImage} 
              alt="Ganza Owen" 
              className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>
          <p className="text-lg text-gray-500 mb-10 leading-relaxed">
            I am a student at African Leadership University, currently in my second year of the BSc program. 
            I am passionate about graphic design, proficient in Blender for 3D modeling and rendering, and have a keen interest in UI/UX design.
            I create beautiful and functional websites. Specializing in modern web technologies and user-centered design.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="#portfolio" 
              className="bg-sky-600 text-white px-8 py-3 rounded-lg hover:bg-sky-700 transition font-medium"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-white text-sky-600 px-8 py-3 rounded-lg border-2 border-sky-600 hover:bg-sky-50 transition font-medium"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
