import React from 'react'
import Hike from '../images/hike.png'
import TakePicture from '../images/camera.png'
import Remember from '../images/remember.png'

const Feature = () => (
		<section id="feat">
        <div className="container">
          <div className="row features">
            <div
              className="col-md-4 text-center wow fadeInUp"
              data-wow-delay="100ms"
            >
            <img src={Hike} alt="hiking" />
              <h4>We Go Backpacking and Camping</h4>
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
              <img src={TakePicture} alt="Taking pictures for keeping memories" />
              <h4>We Make Memories and Take Pictures</h4>
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
              <img src={Remember} alt="And forever be remembered" />
              <h4>Remember Our Great Adventures</h4>
              <p>
                Etiam porta sem malesuada magna mollis euismod. Aenean eu leo
                quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
                Maecenas faucibus mollis interdum.
              </p>
            </div>
          </div>
        </div>
      </section>
	)

export default Feature