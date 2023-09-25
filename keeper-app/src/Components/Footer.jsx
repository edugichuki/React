import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>
        &copy; <span>{currentYear}</span> Keeper App
      </p>
    </footer>
  );
}

export default Footer;
