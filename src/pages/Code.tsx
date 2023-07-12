import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/adam.jpg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function Code() {
  return (
    <div className="profile">
      <h1 className="profile-text">How To Code! - In Progress</h1>
      <h3 className="profile-text">A resource on the stuff I've learned condensed down for you!</h3>
    </div>
  );
}

export default Wrapper(Code);
