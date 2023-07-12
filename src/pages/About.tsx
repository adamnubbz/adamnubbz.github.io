import React from "react";
import Wrapper from "../sections/Wrapper";
import avatarImage from "../assets/adam_profile.jpg";
import { FaYoutube, FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="profile about">
      <div className="about-header">
        <h1 className="profile-text">About Me</h1>
        <h2 className="profile-text">
          My name's Adam Hudson, welcome to my site!
        </h2>
      </div>
      <div className="personal-info">
        <div className="bio">
          <p className="profile-text">
            I'm a Full-Stack Engineer from Des Moines, Iowa with a love of
            animation, coding, games, and learning. I graduated from Grinnell
            College in 2017 with B.A.'s in Economics and Computer Science. In
            the following September, I joined Principal Financial Group as a
            Software Engineer I in RIS (Retirement & Income Solutions).
          </p>
          <p className="profile-text">
            'Learning is a lifelong journey' is perenially true, but I found it
            incredibly relevant at my first job out of school. Though I was
            figuring out how to pedal as I biked, I had plenty of great senior
            devs and mentors that helped me out! During my tenure at Principal,
            I grew to Software Engineer II as well as Scrum Lead. I decided to
            leave in 2021 as the COVID-19 pandemic continued to take its toll.
          </p>
          <p className="profile-text">
            I've spent the time since caring for family and as a coding
            sabattical. Now that I've had an opportunity to explore parts
            unknown of the coding map and truly understand different tech stacks
            (Hi, Spring), I've discovered a whole new passion (and confidence)
            for coding! Now I'm excited once more for the chance to think, code,
            and create!
          </p>
        </div>
        <div className="personal-media">
          <img src={avatarImage} alt="" className="profile-image" />
          <div className="profile-links">
            <a href="https://github.com/adamnubbz" target="_blank">
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/adam-hudson-340aa6249/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper(About);
