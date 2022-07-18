import React, { useRef } from "react"
import "./contact.css"
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
//import { BsWhatsapp } from "react-icons/bs"
import emailjs from "emailjs-com"

const Contact = () => {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm(
      "service_45saeyc",
      "template_0atixm9",
      form.current,
      "PR5sL2VPVeMVFspvp"
    )

    e.target.reset()
    alert("your message was sent successfully")
  }
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>reymartdellava30@gmail.com</h5>
            <a href="mailto:reymartdellava30@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <h5>Rey M art</h5>
            <a href="https://m.me/yamatopoh2" target="_blank" rel="noreferrer">
              Send a message
            </a>
          </article>
          {/*<article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+1234556789</h5>
            <a
              href="https://api.whatsapp.com/send?phone+0912345678"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
  </article>*/}
        </div>
        {/* ---END OF CONTACT OPTION ---*/}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="" placeholder="Your Full name" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
