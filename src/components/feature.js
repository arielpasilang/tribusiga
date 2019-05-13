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
                Isn't it fulfilling and fun for having an opportunity to hike the forest, 
                open trails, and seeing different kinds of living creatures? 
                To reach the mountain highs, spending nights under the stars and 
                to wake up witnessing the sunrise over the horizon?
              </p>
            </div>
            <div
              className="col-md-4 text-center wow fadeInUp"
              data-wow-delay="300ms"
            >
              <img src={TakePicture} alt="Taking pictures for keeping memories" />
              <h4>To Make Memories and Take Pictures</h4>
              <p>The best part of backpacking in the mountains is struggling and having fun together. 
              Sure, we get tired and starved but that what makes our memories the best for we conquered 
              the mountain together. One Goal, One Team. Let be the pictures be evidence of our once great 
              moment of adventures. 
              </p>
            </div>
            <div
              className="col-md-4 text-center wow fadeInUp"
              data-wow-delay="500ms"
            >
              <img src={Remember} alt="And forever be remembered" />
              <h4>To Remember Our Great Adventures</h4>
              <p>
                We know, but the truth is... Time will pass by. Sooner or later, we won't have time anymore to spend time in the mountains together. Some may move to other places, some will get married or get busy with their careers. But one thing is for sure, our adventures together will continue to live until the last second of our time. :)
              </p>
            </div>
          </div>
        </div>
      </section>
	)

export default Feature