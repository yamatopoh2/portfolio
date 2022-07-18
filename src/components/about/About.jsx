import React from "react"
import "./about.css"
import ME from "../../assets/me-about.jpg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"
const About = () => {
  return (
    <section id="about">
      <h5>Get to Know!</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>10 Worldwide</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>30+ Completed</small>
            </article>
          </div>
          <p>
            I’m a Front-End Developer located in Philippines. I have a serious
            passion for Wed developing, animations, photo editing and exploring
            new things.
          </p>
          <p>
            Well-organised person, problem solver, independent employee with
            high attention to detail. Fan of those people who are good at
            creating websites, outdoor activities, TV series and travelling.
          </p>
          <p>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
