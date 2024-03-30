import { Form } from "react-router-dom"
import ContactForm from "../components/ContactForm"
import { IoIosPhonePortrait } from "react-icons/io"
import { AiTwotoneMail } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa6"

function Contact() {
  return (
    <div className="contact wrapper">
      <h2 className="heading-lg">Get In Touch With Us For Inquiries!</h2>
      <p className="p-text">Fill out our form below for more info.</p>
      <div className="contact-row">
        <div className="col">
          <ContactForm />
        </div>
        <div className="col">
          <p className="p-text">Or reach out directly</p>
          <div className="contacts">
            <IoIosPhonePortrait style={{ color: "#5cb9d9" }} size={35} />
            <a href="tel:8182742533" className="contact-link">
              (818) 274-2533
            </a>
          </div>
          <div className="contacts">
            <AiTwotoneMail style={{ color: "#5cb9d9" }} size={30} />
            <a href="mailto:artsyactivekids@gmail.com" className="contact-link">
              artsyactivekids@gmail.com
            </a>
          </div>
          <div className="contacts">
            <FaInstagram style={{ color: "#5cb9d9" }} size={30} />
            <a
              href="https://instagram.com/artsyactivekids"
              target="_blank"
              className="contact-link"
            >
              @artsyactivekids
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Contact
