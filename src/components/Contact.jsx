import React, { useState } from "react";
import { useToast } from "../hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you — I'll get back to you soon.",
    });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section section-contact container">
      <div className="section-head">
        <h2>
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <div className="section-divider" />
        <p className="muted">
          Have a project in mind? Let's work together to build something amazing!
        </p>
      </div>

      <div className="contact-grid">
        {/* Contact Cards (left column) */}
        <div className="contact-left">
          <div className="card contact-card">
            <h4>Email</h4>
            <a href="mailto:202301070175@mtaoe.ac.in" className="muted">
              202301070175@mtaoe.ac.in
            </a>
          </div>

          <div className="card contact-card" style={{ marginTop: 12 }}>
            <h4>GitHub</h4>
            <a
              href="https://github.com/Adi2005-tecgh"
              target="_blank"
              rel="noreferrer"
              className="muted"
            >
              github.com/Adi2005-tecgh
            </a>
          </div>

          <div className="card contact-card" style={{ marginTop: 12 }}>
            <h4>LinkedIn</h4>
            <a
              href="https://linkedin.com/in/yourname"
              target="_blank"
              rel="noreferrer"
              className="muted"
            >
              linkedin.com/in/yourname
            </a>
          </div>
        </div>

        {/* Contact Form (right column) */}
        <div className="card contact-form">
          <form onSubmit={onSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              className="input"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Your name"
            />

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              className="input"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              className="textarea"
              value={form.message}
              onChange={handleChange}
              required
              placeholder="Tell me about your project..."
            />

            <div style={{ marginTop: 12 }}>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
