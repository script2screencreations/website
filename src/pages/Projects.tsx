import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, Video, ExternalLink, Heart } from 'lucide-react';

type ProjectType = 'photography' | 'videography' | 'Both';

interface Project {
  id: number;
  title: string;
  category: string;
  type: ProjectType;
  client: string;
  image: string;
  description: string;
}

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'wedding', label: 'Weddings' },
    { id: 'corporate', label: 'Corporate' },
    { id: 'portrait', label: 'Portraits' },
    { id: 'event', label: 'Events' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "HackXelerate'25 Media Partner",
      category: 'event',
      type: 'Both',
      client: 'KPR IET',
      image:
        'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
      description:
        "We were honored to be the official media partner of HackXelerate'25, contributing to its branding, promotion, and digital content. Our team handled pre-event posters, live coverage, and post-event highlights across various platforms.",
    },
    // Add more projects here as needed
  ];

  const filteredProjects =
    selectedCategory === 'all'
      ? projects
      : projects.filter(
          (project) =>
            project.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <div className="pt-16 min-h-screen bg-slate-900">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our collection of stunning photography and videography work
              that captures life's most precious moments with artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-slate-800 sticky top-16 z-30">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-4 left-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2 flex space-x-1">
                          {project.type === 'Both' ? (
                            <>
                              <Camera className="w-5 h-5 text-white" />
                              <Video className="w-5 h-5 text-white" />
                            </>
                          ) : project.type === 'photography' ? (
                            <Camera className="w-5 h-5 text-white" />
                          ) : (
                            <Video className="w-5 h-5 text-white" />
                          )}
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <button className="bg-amber-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-sm flex items-center space-x-2 hover:bg-amber-300 transition-colors">
                          <span>View Details</span>
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 text-sm mb-2">Client: {project.client}</p>
                      <p className="text-gray-400 leading-relaxed">{project.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-3 mb-4">
                  {selectedProject.type === 'Both' ? (
                    <div className="flex space-x-2 items-center">
                      <Camera className="w-6 h-6 text-amber-400" />
                      <Video className="w-6 h-6 text-amber-400" />
                    </div>
                  ) : selectedProject.type === 'photography' ? (
                    <Camera className="w-6 h-6 text-amber-400" />
                  ) : (
                    <Video className="w-6 h-6 text-amber-400" />
                  )}
                  <span className="text-amber-400 font-medium capitalize">
                    {selectedProject.type}
                  </span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-400 mb-4">Client: {selectedProject.client}</p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="flex items-center space-x-2 text-red-400">
                  <Heart className="w-5 h-5" />
                  <span>Loved by our clients</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;
