'use client';

import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Navbar from './../Components/Navbar';
import Hero from '../Components/Hero';
import Footer from '../Components/Footer';
export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  // e এর টাইপ ঠিক করলাম
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to Admin
      await emailjs.send(
        'service_jwu5o5d', // your EmailJS service ID
        'template_admin', // admin template ID
        formData,
        'ylJxLrn8phBAyNMLq' // public key
      );

      // Send confirmation to User
      await emailjs.send(
        'service_jwu5o5d',
        'template_users', // user template ID
        {
          to_name: formData.name,
          to_email: formData.email,
          message: formData.message,
        },
        'ylJxLrn8phBAyNMLq'
      );

      alert('Message sent successfully! Check your email.');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Error sending message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Hero HeroHeadingText="Contact" />

      <section className="container py-5">
        <h1 className="fw-bold lead">Let’s Grow Together</h1>
        <p className="text-justify">
          Your website is your digital foundation — let’s build it right. At
          NeedSite Zone, we combine creativity, strategy, and technology to help
          you stand out and grow confidently online.
        </p>

        <div className="container bg-secondary-subtle rounded-2">
          <h1 className="text-center pt-4 fw-bold lead text-decoration-underline">
            Contact Form
          </h1>
          <div className="row justify-content-center p-4">
            <div className="col-md-6">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group mb-3">
                  <label>Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="form-control"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary mt-2"
                  disabled={loading}
                >
                  {loading ? (
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
