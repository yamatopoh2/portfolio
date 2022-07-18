import React from "react"
import { BsLinkedin } from "react-icons/bs"
import { AiFillGithub } from "react-icons/ai"
import { AiFillDribbbleCircle } from "react-icons/ai"
const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/reymart-dellava-a10623242/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://github.com/yamatopoh2" target="_blank" rel="noreferrer">
        <AiFillGithub />
      </a>
      <a
        href="https://dribbble.com/yamatopoh2"
        target="_blank"
        rel="noreferrer"
      >
        <AiFillDribbbleCircle />
      </a>
    </div>
  )
}

export default HeaderSocials
