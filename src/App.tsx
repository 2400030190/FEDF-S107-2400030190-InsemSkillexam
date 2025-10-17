import React, { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Email validation function
  const validateEmail = (value) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regex.test(value)) {
      setEmailError("Invalid email address");
    } else {
      setEmailError("");
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    validateEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  // Check if form is valid
  const isFormValid = email && password && !emailError;

  return (
    <div style={{ margin: "50px" }}>
      <h2>React Form Validation</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label><br />
          <input
            type="text"
            value={email}
            onChange={handleEmailChange}
            style={{ padding: "5px", width: "250px" }}
          />
          <div style={{ color: "red" }}>{emailError}</div>
        </div>
        <div style={{ marginTop: "10px" }}>
          <label>Password:</label><br />
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            style={{ padding: "5px", width: "250px" }}
          />
        </div>
        <button
          type="submit"
          disabled={!isFormValid}
          style={{ marginTop: "20px", padding: "5px 15px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
