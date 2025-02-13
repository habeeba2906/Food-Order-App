import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import XIcon from '@mui/icons-material/X';
import React from "react";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <XIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p> &copy; 2021 IndianFood.com</p>
    </div>
  );
}

export default Footer;
