import React, { useState } from 'react';
import withSection from '../withSection';
import './Contact.css';

const Contact = ({ isStandalone }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    message: '',
    isError: false,
    isSubmitting: false
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const handleBlur = () => {
    setFocusedField(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ message: '', isError: false, isSubmitting: true });

    // Validate form
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus({
        message: 'Please fill in all required fields',
        isError: true,
        isSubmitting: false
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setFormStatus({
        message: 'Please enter a valid email address',
        isError: true,
        isSubmitting: false
      });
      return;
    }

    try {
      // Here you would typically make an API call to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setFormStatus({
        message: 'Thank you! I will get back to you soon.',
        isError: false,
        isSubmitting: false
      });
      
      // Clear form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setFormStatus({
        message: 'Something went wrong. Please try again later.',
        isError: true,
        isSubmitting: false
      });
    }
  };

  return (
    <section id="contact" className={`contact ${isStandalone ? 'standalone' : ''}`}>
      <div className="contact-container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <div className="info-details">
                <h3>Email</h3>
                <p>
                  <a href="mailto:prahladpallav147@gmail.com">
                    prahladpallav147@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div className="info-details">
                <h3>Location</h3>
                <p>Bangalore, Karnataka, India</p>
              </div>
            </div>
            
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div className="info-details">
                <h3>Phone</h3>
                <p>
                   <a href="tel:+918826626035">
                    +91 8826626035
                  </a>
                </p>
              </div>
            </div>
            
            <div className="social-links">
              <a 
                href="https://github.com/prahlad-pallav" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/prahladpallav/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="https://twitter.com/prahlad_pallav" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter Profile"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a 
                href="https://instagram.com/prahlad.pallav" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram Profile"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <div className={`form-field ${focusedField === 'name' ? 'focused' : ''}`}>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="name">Your Name</label>
                <div className="field-border"></div>
              </div>

              <div className={`form-field ${focusedField === 'email' ? 'focused' : ''}`}>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={handleBlur}
                  required
                />
                <label htmlFor="email">Your Email</label>
                <div className="field-border"></div>
              </div>
            </div>

            <div className={`form-field ${focusedField === 'subject' ? 'focused' : ''}`}>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                onFocus={() => handleFocus('subject')}
                onBlur={handleBlur}
              />
              <label htmlFor="subject">Subject</label>
              <div className="field-border"></div>
            </div>

            <div className={`form-field ${focusedField === 'message' ? 'focused' : ''}`}>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={handleBlur}
                required
                rows="5"
              ></textarea>
              <label htmlFor="message">Your Message</label>
              <div className="field-border"></div>
            </div>

            <button 
              type="submit" 
              className={`submit-button ${formStatus.isSubmitting ? 'submitting' : ''}`}
              disabled={formStatus.isSubmitting}
            >
              {formStatus.isSubmitting ? (
                <div className="button-content">
                  <span className="spinner"></span>
                  <span>Sending...</span>
                </div>
              ) : (
                <div className="button-content">
                  <span>Send Message</span>
                  <i className="fas fa-paper-plane"></i>
                </div>
              )}
            </button>

            {formStatus.message && (
              <div className={`form-message ${formStatus.isError ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default withSection(Contact, 'contact'); 