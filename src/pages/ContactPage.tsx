import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, CheckCircle, Send, Clock, ShieldCheck, Heart } from 'lucide-react';
import { SITE_METADATA } from '../data/siteData';

interface ContactPageProps {
  initialInquiry?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialInquiry = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: 'Clinical Music Therapy Contract',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    if (initialInquiry) {
      setFormData((prev) => ({
        ...prev,
        message: initialInquiry
      }));
    }
  }, [initialInquiry]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) errs.message = 'Please provide details about your inquiry';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  return (
    <div className="space-y-16 lg:space-y-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      {/* Header */}
      <div className="max-w-3xl space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#5E4E8C]">
          <span className="px-2.5 py-0.5 rounded-full bg-[#F5F3F9] border border-[#E8E5F0]">
            Get In Touch
          </span>
          <span aria-hidden="true">·</span>
          <span>Southern & Central New Brunswick</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-[#1E1B2E] leading-tight text-balance">
          Let’s Connect
        </h1>
        <p className="text-lg text-[#4A475A] leading-relaxed">
          Please contact us for more information on our clinical services, consultations, free information sessions, or internship supervision.
        </p>
      </div>

      {/* Main Grid: Direct Contact Details & Interactive Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left Column: Authentic Contact Info Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl border border-[#E8E5F0] p-8 shadow-sm space-y-6">
            <h3 className="text-xl font-bold text-[#1E1B2E]">
              Direct Contact Details
            </h3>

            <div className="space-y-4 text-xs">
              {/* Phone */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF9FC] border border-[#E8E5F0]">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5F0] flex items-center justify-center text-[#5E4E8C] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-0.5">
                    Phone & Confidential Voicemail
                  </span>
                  <a
                    href={`tel:${SITE_METADATA.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-sm font-bold text-[#1E1B2E] hover:text-[#5E4E8C] transition-colors"
                  >
                    {SITE_METADATA.phone}
                  </a>
                  <p className="text-[11px] text-[#64748B] mt-0.5">
                    Leave a confidential voicemail anytime; our team returns calls promptly.
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF9FC] border border-[#E8E5F0]">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5F0] flex items-center justify-center text-[#2E8CB8] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-0.5">
                    Direct Email Inquiries
                  </span>
                  <a
                    href={`mailto:${SITE_METADATA.email}`}
                    className="text-sm font-bold text-[#1E1B2E] hover:text-[#2E8CB8] transition-colors break-all"
                  >
                    {SITE_METADATA.email}
                  </a>
                  <p className="text-[11px] text-[#64748B] mt-0.5">
                    Direct correspondence with Founder & Director Elizabeth Eldridge.
                  </p>
                </div>
              </div>

              {/* Service Regions */}
              <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-[#FAF9FC] border border-[#E8E5F0]">
                <div className="w-9 h-9 rounded-xl bg-white border border-[#E8E5F0] flex items-center justify-center text-[#4E9A68] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[10px] uppercase font-bold text-[#64748B] block mb-0.5">
                    Practice Base & Coverage Areas
                  </span>
                  <span className="text-sm font-bold text-[#1E1B2E] block">
                    Origin: St. George, Charlotte County, NB
                  </span>
                  <ul className="text-[11px] text-[#64748B] mt-1 space-y-0.5">
                    <li>• Saint John Regional Hospital & Greater Saint John Area</li>
                    <li>• Fredericton & Capital Region Facilities</li>
                    <li>• Charlotte County Communities</li>
                    <li>• Virtual / Regional Consultation Across NB</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-[#F0EDF5] flex items-center gap-2 text-xs text-[#64748B]">
              <ShieldCheck className="w-4 h-4 text-[#4E9A68] shrink-0" />
              <span>Strict compliance with healthcare client privacy & confidentiality.</span>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-[#E8E5F0] p-8 lg:p-10 shadow-sm">
            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EDF8F1] border border-emerald-200 text-[#4E9A68] mx-auto flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-[#1E1B2E]">
                  Your Message Was Sent Successfully!
                </h3>
                <p className="text-sm text-[#4A475A] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to Arpeggio Music Therapy. Elizabeth Eldridge and our clinical team will review your inquiry and follow up with you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      phone: '',
                      organization: '',
                      inquiryType: 'Clinical Music Therapy Contract',
                      message: ''
                    });
                  }}
                  className="mt-4 px-6 py-2.5 rounded-lg text-xs font-semibold text-[#5E4E8C] bg-[#F5F3F9] hover:bg-[#E8E5F0] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-xl font-bold text-[#1E1B2E]">
                    Send a Message or Consultation Request
                  </h3>
                  <p className="text-xs text-[#64748B] mt-1">
                    Fill out the form below and we will get back to you with scheduling, pricing, or application details.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B2E] mb-1">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Sarah Mitchell"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#1E1B2E] focus:outline-none transition-colors ${
                        errors.name ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5F0] focus:border-[#5E4E8C]'
                      }`}
                    />
                    {errors.name && <span className="text-[11px] text-red-500 mt-1 block">{errors.name}</span>}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B2E] mb-1">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. smitchell@facility.ca"
                      className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#1E1B2E] focus:outline-none transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5F0] focus:border-[#5E4E8C]'
                      }`}
                    />
                    {errors.email && <span className="text-[11px] text-red-500 mt-1 block">{errors.email}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B2E] mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (506) 555-0192"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5F0] text-xs text-[#1E1B2E] focus:outline-none focus:border-[#5E4E8C]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#1E1B2E] mb-1">
                      Facility / Organization Name (If applicable)
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="e.g. Parkland in the Valley"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5F0] text-xs text-[#1E1B2E] focus:outline-none focus:border-[#5E4E8C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E1B2E] mb-1">
                    Inquiry Type
                  </label>
                  <select
                    value={formData.inquiryType}
                    onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#E8E5F0] text-xs text-[#1E1B2E] bg-white focus:outline-none focus:border-[#5E4E8C]"
                  >
                    <option value="Clinical Music Therapy Contract">Clinical Music Therapy Contract (from 2h/wk)</option>
                    <option value="Free Music Therapy Info Session">Free Facility Music Therapy Information Session</option>
                    <option value="Consultation & Program Development">Consultation & Program Development</option>
                    <option value="1,000-Hour Clinical Internship">1,000-Hour Clinical Internship Application</option>
                    <option value="Private Individual Client Services">Private Individual / Bedside Client Services</option>
                    <option value="General Question or Media Inquiry">General Question or Keynote Speaking</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1E1B2E] mb-1">
                    Your Message / Program Requirements <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the client populations, facility goals, preferred days or hours, or questions you have..."
                    className={`w-full px-3.5 py-2.5 rounded-xl border text-xs text-[#1E1B2E] focus:outline-none transition-colors ${
                      errors.message ? 'border-red-400 bg-red-50/20' : 'border-[#E8E5F0] focus:border-[#5E4E8C]'
                    }`}
                  />
                  {errors.message && <span className="text-[11px] text-red-500 mt-1 block">{errors.message}</span>}
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl text-xs font-bold text-white bg-[#5E4E8C] hover:bg-[#4B3E72] shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Inquiry to Arpeggio</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
