import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      Made with ❣️ by &nbsp;
      <a
        style={{
          textDecoration: "underline",
          cursor: "pointer",
          color: "inherit",
        }}
        href={"mailto:joshi201195@gmail.com"}
        target="_blank"
      >
        Rakesh
      </a>
    </div>
  );
};

export default Footer;
