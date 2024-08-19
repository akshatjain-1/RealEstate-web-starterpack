import React, { useState } from 'react';
import Footer from '../../components/Footer/Footer';
import './PrivacyPolicy.css'; // Import the CSS file

const PrivacyPolicy = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`privacy-page ${theme}`}>
      <div className="header">
        <button className="theme-toggle" onClick={toggleTheme}>
          Toggle to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>
      <div className="content">
        <div className={`card ${theme}`}>
          <h1>Privacy Policy</h1>
        </div>
        <div className={`card ${theme}`}>
          <p>1. Introduction
At JUST SHOP, your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your information when you visit our website [www.justshop.com].</p>

<p>2. Information We Collect
Personal Information: Name, email, address, payment details when you make a purchase or contact us.
Browsing Data: IP address, browser type, and pages visited. We use cookies to enhance your experience.</p>
<p></p>3. How We Use Your Information
Order Processing: To fulfill your orders.
Customer Support: To respond to your inquiries.
Marketing: To send you promotional emails (you can opt out anytime).
Site Improvement: To improve our website and services.
<p></p>4. Sharing Your Information
We do not sell your data. We may share it with trusted service providers (e.g., payment processors) or as required by law.

<p></p>5. Data Security
We use secure measures to protect your data, though no online method is 100% secure.

<p></p>6. Your Choices
Access and Update: You can request access to or update your personal information.
Opt-Out: Unsubscribe from marketing emails at any time.
<p></p>7. Cookies
We use cookies to enhance your browsing experience. You can disable cookies in your browser settings.

<p></p>8. Changes to This Policy
We may update this Privacy Policy. Changes will be posted on this page with an updated date.

<p>9. Contact Us
For questions or concerns, contact us at:
<br/>

<br></br>JUST SHOP
<br/>
<br></br>Email: justshop4568@gmail.com
<br></br>Phone: 8011001813/9844174505</p>
          {/* Add more content as needed */}
        </div>
      </div>
   
    </div>
  );
};

export default PrivacyPolicy;