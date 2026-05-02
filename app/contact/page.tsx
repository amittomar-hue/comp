'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Linkedin, Clock } from 'lucide-react';

const OFFICES = [
  { city: 'Princeton, NJ (HQ)', address: '4390 Route 1 North, Suite 302, Princeton, NJ 08540', phone: '+1 (609) 606-9010' },
  { city: 'New York, NY', address: '28 Liberty Street, Suite 600, New York, NY 10005', phone: '' },
  { city: 'Dallas, TX', address: '5800 Tennyson Pkwy, Suite 330, Plano, TX 75024', phone: '' },
  { city: 'Noida, India', address: 'C-56/11, Sector 62, Noida, UP 201301', phone: '+91 120 400 5000' },
];

const INTEREST_OPTIONS = [
  'Talent / Staffing Solutions',
  'Cybersecurity Services',
  'Digital Transformation',
  'Learning Solutions',
  'Healthcare IT',
  'Partnership Inquiry',
  'General Inquiry',
  'Careers',
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', phone: '', interest: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // In production: POST to /api/contact or WP form endpoint
    setSubmitted(true);
  }

  return (
    <>
      <section className="gradient-blue text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <span className="inline-block px-4 py-1.5 text-xs font-semibold rounded-full bg-white/15 mb-6 uppercase tracking-widest">
            Contact Us
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Let&apos;s Start Your Journey</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            Tell us your challenge. We&apos;ll bring the expertise, the team, and the technology to solve it.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold text-brand-blue-dark mb-6">Get in Touch</h2>
              <div className="space-y-4 mb-8">
                <a href="tel:+16096069010" className="flex items-center gap-3 text-brand-gray-mid hover:text-brand-blue transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center text-white flex-shrink-0">
                    <Phone size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-mid uppercase tracking-wide">Phone</div>
                    <div className="font-medium">+1 (609) 606-9010</div>
                  </div>
                </a>
                <a href="mailto:contact@compunnel.com" className="flex items-center gap-3 text-brand-gray-mid hover:text-brand-blue transition-colors">
                  <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center text-white flex-shrink-0">
                    <Mail size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-mid uppercase tracking-wide">Email</div>
                    <div className="font-medium">contact@compunnel.com</div>
                  </div>
                </a>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg gradient-blue flex items-center justify-center text-white flex-shrink-0">
                    <Clock size={16} />
                  </div>
                  <div>
                    <div className="text-xs text-brand-gray-mid uppercase tracking-wide">Response Time</div>
                    <div className="font-medium">Within 24 business hours</div>
                  </div>
                </div>
              </div>

              <h3 className="font-semibold text-brand-blue-dark mb-4">Global Offices</h3>
              <div className="space-y-4">
                {OFFICES.map((o) => (
                  <div key={o.city} className="flex items-start gap-3">
                    <MapPin size={16} className="text-brand-red mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-medium text-sm text-brand-blue-dark">{o.city}</div>
                      <div className="text-xs text-brand-gray-mid">{o.address}</div>
                      {o.phone && <div className="text-xs text-brand-gray-mid">{o.phone}</div>}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:col-span-2">
              {submitted ? (
                <div className="card p-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-blue-dark mb-2">Message Sent!</h3>
                  <p className="text-brand-gray-mid">Our team will reach out within 24 business hours. Thank you for choosing Compunnel.</p>
                </div>
              ) : (
                <div className="card p-8">
                  <h2 className="text-2xl font-bold text-brand-blue-dark mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {[
                      { id: 'name', label: 'Full Name *', type: 'text', required: true, colSpan: false },
                      { id: 'email', label: 'Work Email *', type: 'email', required: true, colSpan: false },
                      { id: 'company', label: 'Company *', type: 'text', required: true, colSpan: false },
                      { id: 'phone', label: 'Phone Number', type: 'tel', required: false, colSpan: false },
                    ].map(({ id, label, type, required, colSpan }) => (
                      <div key={id} className={colSpan ? 'md:col-span-2' : ''}>
                        <label className="block text-sm font-medium text-brand-gray-dark mb-1">{label}</label>
                        <input
                          type={type}
                          required={required}
                          value={form[id as keyof typeof form]}
                          onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                          className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                        />
                      </div>
                    ))}

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-brand-gray-dark mb-1">Area of Interest *</label>
                      <select
                        required
                        value={form.interest}
                        onChange={(e) => setForm({ ...form, interest: e.target.value })}
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors"
                      >
                        <option value="">Select an option</option>
                        {INTEREST_OPTIONS.map((o) => <option key={o}>{o}</option>)}
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-brand-gray-dark mb-1">How can we help? *</label>
                      <textarea
                        required
                        rows={4}
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="Tell us about your project, challenge, or question..."
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-brand-blue/20 focus:border-brand-blue transition-colors resize-none"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <p className="text-xs text-brand-gray-mid mb-4">
                        By submitting this form you agree to our{' '}
                        <a href="/privacy" className="text-brand-blue hover:underline">Privacy Policy</a>.
                        We will never sell your information.
                      </p>
                      <button type="submit" className="btn-primary text-base px-8 py-4 w-full md:w-auto justify-center">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
