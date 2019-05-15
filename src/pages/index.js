import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
// import Image from "../components/image"
import Featured from "../components/feature"
import About from "../components/about"
import News from "../components/news"
import History from "../components/history"
import Contact from "../components/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Featured />
    <About />
    <News />
    <History />
    <Contact />
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
  </Layout>
)

export default IndexPage
