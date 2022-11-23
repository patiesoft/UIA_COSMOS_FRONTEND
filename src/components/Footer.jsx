import React from "react";
import "../index.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <>
      <div
        className="footer_container"
        style={{ paddingBottom: "10rem", paddingTop: "5rem" }}
      >
        <div className="footer_part1">
          <h1>For any Suggestion and queries feel free to contact us </h1>
          <input style={{ padding: "0.5rem" }} />
        </div>
        
      </div>
    </>
  );
};
export default Footer;
