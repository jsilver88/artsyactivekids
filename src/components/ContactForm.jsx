import { useState } from "react"
import emailjs from "@emailjs/browser"
import ReCAPTCHA from "react-google-recaptcha"

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [stateMessage, setStateMessage] = useState(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const recaptchaEmail = (captchaResponse) => {
    return captchaResponse
  }

  const sendEmail = (e) => {
    e.persist()
    e.preventDefault()
    setIsSubmitting(true)

    const serviceId = "service_0yf8voh"
    const templateId = "template_qcmaxyl"
    const publicKey = "DONmek8Stvzkq1RfT"

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Artsy Active Kids",
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey).then(
      (result) => {
        setStateMessage("Message sent!")
        setIsSubmitting(false)
        setName("")
        setEmail("")
        setMessage("")
        recaptchaEmail()
        setTimeout(() => {
          setStateMessage(null)
        }, 3000)
      },
      (error) => {
        setStateMessage("Something went wrong, please try again later")
        console.log(error.text)
        setIsSubmitting(false)
        setTimeout(() => {
          setStateMessage(null)
        }, 3000)
      }
    )
    e.target.reset()
  }

  return (
    <form onSubmit={sendEmail} className="form">
      <div className="form-group">
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Email</label>
        <input
          type="email"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
      <button type="submit" disabled={isSubmitting} className="btn">
        Submit
      </button>
      {stateMessage && <p>{stateMessage}</p>}
    </form>
  )
}
export default ContactForm
