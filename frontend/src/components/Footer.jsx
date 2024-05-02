import React from "react";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <p>CopyRight &copy; {year}</p>
    </footer>
  );
}

export default Footer;
