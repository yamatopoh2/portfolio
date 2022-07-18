import React from "react"
import "./workExperience.css"
import { BsFillPatchCheckFill } from "react-icons/bs"
const WorkExperience = () => {
  return (
    <section id="workexperience">
      <h2>Work Experience</h2>
      <div className="container workexperience__container">
        <div className="workexperience__content">
          <article className="workexperience__details">
            <BsFillPatchCheckFill className="workexperience__details-icon" />
            <div>
              <h4>LUCY</h4>
              <small>2 Years and counting</small>
              <h5>Front-End Web Developer</h5>

              <small className="text-light">
                I handle the changes of the template base on the requested of
                the client or adding new language or create a new template for
                another topic
              </small>
            </div>
          </article>
        </div>
      </div>
      <h5>
        Note: I did not include my past work that not related to Web developing
      </h5>
    </section>
  )
}

export default WorkExperience
