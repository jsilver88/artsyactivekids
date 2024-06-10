function Classes() {
  paypal
    .HostedButtons({
      hostedButtonId: "7XLUFC2UKPWBW",
    })
    .render("#paypal-container-7XLUFC2UKPWBW")
  return (
    <div className="class">
      <div className="wrapper">
        <div className="col">
          <h2 className="heading-lg">Upcoming Classes</h2>
          <div className="shadow">
            <div className="session">
              <img
                src="/images/714-sensory.jpeg"
                alt=""
                className="class-img"
              />
              <p className="p-text">
                <strong>July 14th:</strong> Sensory Art @ 11AM
              </p>
            </div>
            <p className="mt-2">
              Want to sign up? Fill out our form{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScKWq_WTifQ3_ibvXZnXgC5ONUBlH4GaZylxqE0HTksKCx3Tw/viewform?usp=sf_link"
                target="_blank"
                className="link"
              >
                HERE
              </a>
            </p>
            <p className="mt-2">
              Pay here...
              <a
                href="https://www.paypal.com/ncp/payment/7XLUFC2UKPWBW"
                className="link"
              >
                PayPal or Venmo
              </a>
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
