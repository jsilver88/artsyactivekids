import Accordion from "./Accordion"

const faqs = [
  {
    question: "Why is sensory art so important to your child's development?",
    answer:
      "Sensory art play engages the imagination and stimulates creativity through various sensory experiences. By incorporating different textures, colors, and materials into art activities, your little one can explore their senses in a fun and interactive way. From squishing paint between their fingers to feeling the rough texture of paper, sensory art play encourages self-expression and discovery. Whether you're a child exploring art for the first time or an adult looking to unwind and tap into your inner artist, sensory art play offers a unique and engaging way to connect with your creativity. So, let your senses guide you as you dive into the wonderful world of sensory art play!",
  },
  {
    question: "How long is each class?",
    answer:
      "Classes are designed to be anywhere from 45mins to 1 hour. We go for as long as your child will allow generally based on temperament of your little one.",
  },
  {
    question: "How can I pay for class?",
    answer:
      "Classes are donation based by Venmo at this time. Allowing them to be affordable to you and your family. We do suggest a donation price of anywhere from 20-25 however, it’s a donation so offer what is comfortable to you at the time.",
  },
  {
    question: "How can I sign up?",
    answer:
      "Feel free to email us at artsyactivekids@gmail.com to confirm your reservation.",
  },
  {
    question: "Do you offer mobile classes at birthday parties?",
    answer:
      "Yes!!!! We love playing outside of the studio. We would love to help celebrate your next event. We do ask for a month lead time to get all things in order for your special day.  Feel free to email us and we’ll get to planning!",
  },
  {
    question: "Are all classes outside?",
    answer:
      "We encourage our art based studio to be outdoors. So do wear sunscreen, bring water whatever you need to make you and your little one comfortable.  Of course, if weather isn’t permitting we will be indoors.",
  },
]

function Faq() {
  return (
    <section className="faq wrapper">
      <h2 className="heading-lg">FAQs</h2>
      <Accordion faqs={faqs} />
    </section>
  )
}
export default Faq
