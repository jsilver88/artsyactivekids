import { useState } from "react"
import { FaAngleDown, FaCaretDown } from "react-icons/fa6"

function Accordion({ faqs }) {
  const [activeIndex, setActiveIndex] = useState(null)

  const handleItemClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index)
  }

  return (
    <div className="accordion">
      {faqs.map((faq, index) => (
        <div key={index} className="accordion-question">
          <button
            onClick={() => handleItemClick(index)}
            style={{ width: "100%" }}
            className="question"
          >
            {faq.question}
            <FaAngleDown />
          </button>
          <div className="accordion-answer">
            {activeIndex === index && <p className="p-text">{faq.answer}</p>}
          </div>
        </div>
      ))}
    </div>
  )
}
export default Accordion
