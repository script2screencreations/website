import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Video, Award, Instagram, Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Priyadarshini',
      role: 'CEO',
      image: '',
      bio: '',
      skills: [],
      social: {
        instagram: '#',
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 2,
      name: 'Dhanyaa',
      role: 'COO',
      image: '#',
      bio: '',
      skills: [],
      social: {
        instagram: '#',
        linkedin: '#',
        email: '#'
      }
    },
    {
      id: 2,
      name: 'Nishanth',
      role: 'CTO',
      image: '#',
      bio: '',
      skills: [],
      social: {
        instagram: '#',
        linkedin: '#',
        email: '#'
      }
    },
    
  ];

  const awards = [
    { year: '2024', title: 'Wedding Photographer of the Year', organization: 'Regional Photography Awards' },
    { year: '2023', title: 'Best Corporate Video', organization: 'Business Media Excellence' },
    { year: '2023', title: 'Excellence in Portrait Photography', organization: 'Professional Photographers Guild' },
    { year: '2022', title: 'Rising Studio Award', organization: 'Creative Industry Association' },
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Meet Our Team</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our talented team of creative professionals is dedicated to bringing your vision to life with passion, expertise, and artistic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="relative">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Social Links - appear on hover */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-4 flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      <a
                        href={member.social.instagram}
                        className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                      <a
                        href={member.social.linkedin}
                        className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-amber-400 hover:text-slate-900 transition-all duration-300"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </motion.div>
                  </div>
                  
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-amber-400 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-400 leading-relaxed mb-6">{member.bio}</p>
                    
                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Awards & Recognition</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and peers.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-amber-400 transition-all duration-300 group"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-to-r from-amber-400 to-orange-500 rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-amber-400 font-bold text-lg mb-1">{award.year}</div>
                    <h3 className="text-white font-semibold text-lg mb-2">{award.title}</h3>
                    <p className="text-gray-400">{award.organization}</p>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Work With Our Creative Team
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to create something extraordinary together? Let's discuss your project and bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;