import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validate = () => {
        let formErrors = {};
        if (!formData.name) formErrors.name = 'Name is required';
        if (!formData.email) {
            formErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }
        if (!formData.message) formErrors.message = 'Message is required';
        return formErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validate();
        if (Object.keys(formErrors).length === 0) {
            // Submit form (e.g., send data to server)
            console.log('Form submitted:', formData);
        } else {
            setErrors(formErrors);
        }
    };

    return (
        <div className="contact-us-page">
            <header className="header">
                <h1>Contact Us</h1>
            </header>
            <main className="main-content">
                <section className="contact-form-section">
                    <h2>Get in Touch</h2>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            {errors.name && <span className="error">{errors.name}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                            {errors.message && <span className="error">{errors.message}</span>}
                        </div>
                        <button type="submit" className="submit-button">Send Message</button>
                    </form>
                </section>
                <section className="contact-info-section">
                    <h2>Contact Information</h2>
                    <p>Email: contact@justshop.co.in / info@justshop.co.in</p>
                    <p>Phone: 7892966366 </p>
                    <p>Address: Plot No.6, Near Swathi Restraunt, Rajajinagar, Bengaluru </p>
                </section>
            </main>
            <footer className="footer">
                <p>&copy; 2024 JUST SHOP. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default ContactUs;