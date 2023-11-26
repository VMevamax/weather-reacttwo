import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer>
      <p>
        <a
          className="credit-link"
          href="https://github.com/lisacandemyr/react-weather-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by <strong>VM</strong> hosted on{" "}
        <a
          className="credit-link"
          href="https://unrivaled-pudding-6b28d9.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Netlify
        </a>
      </p>
    </footer>
  );
}
