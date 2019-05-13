import { Link } from "gatsby"
import React from "react"
import Logo from "../images/your_logo.png"
import SplitText from "react-pose-text"
import Sidebar from 'react-sidebar'
import SidebarNav from '../components/sidebar'

class Header extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }
 
  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }
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
              <div className="col-md-10 col-6">
                <Link to="/" className="thumbnail logo">
                  <img src={Logo} alt="logo" className="img-responsive" />
                </Link>
              </div>
              <div className="col-md-2 col-6 text-center">
                <div className="menu-btn">
                  <span className="hamburger" onClick={() => this.onSetSidebarOpen(true)}>☰</span>
                </div>
              </div>
            </div>
            <div className="jumbotron">
              <h1>
                <small>
                    In the hall of the
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
                "In every mountain we climb, we create wonderful memories, meets awesome friends and a thousand stories to tell"
                <br />
                Tribu Siga Mountaineers (Mt. Talinis April 12-15, 2017)
              </p>
            </div>
          </div>
        </div>
        <Sidebar
        sidebar={<SidebarNav />}
        open={this.state.sidebarOpen}
        onSetOpen={this.onSetSidebarOpen}
       sidebarId="sidebarID"
      />
      </header>
    )
  }
}

export default Header
