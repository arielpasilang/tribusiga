import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import LazyLoad from "react-lazyload"

const IndexPage = () => (
  <Layout>
    <div>
      <section id="feat">
        <div className="container">
          <div className="row features">
            <div
              className="col-md-4 text-center wow fadeInUp"
              data-wow-delay="100ms"
            >
              <span className="typcn typcn-pencil x3" />
              <h4>Consectetur Risus</h4>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Donec id elit non mi porta gravida at eget metus. Nullam id
                dolor id nibh ultricies vehicula ut id elit.
              </p>
            </div>
            <div
              className="col-md-4 text-center wow fadeInUp"
              data-wow-delay="300ms"
            >
              <span className="typcn typcn-camera-outline x3" />
              <h4>Ultricies Aenean</h4>
              <p>
                Cras justo odio, dapibus ac facilisis in, egestas eget quam.
                Integer posuere erat a ante venenatis dapibus posuere velit
                aliquet. Donec ullamcorper nulla non metus auctor fringilla.
              </p>
            </div>
            <div
              className="col-md-4 text-center wow fadeInUp"
              data-wow-delay="500ms"
            >
              <span className="typcn typcn-bookmark x3" />
              <h4>Cras Sollicitudin</h4>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Aenean eu leo
                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Maecenas faucibus mollis interdum.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="number wow fadeInUp"
        data-wow-delay="300ms"
      >
        {/* change the image in style.css to the class .number .container-fluid [approximately row 102] */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 opaline col-md-offset-6">
                <div className="row">
                  <div className="col-md-offset-1 col-md-10">
                    <h3>Ligula Mattis Ornare Ultricies</h3>
                    <h5>Pellentesque Cursus Amet Parturient Etiam</h5>
                    <p>
                      Cras justo odio, dapibus ac facilisis in, egestas eget
                      quam. Donec id elit non mi porta gravida at eget metus.
                      Nullam id dolor id nibh ultricies vehicula ut id elit.
                    </p>
                  </div>
                </div>
                <div className="row text-center">
                  {/* set the numbers in assets/js/scripts.js  */}
                  <div className="col-md-4 boxes col-xs-6 col-xs-offset-3 col-lg-4 col-lg-offset-1 col-md-offset-1 col-sm-6 wow fadeInUp">
                    <h5>Ultricies</h5>
                    <h3 className="odometer 01">00000</h3>
                  </div>
                  <div
                    className="col-md-4 boxes col-xs-6 col-xs-offset-3 col-lg-4 col-lg-offset-2 col-md-offset-2 col-sm-6 wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <h5>Fermentum</h5>
                    <h3 className="odometer 02">00000</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overlay" />
      </section>
      <section id="news" className="blog wow fadeInUp" data-wow-delay="300ms">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
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
              <a className="btn btn-danger btn-lg" href="#">
                Take a Look <i className="fa fa-arrow-circle-o-right" />{" "}
              </a>
            </div>
            <div className="col-md-5">
              <a href="#">
                <LazyLoad>
                  <img
                    src="https://unsplash.it/1200/1200?image=839"
                    alt
                    className="img-responsive"
                  />
                </LazyLoad>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section
        id="history"
        className="story wow fadeInUp"
        data-wow-delay="300ms"
      >
        {/* change the image in style.css to the class .story .container-fluid [approximately row 141] */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 opaline">
                <div className="row">
                  <div className="col-md-10 col-md-offset-1">
                    <p className="lead">
                      <i>
                        Donec sed odio dui. Integer posuere erat a ante
                        venenatis dapibus posuere velit aliquet. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et.
                      </i>
                    </p>
                    <p>
                      <i>
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                        venenatis vestibulum. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio
                        sem nec elit. Aenean eu leo quam. Pellentesque ornare
                        sem lacinia quam venenatis vestibulum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Praesent
                        commodo cursus magna, vel scelerisque nisl consectetur
                        et.
                      </i>
                    </p>
                    <h6 className="lead"> – Fermentum Dapibus</h6>
                    <p>
                      <small>
                        Nibh Etiam Risus Bibendum
                        <br />
                        Nullam id dolor id nibh ultricies vehicula ut id elit.
                      </small>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*
      <section
        id="photos"
        className="gallery wow fadeInUp"
        data-wow-delay="300ms"
      >
        <div className="container">
          <div className="row">
            <div className="masonry image-gallery">
              <div className="grid-sizer" />
              <div className="gutter-sizer" />
              <div className="item item-width2">
                <a href="https://unsplash.it/1000/600?image=529">
                  <img src="https://unsplash.it/600/300?image=529" alt />
                </a>
              </div>
              <div className="item">
                <a href="https://unsplash.it/1000/600?image=523">
                  <img src="https://unsplash.it/320/776?image=523" alt />
                </a>
              </div>
              <div className="item">
                <a href="https://unsplash.it/600/1000?image=503">
                  <img src="https://unsplash.it/500/800?image=503" alt />
                </a>
              </div>
              <div className="item">
                <a href="https://unsplash.it/1000/600?image=505">
                  <img src="https://unsplash.it/400/400?image=505" alt />
                </a>
              </div>
              <div className="item">
                <a href="https://unsplash.it/800/800?image=454">
                  <img src="https://unsplash.it/4403/2476?image=454" alt />
                </a>
              </div>
              <div className="item">
                <a href="https://unsplash.it/800/800?image=515">
                  <img src="https://unsplash.it/585/439?image=515" alt />
                </a>
              </div>
              <div className="item item-width2">
                <a href="https://unsplash.it/1000/600?image=451">
                  <img src="https://unsplash.it/600/140?image=451" alt />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      */}
      <section
        id="contact"
        className="prefooter wow fadeInUp"
        data-wow-delay="300ms"
      >
        {/* change the image in style.css to the class .prefooter .container-fluid [approximately row 154] */}
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <h3>
                  Maecenas sed diam eget risus varius
                  <br /> blandit sit amet non magna.
                </h3>
                <p>
                  Aenean eu leo quam. Pellentesque ornare sem lacinia quam
                  venenatis vestibulum. Cras mattis consectetur purus sit amet
                  fermentum. Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur et. Praesent commodo cursus magna, vel scelerisque
                  nisl consectetur et.
                </p>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Your Email Here..."
                    />
                    <br />
                    <button type="button" className="btn btn-danger">
                      Submit Newsletter
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h3>Your Logo</h3>
              <p>
                © 2016 Your Company. Designed and Developed by{" "}
                <a target="_blank" href="http://www.themeinthebox.com">
                  ThemeintheBox.com
                </a>
              </p>
            </div>
            <div className="col-md-4">
              <p className="text-right social">
                <i className="typcn typcn-social-facebook-circular" />
                <i className="typcn typcn-social-twitter-circular" />
                <i className="typcn typcn-social-tumbler-circular" />
                <i className="typcn typcn-social-github-circular" />
                <i className="typcn typcn-social-dribbble-circular" />
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </Layout>
)

export default IndexPage
