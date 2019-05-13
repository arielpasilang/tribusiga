import React from 'react'
import LazyLoad from "react-lazyload"
import G2 from "../images/g2.jpg"
import { Link } from 'gatsby'

const News = () => (
		<section id="news" className="blog wow fadeInUp" data-wow-delay="300ms">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>Why you should join with us?</h2>
              <p>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
                eget lacinia odio sem nec elit. Maecenas sed diam eget risus
                varius blandit sit amet non magna. Donec sed odio dui. Curabitur
                blandit tempus porttitor. Nullam id dolor id nibh ultricies
                vehicula ut id elit. Etiam porta sem malesuada magna mollis
                euismod.
              </p>
              <p>
                Donec id elit non mi porta gravida at eget metus. Donec id elit
                non mi porta gravida at eget metus. Integer posuere erat a ante
                venenatis dapibus posuere velit aliquet. Fusce dapibus, tellus
                ac cursus commodo, tortor mauris condimentum nibh, ut fermentum
                massa justo sit amet risus. Cras justo odio, dapibus ac
                facilisis in, egestas eget quam. Nulla vitae elit libero, a
                pharetra augue.
              </p>
              <Link className="btn btn-danger btn-lg" to="/">
                See Our Upcoming Major Climb <i className="fa fa-arrow-circle-o-right" />{" "}
              </Link>
            </div>
            <div className="col-md-5" style={{textAlign:"center"}}>
                <LazyLoad>
                  <img
                    src={G2}
                    alt="Our G2 peak moment"
                    className="img-responsive img-fluid"
                  />
                </LazyLoad>
                <small>Tribu Siga successfully summitted Mt. Guiting2x, Rombom. Said to be one of the hardest mountain to climb along with Mt. Halcon in the Philippines.</small>
            </div>
          </div>
        </div>
      </section>
	)

export default News