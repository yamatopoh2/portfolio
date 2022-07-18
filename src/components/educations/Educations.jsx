import React from "react"
import "./educations.css"
import { FaSchool } from "react-icons/fa"
import { FaBook } from "react-icons/fa"
import { ImLocation2 } from "react-icons/im"

const Educations = () => {
  return (
    <section id="educations">
      <h2>Educational Attainment</h2>
      <div className="container educationsC__container">
        <article className="educations">
          <div className="educations__head">
            <h3>PRIMARY</h3>
          </div>
          <ul className="educations__list">
            <li>
              <FaSchool className="educations__list-icon" />
              <p>North I Elementary School</p>
            </li>

            <li>
              <FaBook className="educations__list-icon" />
              <p>Elementary School</p>
            </li>

            <li>
              <ImLocation2 className="educations__list-icon" />
              <p>Brgy. Barcelona, Lucena City</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}

        <article className="educations">
          <div className="educations__head">
            <h3>SECONDARY</h3>
          </div>
          <ul className="educations__list">
            <li>
              <FaSchool className="educations__list-icon" />
              <p>Sanfrancisco National High School</p>
            </li>

            <li>
              <FaBook className="educations__list-icon" />
              <p>High School</p>
            </li>

            <li>
              <ImLocation2 className="educations__list-icon" />
              <p>Sanfrancisco Quezon</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}

        <article className="educations">
          <div className="educations__head">
            <h3>TERTIARY</h3>
          </div>
          <ul className="educations__list">
            <li>
              <FaSchool className="educations__list-icon" />
              <p>Datamex Institute of Computer Technology</p>
            </li>

            <li>
              <FaBook className="educations__list-icon" />
              <p>BS-IT</p>
            </li>

            <li>
              <ImLocation2 className="educations__list-icon" />
              <p>Lucena City</p>
            </li>
          </ul>
        </article>
        {/* END OF Content Creation */}
      </div>
    </section>
  )
}

export default Educations
