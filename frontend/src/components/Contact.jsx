import React, { useState } from 'react';
import { Mail, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock submission - will be replaced with actual API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({ name: '', email: '', message: '' });

      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-white/70">
            Have a project in mind? Let's work together to build something amazing.
          </p>
        </div>

        {/* Contact Form */}
        <div className="rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10 p-8 sm:p-10">
          {submitSuccess ? (
            <div className="text-center py-12">
              <CheckCircle size={64} className="text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
              <p className="text-white/70">Thank you for reaching out. I'll get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="flex items-center gap-2 text-white/90 font-medium mb-2">
                  <User size={18} className="text-cyan-400" />
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  placeholder="John Doe"
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="flex items-center gap-2 text-white/90 font-medium mb-2">
                  <Mail size={18} className="text-cyan-400" />
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300"
                  placeholder="john@example.com"
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="flex items-center gap-2 text-white/90 font-medium mb-2">
                  <MessageSquare size={18} className="text-cyan-400" />
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg backdrop-blur-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-cyan-400/50 focus:border-cyan-400/50 transition-all duration-300 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 rounded-lg backdrop-blur-xl bg-cyan-500/20 border border-cyan-400/30 text-white font-semibold hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Direct Contact Info */}
        <div className="mt-8 text-center">
          <p className="text-white/60 mb-2">Or reach me directly at</p>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-cyan-400 hover:text-cyan-300 font-medium text-lg transition-colors"
          >
            {personalInfo.email}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;