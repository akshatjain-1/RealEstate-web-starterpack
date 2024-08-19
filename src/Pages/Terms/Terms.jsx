import React from 'react';
import './Terms.css'; // Import the CSS file

const Terms = () => {
    return (
        <div className="terms-page">
            <div className="terms-container">
                <h1>Terms of Service</h1>
                <p>Welcome to our website. By accessing or using our services, you agree to comply with and be bound by the following terms and conditions:</p>
                
                <h2>1. Acceptance of Terms</h2>
                <p>By accessing this website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.</p>
                
                <h2>2. Intellectual Property</h2>
                <p>All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of our company and is protected by intellectual property laws.</p>

                <h2>3. User Conduct</h2>
                <p>When using our services, you agree to abide by the following rules of conduct:</p>
                <ul>
                    <li>Do not engage in any unlawful or fraudulent activities.</li>
                    <li>Do not impersonate any person or entity.</li>
                    <li>Do not harass, threaten, or intimidate others.</li>
                    <li>Do not upload or transmit any harmful or malicious content.</li>
                </ul>

                <h2>4. Privacy Policy</h2>
                <p>We are committed to protecting your privacy. Please review our <a href="/privacy-policy">Privacy Policy</a> to understand how we collect, use, and disclose your personal information.</p>

                <h2>5. Disclaimer</h2>
                <p>The information provided on this website is for general informational purposes only. We make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on the website.</p>

                <h2>6. Limitation of Liability</h2>
                <p>In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of the website or services.</p>

                <h2>7. Governing Law</h2>
                <p>These terms and conditions shall be governed by and construed in accordance with the laws of your jurisdiction.</p>
                
                {/* Add more sections as needed */}
            </div>
        </div>
    );
};

export default Terms;