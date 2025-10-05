import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Award, Camera, Video, Lightbulb, Star } from 'lucide-react';
import { Link } from 'react-router-dom';


const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion',
      description: 'We pour our heart into every project, treating each client\'s story as our own.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every shot, every edit, and every client interaction.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to ensure their vision becomes reality.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We embrace new technologies and techniques to stay ahead of industry trends.'
    }
  ];

  const timeline = [
    {
      year: '2016',
      title: 'The Beginning',
      description: 'Started as a passion project by Alex Rodriguez, focusing on wedding photography in the local area.'
    },
    {
      year: '2018',
      title: 'Team Expansion',
      description: 'Sarah Chen joined as our videographer, allowing us to offer comprehensive media services.'
    },
    {
      year: '2020',
      title: 'Studio Opening',
      description: 'Opened our first professional studio space and expanded into corporate photography.'
    },
    {
      year: '2022',
      title: 'Award Recognition',
      description: 'Received our first industry award for excellence in wedding photography.'
    },
    {
      year: '2024',
      title: 'Leading the Industry',
      description: 'Now recognized as one of the top media studios in the region with 500+ successful projects.'
    }
  ];

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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Our Story</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the passion and dedication behind S2S Creations, where every moment is captured with artistic excellence and professional expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
              At S2S Creations, storytelling is at the heart of everything we do. We are a creative production company dedicated to crafting compelling visual experiences that resonate with audiences and leave lasting impressions. Whether it's a commercial, short film, or branded content, we bring ideas to life with cinematic precision and artistic flair.
              </p>
              {/*
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">500+</div>
                  <div className="text-gray-400">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">200+</div>
                  <div className="text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-400">8+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div> 
              */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Our team at work"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-20"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The principles that guide everything we do and every project we undertake.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors">
                  {value.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Journey</h2>
            <p className="text-xl text-gray-400">
              From humble beginnings to industry recognition, here's how we've grown.
            </p>
          </motion.div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
              >
                <div className="flex-1">
                  <div className={`${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="text-2xl font-bold text-amber-400 mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed max-w-md">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 z-10">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What We Do</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive media services tailored to capture your most important moments.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-amber-400 transition-all duration-300 group"
            >
              <Camera className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Photography Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Wedding Photography</li>
                <li>• Portrait Sessions</li>
                <li>• Corporate Headshots</li>
                <li>• Event Photography</li>
                <li>• Product Photography</li>
                <li>• Engagement Sessions</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700 hover:border-amber-400 transition-all duration-300 group"
            >
              <Video className="w-12 h-12 text-amber-400 mb-6 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-2xl font-bold text-white mb-4">Videography Services</h3>
              <ul className="space-y-3 text-gray-400">
                <li>• Wedding Cinematography</li>
                <li>• Corporate Videos</li>
                <li>• Promotional Content</li>
                <li>• Event Videography</li>
                <li>• Documentary Style</li>
                <li>• Social Media Content</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-amber-400 to-orange-500">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's create something beautiful together. Contact us today to discuss your vision.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
              >
                Get In Touch
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;