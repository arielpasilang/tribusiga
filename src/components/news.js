import React from "react"
import LazyLoad from "react-lazyload"
import G2 from "../images/g2.jpg"
import { Link } from "gatsby"

const News = () => (
  <section id="news" className="blog wow fadeInUp" data-wow-delay="300ms">
    <div className="container">
      <div className="row">
        <div className="col-md-7">
          <h2>Major Climbs: </h2>
          <h3>2017</h3>
          <h6>
            Mount Talinis, Negros Oriental{" "}
            <i style={{ fontSize: "14px" }}>
              (Cuernos de Negros(Horns of Negros)
            </i>
          </h6>
          <small>April 12-15, 2017</small>
          <p>
            <i>
              "In every mountain we climb, we create wonderful memories, meets
              awesome friends and tell a thousand stories to tell"
            </i>
          </p>
          <h6>
            Mount Mandalagan, Negros Occidental{" "}
            <i style={{ fontSize: "14px" }}>
              (Crown Jewel of the Northern Negros)
            </i>
          </h6>
          <small>September 1-3 2017</small>
          <p>
            <i>
              "Every step in the mountain brings happiness and contentment to
              your soul" (Mt. Mandalagan, September 1-3 2017)
            </i>
          </p>
          <Link className="btn btn-danger btn-lg" to="/">
            See Our Upcoming Major Climb{" "}
            <i className="fa fa-arrow-circle-o-right" />{" "}
          </Link>
        </div>
        <div className="col-md-5" style={{ textAlign: "center" }}>
          <LazyLoad>
            <img
              src={G2}
              alt="Our G2 peak moment"
              className="img-responsive img-fluid"
            />
          </LazyLoad>
          <small>
            Tribu Siga successfully summitted Mt. Guiting2x, Rombom. Said to be
            one of the hardest mountain to climb along with Mt. Halcon in the
            Philippines.
          </small>
        </div>
      </div>
    </div>
  </section>
)

export default News
