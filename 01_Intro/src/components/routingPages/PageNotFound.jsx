import React from "react";

const PageNotFound = () => {
  const containerStyle = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea, #764ba2)",
    color: "#fff",
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const errorCodeStyle = {
    fontSize: "120px",
    fontWeight: "bold",
    margin: "0",
    letterSpacing: "5px",
  };

  const titleStyle = {
    fontSize: "32px",
    margin: "10px 0",
  };

  const textStyle = {
    fontSize: "18px",
    maxWidth: "500px",
    lineHeight: "1.6",
    opacity: 0.9,
  };

  const buttonStyle = {
    marginTop: "25px",
    padding: "12px 30px",
    fontSize: "16px",
    border: "none",
    borderRadius: "25px",
    cursor: "pointer",
    backgroundColor: "#fff",
    color: "#764ba2",
    fontWeight: "bold",
  };

  return (
    <div style={containerStyle}>
      <h1 style={errorCodeStyle}>404</h1>
      <h2 style={titleStyle}>Page Not Found</h2>
      <p style={textStyle}>
        Oops! The page you’re looking for doesn’t exist or may have been moved.
        Don’t worry — even the best developers hit dead ends sometimes.
      </p>
      <p style={textStyle}>
        Try checking the URL, or click the button below to go back to safety.
      </p>
      <button
        style={buttonStyle}
        onClick={() => window.history.back()}
      >
        Go Back
      </button>
    </div>
  );
};

export default PageNotFound;
