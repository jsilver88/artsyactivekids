import { Link } from "react-router-dom"
import FAQ from "../components/FAQ"

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1 className="heading-xl">Welcome to Artsy Active Kids</h1>
          <p className="hero-text">
            Where little dreams begin and big imaginations flourish!
          </p>
        </div>
      </section>

      <section className="intro wrapper">
        <p className="p-text">
          At <span className="bold">Artsy Active Kids</span>, we believe that
          every child is a natural-born artist, dancer, and dreamer. Our
          colorful and stimulating environment is designed to nurture your
          child’s curiosity, enhance their sensory experiences, and encourage
          their creative expressions. From the gentle stretches of baby yoga,
          the rhythmic beats of tiny feet in dance, to the imaginative wonders
          of art classes, we provide a safe and joyful space for your little
          ones to explore, learn, and grow.
        </p>
      </section>

      <section className="classes">
        <div className="wrapper">
          <div className="col">
            <h2 className="heading-lg mb-2">Mommy and Me Classes!</h2>
            <p className="p-text">
              Welcome to Mommy and Me a fun and creative circle of women to
              share and explore art, sensory based play and yoga with your
              little one. Each class is designed to engage your little one’s
              development to help stimulate them in a positive way with new
              sounds, creative art and a new movement experience with You!
            </p>
            <br />
            <p className="p-text">
              I use three principals of development when curating classes. No
              class is ever alike! To keep things exciting and most importantly
              encouraging you’re little one to experience new developmentally
              appropriate activities.
            </p>
            <br />
            <p className="p-text">
              Mommy circles currently meet bi- weekly. Sign ups are encouraged a
              week prior to the start of class as classes to fill up fast!
              Donation based pricing to keep things affordable to all.
            </p>
            <Link to="/classes" className="btn">
              Book a class
            </Link>
          </div>
          <div className="col">
            <img
              src="/images/artsncrafts.jpg"
              alt="arts and crafts"
              className="img rounded-img"
            />
          </div>
        </div>
      </section>

      <section className="intro wrapper">
        <h3 className="colored-text">
          Join us on an adventure where colors blend, music soars, and movement
          becomes magic. Let’s help your child paint their first masterpiece,
          dance to their heart’s content, and discover the joy of learning
          through play.
        </h3>
      </section>

      <section className="classes pastel-pink">
        <div className="wrapper">
          <div className="col">
            <img
              src="/images/baby-laughing.jpg"
              alt="arts and crafts"
              className="img rounded-img"
            />
          </div>
          <div className="col">
            <h2 className="heading-lg mb-2">Mommy and Me Yoga!</h2>
            <p className="p-text">
              Our mommy and me yoga group meets bi- weekly on Sundays! These
              classes are held outdoors and are constructed in a way to help you
              relax with also getting a workout in. I also always encourage
              relaxation for your little one with allowing time for you to
              connect to your baby. I offer poses and techniques to help guide
              you when working with your baby and getting them to also get
              movement in!
            </p>
            <br />
            <p className="p-text">
              All classes have an offering of sound healing, mediation guidance
              and, focused time for movement for your little one as well.
            </p>
            <Link to="/classes" className="btn">
              Book a class
            </Link>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  )
}
export default Home
