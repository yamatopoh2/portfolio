import React from "react"
import "./footer.css"
import { FaFacebookF } from "react-icons/fa"
import { FiInstagram } from "react-icons/fi"
import { ImTwitter } from "react-icons/im"
const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        REYMART DELLAVA
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        {/*<li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
  </li>*/}
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.facebook.com/yamatopoh2"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebookF />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          <ImTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; Reymart Dellava Portfolio. All rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
