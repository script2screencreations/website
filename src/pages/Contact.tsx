import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Instagram, Linkedin, Facebook } from 'lucide-react';
import { sendEmail } from '../utils/sendEmail';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    eventDate: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const success = await sendEmail(formData);
      if (success) {
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            name: '',
            email: '',
            phone: '',
            service: '',
            eventDate: '',
            message: ''
          });
        }, 3000);
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 96779 01869'],
      action: 'tel:+15551234567'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['contact@s2screations.in'],
      action: 'mailto:contact@s2screations.in'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: ['Incubation Center at KPR Institute of Engineering and Technology, Coimbatore'],
      action: ''
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon - Fri: 9AM - 4PM', 'Sat - Sun: By Appointment'],
      action: null
    }
  ];

  const services = [
    'Wedding Photography',
    'Wedding Videography',
    'Portrait Session',
    'Corporate Event',
    'Product Photography',
    'Commercial Video',
    'Other'
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
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to bring your vision to life? Let's discuss your project and create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="contact-form">
                <h2 className="text-3xl font-bold text-white mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div className="success-message">
                    <CheckCircle className="success-icon" />
                    <h3 className="success-title">Message Sent!</h3>
                    <p className="success-text">We'll get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="name" className="form-label">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="email" className="form-label">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-group">
                        <label htmlFor="phone" className="form-label">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="form-input"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="service" className="form-label">
                          Service Needed *
                        </label>
                        <select
                          id="service"
                          name="service"
                          required
                          value={formData.service}
                          onChange={handleChange}
                          className="form-select"
                        >
                          <option value="">Select a service</option>
                          {services.map((service) => (
                            <option key={service} value={service}>
                              {service}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="form-group">
                      <label htmlFor="eventDate" className="form-label">
                        Event Date (if applicable)
                      </label>
                      <input
                        type="date"
                        id="eventDate"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleChange}
                        className="form-input"
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="message" className="form-label">
                        Tell us about your project *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="form-textarea"
                        placeholder="Tell us about your vision, style preferences, and any special requirements..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isLoading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="submit-button"
                    >
                      <Send className="w-5 h-5" />
                      <span>{isLoading ? 'Sending...' : 'Send Message'}</span>
                    </motion.button>
                  </form>
                )}
              </div>

              {/* Moved 'Find Us on the Map' below the form */}
              <div className="mt-12">
                <h3 className="text-2xl font-semibold text-white mb-4">Find Us on the Map</h3>
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-700">
                  <iframe
                    title="S2S Creations Studio Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2708.252896770092!2d77.14087969886405!3d11.077276898819298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8ff7a08d662bb%3A0x81c68f2ddd8c1dfa!2sKPR%20Institute%20of%20Engineering%20and%20Technology!5e0!3m2!1sen!2sin!4v1757237111986!5m2!1sen!2sin"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Contact Information</h2>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="contact-info-card flex flex-col gap-4 bg-slate-800 p-6 rounded-xl border border-slate-700 hover:border-amber-400 transition-all duration-300 group"
                    >
                      {/* Icon + Title */}
                      <div className="flex items-center gap-4">
                        <div className="contact-info-icon">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-lg font-semibold text-white">{info.title}</h3>
                      </div>

                      {/* Details */}
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <div key={idx}>
                            {info.action && idx === 0 ? (
                              <a
                                href={info.action}
                                className="text-gray-400 hover:text-amber-400 transition-colors"
                              >
                                {detail}
                              </a>
                            ) : (
                              <p className="text-gray-400">{detail}</p>
                            )}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                <div className="social-links">
                  <a href="https://www.instagram.com/s2s_creations_?igsh=MXJrbTcxeTZ3dXhyeA==" target="_blank" className="social-link">
                    <Instagram className="w-6 h-6" />
                  </a>
                  {/* 
                  <a href="#" className="social-link">
                    <Facebook className="w-6 h-6" />
                  </a>
                  <a href="#" className="social-link">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  */}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-400">
              Quick answers to common questions about our services.
            </p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                question: "How far in advance should I book your services?",
                answer: "We recommend booking 3-6 months in advance, especially for weddings and major events during peak seasons."
              },
              {
                question: "Do you travel for destination events?",
                answer: "Yes, we love destination events! Travel fees may apply depending on the location."
              },
              {
                question: "What's included in your wedding packages?",
                answer: "Our wedding packages include pre-wedding consultation, full day coverage, edited photos/videos, and online gallery delivery."
              },
              {
                question: "How long does it take to receive our photos/videos?",
                answer: "Turnaround time is typically 2-4 weeks for photography and 4-6 weeks for videography, depending on the project scope."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="faq-item"
              >
                <h3 className="faq-question">{faq.question}</h3>
                <p className="faq-answer">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
