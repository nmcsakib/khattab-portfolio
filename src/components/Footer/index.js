import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-logo">🌟 MyLogo</div>
        <nav className="footer-nav">
          <a href="#home" className="footer-link">Home</a>
          <a href="#about" className="footer-link">About Me</a>
          <a href="#contact" className="footer-link">Contact</a>
        </nav>
        <br/>
        <div className="footer-copy">© {new Date().getFullYear()} Khattab. All rights reserved.</div>
      </footer>

      <style>{`
        .footer {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: center;
          padding: 0.5rem 1rem;
          background-color: #222;
          color: #eee;
          font-size: 0.875rem;
          font-family: Arial, sans-serif;
          padding: 30px;
        }

        .footer-logo {
          font-weight: bold;
          font-size: 1.1rem;
        }

        .footer-nav {
          display: flex;
          gap: 1rem;
        }

        .footer-link {
          color: #eee;
          text-decoration: none;
          transition: color 0.2s ease;
        }

        .footer-link:hover {
          color: #1e90ff;
        }

        .footer-copy {
          font-size: 0.75rem;
          color: #aaa;
        }

        @media (max-width: 400px) {
          .footer {
            flex-direction: column;
            text-align: center;
            gap: 0.5rem;
          }

          .footer-nav {
            justify-content: center;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;