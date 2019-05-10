import { Link } from "gatsby"
import React from "react"
import Logo from "../images/your_logo.png"
import SplitText from "react-pose-text"

class Header extends React.Component {
  render() {
    const charPoses = {
      exit: { opacity: 0, y: 20 },
      enter: {
        opacity: 1,
        y: 0,
        delay: ({ charIndex }) => charIndex * 30,
      },
    }
    return (
      <header id="home">
        <div className="container-fluid">
          {/* change the image in style.css to the class header .container-fluid [approximately row 50] */}
          <div className="container">
            <div className="row">
              <div className="col-md-10 col-xs-10">
                <a href="#" className="thumbnail logo">
                  <img src={Logo} alt="logo" className="img-responsive" />
                </a>
              </div>
              <div className="col-md-2 col-md-offset-8 col-xs-2 text-center">
                <div className="menu-btn">
                  <span className="hamburger">☰</span>
                </div>
              </div>
            </div>
            <div className="jumbotron">
              <h1>
                <small>
                  <SplitText
                    initialPose="exit"
                    pose="enter"
                    charPoses={charPoses}
                  >
                    In the hall of the
                  </SplitText>
                </small>
                <br />
                <strong>
                  <SplitText
                    initialPose="exit"
                    pose="enter"
                    charPoses={charPoses}
                  >
                    Mountain King
                  </SplitText>
                </strong>
              </h1>
              <p>
                This is a simple hero unit, a simple jumbotron-style component
                for
                <br />
                calling extra attention to featured content or information.
              </p>
              <p>
                <a className="btn btn-primary btn-lg" role="button">
                  Learn more
                </a>{" "}
                <a
                  target="_blank"
                  href="http://www.themeinthebox.com/ourtheme/mountain-king-bootstrap-template/"
                  className="btn btn-lg btn-danger"
                  role="button"
                >
                  Download
                </a>
              </p>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
