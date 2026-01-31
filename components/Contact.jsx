'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        const subject = encodeURIComponent(formData.subject || 'Portfolio Contact');
        const body = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
        );
        window.location.href = `mailto:riverma312@gmail.com?subject=${subject}&body=${body}`;
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="contact section">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <p className="contact-intro">
                            I&apos;m currently open to new opportunities and would love to hear from you! Whether you have a question,
                            want to discuss a project, or just want to connect – feel free to reach out.
                        </p>
                        <div className="contact-methods">
                            <a href="mailto:riverma312@gmail.com" className="contact-method">
                                <div className="method-icon"><i className="fas fa-envelope"></i></div>
                                <div className="method-details">
                                    <span className="method-label">Email</span>
                                    <span className="method-value">riverma312@gmail.com</span>
                                </div>
                            </a>
                            <a href="tel:+13153131705" className="contact-method">
                                <div className="method-icon"><i className="fas fa-phone"></i></div>
                                <div className="method-details">
                                    <span className="method-label">Phone</span>
                                    <span className="method-value">+1 (315) 313 1705</span>
                                </div>
                            </a>
                            <div className="contact-method">
                                <div className="method-icon"><i className="fas fa-map-marker-alt"></i></div>
                                <div className="method-details">
                                    <span className="method-label">Location</span>
                                    <span className="method-value">New York, NY (Open to Relocation)</span>
                                </div>
                            </div>
                        </div>
                        <div className="contact-social">
                            <a href="https://www.linkedin.com/in/riteshv7/" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <i className="fab fa-linkedin-in"></i>
                                <span>LinkedIn</span>
                            </a>
                            <a href="https://github.com/riteshv7" target="_blank" rel="noopener noreferrer" className="social-btn">
                                <i className="fab fa-github"></i>
                                <span>GitHub</span>
                            </a>
                        </div>
                    </div>
                    <form className="contact-form glass-card" id="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Your Name"
                                required
                                value={formData.name}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="your@email.com"
                                required
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="subject">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="How can I help you?"
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                placeholder="Your message..."
                                required
                                value={formData.message}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary btn-full">
                            <i className="fas fa-paper-plane"></i> Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
