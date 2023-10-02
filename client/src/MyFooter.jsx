import React, { useState } from "react";

function MyFooter() {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
        const formData = new URLSearchParams();
        formData.append("email", email);

      const response = await fetch("http://localhost:8080/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: formData.toString(),
      });

      if (response.ok) {
        console.log("Email submitted successfully!");
      } else {
        console.error("Error submitting email.");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const footerStyle = {
    backgroundColor: "rgb(211, 211, 211)",
    fontFamily: "Arial, Helvetica, sans-serif",
    fontWeight: "bold",
    marginTop: "15%",
    padding: "10px",
    textAlign: "center",
  };

  const tealSectionStyle = {
    backgroundColor: "teal",
    display: "flex",
    justifyContent: "space-around",
    color: "black",
    padding: "20px 0",
  };

  const condensedGrid = {
    display: "flex",
    justifyContent: "center",
    color: "black",
    padding: "20px 0",
  };

  const sectionStyle = {
    flex: 1,
    textAlign: "center",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
    display: "block",
    margin: "10px 10px",
  };

  const bigLabel = {
    fontSize: "large"
  };

  return (
    <div>
      <form onSubmit={handleSubmit} style={footerStyle}>
        <label style={bigLabel} htmlFor="email">SIGN UP FOR OUR DAILY INSIDER </label>
        <input
          type="text"
          name="email"
          placeholder="Enter your email"
          value={email} 
          onChange={handleEmailChange}
        />
        <button type="submit" name="submitbut">
          Subscribe
        </button>
      </form>

      <div style={tealSectionStyle}>
        <div style={sectionStyle}>
          <h3>For Dev</h3>
          <a href="/" style={linkStyle}>
            How it works
          </a>
          <a href="/" style={linkStyle}>
            How to create a profile
          </a>
          <a href="/" style={linkStyle}>
            Find Jobs
          </a>
        </div>
        <div style={sectionStyle}>
          <h3>For Clients</h3>
          <a href="/" style={linkStyle}>
            How it works
          </a>
          <a href="/" style={linkStyle}>
            How to post a job
          </a>
          <a href="/" style={linkStyle}>
            Find Dev
          </a>
        </div>
        <div style={sectionStyle}>
          <h3>Stay Connected</h3>
          <div style={condensedGrid}>
          <a href="https://www.facebook.com/" style={linkStyle}>
            Facebook
          </a>
          <a href="https://twitter.com/" style={linkStyle}>
            Twitter
          </a>
          <a href="https://www.instagram.com/" style={linkStyle}>
            Instagram
          </a>
          </div>
        </div>
      </div>
      <div style={{...tealSectionStyle, backgroundColor: "teal"}}>
        <div style={sectionStyle}>
          <h3>DEVLink</h3>
          <div style={condensedGrid}>
          <a href="/" style={linkStyle}>
            Privacy Policy
          </a>
          <a href="/" style={linkStyle}>
            Terms
          </a>
          <a href="/" style={linkStyle}>
            Code of Conduct
          </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyFooter;
