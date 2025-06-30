import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');

  // Function to smoothly scroll to a section
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentActive = 'home';
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Check if the section is mostly in view
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            currentActive = sections[i];
            break;
          }
        }
      }
      setActiveSection(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-inter">
      {/* Navigation Bar */}
      <nav className="fixed w-full bg-gray-800 bg-opacity-90 z-50 shadow-lg py-4 px-6 md:px-12 rounded-b-xl">
        <div className="container mx-auto flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-teal-400 hover:text-teal-300 transition duration-300">
            Faraz-Shaikh.dev
          </a>
          <div className="hidden md:flex space-x-8">
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-lg font-medium capitalize relative group ${
                  activeSection === section ? 'text-teal-400' : 'text-gray-200 hover:text-teal-300'
                } transition duration-300`}
              >
                {section}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-teal-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${activeSection === section ? 'scale-x-100' : ''}`}></span>
              </button>
            ))}
          </div>
          {/* Mobile Menu Button - You might want to implement a mobile menu overlay here */}
          <button className="md:hidden text-gray-200 text-2xl">
            ☰
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center min-h-screen bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://placehold.co/1920x1080/1a202c/e2e8f0?text=Developer+Workspace')" }}>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative text-center p-8 max-w-4xl mx-auto rounded-xl bg-gray-800 bg-opacity-70 shadow-2xl backdrop-blur-sm">
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4 animate-fadeInUp">
            Hi, I'm <span className="text-teal-400">Faraz Shaikh</span>
          </h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8 animate-fadeInUp delay-100">
            A Full Stack Web Developer & Automation Expert
          </p>
          <p className="text-lg md:text-xl text-gray-300 mb-10 animate-fadeInUp delay-200">
            Crafting robust web solutions and automating complex workflows to drive efficiency and innovation.
          </p>
          <button
            onClick={() => scrollToSection('projects')}
            className="px-8 py-4 bg-teal-500 text-white text-xl font-bold rounded-full shadow-lg hover:bg-teal-600 transform hover:scale-105 transition duration-300 animate-fadeInUp delay-300"
          >
            Explore My Work
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-950">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 animate-fadeIn">About Me</h2>
          <div className="flex flex-col md:flex-row items-center md:space-x-12">
            <div className="md:w-1/3 mb-8 md:mb-0 animate-fadeInLeft">
              <img
                src="public/aboutme.jpg"
                alt="Your Photo"
                className="w-full h-auto rounded-full shadow-lg border-4 border-teal-400 object-cover"
              />
            </div>
            <div className="md:w-2/3 text-lg text-gray-300 leading-relaxed animate-fadeInRight">
              <p className="mb-6">
                As a passionate Full Stack Web Developer and Automation Expert, I thrive on building efficient, scalable, and user-friendly applications. With a strong foundation in both front-end and back-end technologies, I enjoy bringing ideas to life from concept to deployment.
              </p>
              <p className="mb-6">
                My journey in development has equipped me with the skills to tackle complex problems and deliver high-quality solutions. I specialize in creating dynamic web experiences and automating repetitive tasks, transforming manual processes into streamlined, intelligent workflows using Python.
              </p>
              <p>
                I am constantly learning and adapting to new technologies, always seeking to optimize performance and enhance user engagement. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 animate-fadeIn">My Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fadeInUp">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l3 3a1 1 0 001.414-1.414L11 9.586V6z" clipRule="evenodd"></path>
                </svg>
                Frontend Development
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li>React.js, Next.js</li>
                <li>JavaScript (ES6+), TypeScript</li>
                <li>HTML5, CSS3, Tailwind CSS, Bootstrap</li>
                <li>Responsive Design, UI/UX Principles</li>
              </ul>
            </div>

            {/* Backend Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-100">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path>
                </svg>
                Backend Development
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li>Node.js, Express.js</li>
                <li>Python (Django, Flask)</li>
                <li>RESTful APIs, GraphQL</li>
                <li>Authentication & Authorization</li>
              </ul>
            </div>

            {/* Automation Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-200">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                Automation & Scripting
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li>Python (Selenium, BeautifulSoup, Pandas)</li>
                <li>Task Automation, Web Scraping</li>
                <li>Data Processing & Analysis</li>
                <li>Process Optimization</li>
              </ul>
            </div>

            {/* Database Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-300">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm-1-4a1 1 0 00-1 1v2a1 1 0 001 1h16a1 1 0 001-1v-2a1 1 0 00-1-1H1z" clipRule="evenodd"></path>
                </svg>
                Databases
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li>PostgreSQL, MySQL</li>
                <li>MongoDB</li>
                <li>Firebase, Supabase</li>
                <li>Database Design & Optimization</li>
              </ul>
            </div>

            {/* DevOps & Tools */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-400">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path>
                </svg>
                DevOps & Tools
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li>Git, GitHub, GitLab</li>
                <li>Docker, Basic Kubernetes</li>
                <li>AWS (EC2, S3, Lambda - basics)</li>
                <li>CI/CD Principles</li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fadeInUp delay-500">
              <h3 className="text-2xl font-semibold text-white mb-4 flex items-center">
                <svg className="w-8 h-8 mr-3 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11 15a4 4 0 10-4-4v1a1 1 0 11-2 0v-1a6 6 0 1110 0v1a1 1 0 11-2 0v-1z" clipRule="evenodd"></path>
                </svg>
                Other Capabilities
              </h3>
              <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
                <li>Technical Documentation</li>
                <li>Agile Methodologies</li>
                <li>Problem Solving & Debugging</li>
                <li>Client Communication</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-950">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 animate-fadeIn">My Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Project 1 */}
            <ProjectCard
              title="E-commerce Platform Redesign"
              description="Full-stack development of a modern e-commerce platform with a focus on user experience and scalable architecture."
              tags={['React', 'Node.js', 'Express', 'MongoDB', 'Stripe API']}
              imageUrl="https://images.unsplash.com/photo-1498050108023-c5249f4cd0b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              liveLink="#"
              githubLink="#"
            />

            {/* Project 2 */}
            <ProjectCard
              title="Automated Data Reporting Tool"
              description="Developed a Python-based automation tool to extract, transform, and generate daily reports from various online sources."
              tags={['Python', 'Selenium', 'Pandas', 'Jinja2', 'Cron']}
              imageUrl="https://images.unsplash.com/photo-1550439062-609e1d856d68?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              liveLink="#"
              githubLink="#"
            />

            {/* Project 3 */}
            <ProjectCard
              title="Real-time Chat Application"
              description="A real-time chat application built with WebSockets, enabling instant messaging and group conversations."
              tags={['React', 'Socket.IO', 'Node.js', 'PostgreSQL']}
              imageUrl="https://images.unsplash.com/photo-1606240212007-88f5a653842c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              liveLink="#"
              githubLink="#"
            />

            {/* Project 4 */}
            <ProjectCard
              title="DevOps CI/CD Pipeline Setup"
              description="Implemented a robust CI/CD pipeline for a microservices architecture using Docker and GitHub Actions."
              tags={['Docker', 'Kubernetes (Basic)', 'GitHub Actions', 'AWS S3', 'EC2']}
              imageUrl="https://images.unsplash.com/photo-1582236611094-1a97ac72c694?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              liveLink="#"
              githubLink="#"
            />

            {/* Project 5 */}
            <ProjectCard
              title="AI-Powered Content Summarizer"
              description="A web application that utilizes NLP to summarize long articles and generate concise, readable summaries."
              tags={['Python', 'Flask', 'NLTK', 'Gradio', 'React']}
              imageUrl="https://images.unsplash.com/photo-1516110833957-e1cd3787498c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              liveLink="#"
              githubLink="#"
            />

            {/* Project 6 */}
            <ProjectCard
              title="Custom CRM Development"
              description="Built a tailored CRM solution for small businesses to manage leads, clients, and sales pipelines efficiently."
              tags={['Next.js', 'Django', 'PostgreSQL', 'Tailwind CSS']}
              imageUrl="https://images.unsplash.com/photo-1606857503498-842278b7b209?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              liveLink="#"
              githubLink="#"
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-900">
        <div className="container mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-bold text-center text-teal-400 mb-12 animate-fadeIn">Get in Touch</h2>
          <p className="text-lg text-gray-300 mb-8 animate-fadeInUp">
            I'm always open to new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 animate-fadeInUp delay-100">
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-white mb-3">Email Me</h3>
              <p className="text-gray-300 text-lg break-words">chalrie987@gmail.com</p>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-white mb-3">Connect on LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/farazshaikh2k23"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline text-lg break-words"
              >
                linkedin.com/in/yourprofile
              </a>
            </div>
            <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex-1 min-w-0">
              <h3 className="text-xl font-semibold text-white mb-3">GitHub Profile</h3>
              <a
                href="https://github.com/Faraz-Shaikh-Portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-teal-400 hover:underline text-lg break-words"
              >
                github.com/yourgithub
              </a>
            </div>
          </div>

          <div className="mt-12 text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

// Project Card Component
const ProjectCard = ({ title, description, tags, imageUrl, liveLink, githubLink }) => {
  return (
    <div className="bg-gray-800 rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition duration-300 transform hover:-translate-y-2 animate-fadeInUp">
      <img
        src={imageUrl}
        alt={title}
        className="w-full h-48 object-cover border-b border-gray-700"
        onError={(e) => { e.target.onerror = null; e.target.src="https://placehold.co/600x400/2d3748/a0aec0?text=Image+Unavailable"; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-300 text-base mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className="bg-teal-700 text-teal-100 text-xs font-semibold px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex justify-start space-x-4 mt-auto">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-teal-500 text-white rounded-full text-md font-semibold hover:bg-teal-600 transition duration-300 shadow"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-gray-700 text-gray-200 rounded-full text-md font-semibold hover:bg-gray-600 transition duration-300 shadow"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default App;
