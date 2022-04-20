import React from "react";
import '../styles/NotFound.scss'
const NotFound = () => {
  return (
    <div className="not-found">
      <div className="not-found-container">
        <h1 className="message-404">404</h1>
        <h1 className="title">Oopss!</h1>
        <h2>Page not found</h2>
        <button className="primary-button back-to-home-button">Back to home</button>
      </div>
    </div>
  );
};

export default NotFound;
