import React, { useState } from 'react';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import { personalInfo } from '../data/mock';
import axios from 'axios';
import useScrollReveal from '../hooks/useScrollReveal';

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const inputClasses =
  'w-full px-4 py-3 bg-navy-light border border-navy-lightest rounded text-slate-lightest placeholder-slate/50 focus:outline-none focus:border-green transition-colors duration-300 font-mono text-sm';

const Contact = () => {
  const [ref, isRevealed] = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    if (!BACKEND_URL) {
      setSubmitError(
        'Contact form is not configured (missing REACT_APP_BACKEND_URL). Rebuild the site with the API URL set.'
      );
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await axios.post(`${API}/contact`, formData);
      if (response.data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      setSubmitError(
        error.response?.data?.detail || 'Failed to send message. Please try again or email me directly.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className={`reveal-on-scroll ${isRevealed ? 'is-revealed' : ''} py-24 px-6 sm:px-10 lg:px-24 xl:px-32 max-w-2xl text-center mx-auto`}
    >
      <p className="font-mono text-green mb-4">04. What's Next?</p>
      <h2 className="text-4xl sm:text-5xl font-bold text-slate-lightest mb-6">Get In Touch</h2>
      <p className="text-slate mb-12 max-w-md mx-auto">
        Have a project in mind or an opportunity to discuss? My inbox is always open — I'll do my
        best to get back to you soon.
      </p>

      <div className="text-left">
        {submitSuccess ? (
          <div className="text-center py-12 border border-navy-lightest rounded bg-navy-light">
            <CheckCircle size={48} className="text-green mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-lightest mb-2">Message Sent!</h3>
            <p className="text-slate">Thank you for reaching out. I'll get back to you soon.</p>
          </div>
        ) : (
          <>
            {submitError && (
              <div className="mb-6 p-4 rounded border border-red-400/30 bg-red-500/10 flex items-start gap-3">
                <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                <p className="text-red-300 text-sm">{submitError}</p>
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-slate mb-2">
                  NAME
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-slate mb-2">
                  EMAIL
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block font-mono text-xs text-slate mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>
              <div className="text-center pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center gap-2 px-10 py-4 rounded border border-green text-green font-mono text-sm transition-all duration-300 hover:bg-green/5 hover:shadow-[5px_5px_0_0_#64ffda] hover:-translate-x-1 hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:shadow-none disabled:hover:translate-x-0 disabled:hover:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-green border-t-transparent" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      <div className="mt-10 text-center">
        <p className="text-slate text-sm mb-1">Or reach me directly at</p>
        <a href={`mailto:${personalInfo.email}`} className="text-green font-mono text-sm hover:underline">
          {personalInfo.email}
        </a>
      </div>
    </section>
  );
};

export default Contact;
