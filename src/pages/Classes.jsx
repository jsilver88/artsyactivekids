import { Link } from "react-router-dom"

function Classes() {
  return (
    <div className="class wrapper">
      <div className="col">
        <h2 className="heading-lg">Upcoming Classes</h2>
        <div className="session">
          <img src="/images/mommymeyoga.jpeg" alt="" className="class-img" />
          <p className="p-text">
            <strong>April 14th:</strong> Mommy + Me Yoga @ 10:30AM
          </p>
        </div>
        <div className="session">
          <img src="/images/428-sensory.jpg" alt="" className="class-img" />
          <p className="p-text">
            <strong>April 28th:</strong> Sensory Art Play @ 11AM
          </p>
        </div>
        <p className="mt-2">
          Want to sign up? Reach out to us directly{" "}
          <Link to="/contact" className="link">
            here
          </Link>
        </p>
      </div>
      <div className="grid-col col">
        <img
          src="/images/babysensory.jpg"
          alt="mommy and baby doing yoga"
          className="rounded-img"
        />
        <img
          src="/images/kidsbracelets.jpg"
          alt="moms and babies"
          className="rounded-img"
        />
        <img
          src="/images/kidsplayingwithbeads.jpg"
          alt="mommy and baby doing yoga"
          className="rounded-img"
        />

        <img
          src="/images/sensorytoys.jpg"
          alt="baby with soundbowl"
          className="rounded-img"
        />
      </div>
    </div>
  )
}
export default Classes