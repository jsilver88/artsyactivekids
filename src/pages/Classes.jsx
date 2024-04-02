import { Link } from "react-router-dom"

function Classes() {
  return (
    <div className="class">
      <div className="wrapper">
        <div className="col">
          <h2 className="heading-lg">Upcoming Classes</h2>
          <div className="shadow">
            <div className="session">
              <img
                src="/images/mommymeyoga.jpeg"
                alt=""
                className="class-img"
              />
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
            <div className="session">
              <img src="/images/momscircle.jpeg" alt="" className="class-img" />
              <p className="p-text">
                May 13th - June 3rd: 4-Week Sensory Art + Mom's Circle Series @
                11AM
              </p>
            </div>
            <p className="mt-2">
              Want to sign up? Reach out to us directly{" "}
              <Link to="/contact" className="btn">
                Sign Up
              </Link>
            </p>
          </div>
        </div>
        <div className="grid-col col">
          <img
            src="/images/babysensory.jpg"
            alt="mommy and baby doing yoga"
            className="img rounded-img"
          />
          <img
            src="/images/kidsbracelets.jpg"
            alt="moms and babies"
            className="img rounded-img"
          />
          <img
            src="/images/kidsplayingwithbeads.jpg"
            alt="mommy and baby doing yoga"
            className="img rounded-img"
          />

          <img
            src="/images/sensorytoys.jpg"
            alt="baby with soundbowl"
            className="img rounded-img"
          />
        </div>
      </div>
    </div>
  )
}
export default Classes
