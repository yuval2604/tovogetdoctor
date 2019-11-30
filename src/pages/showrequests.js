import React, { useState } from "react";
import Countdown from "react-countdown-now";
import TimeKeeper from "react-timekeeper";
import "./clockcss.css";

class showReq extends React.Component {
  state = {
    time: "12:00"
  };
  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }
  YourComponent() {
    // const [time, setTime] = useState(false);
    return (
      <div>
        <TimeKeeper
          time={this.state.time}
          switchToMinuteOnHourSelect
          onChange={newTime => this.setState({ time: newTime["formatted24"] })}
        />
        <p>The time is :{this.state.time}</p>
        <button
          type="submit"
          className="btn btn-custom theme-color theme-color"
          style={{}}
        >
          submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div>
        {/*home section*/}
        <section className="authentication-form coming-soon">
          <div className="innerpage-decor">
            <div className="innerpage-circle1">
              <img src="assets/images/Testimonial2.png" alt="" />
            </div>
            <div className="innerpage-circle2">
              <img src="assets/images/Testimonial1.png" alt="" />
            </div>
          </div>

          <div className="container">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="fadeInLeft-land-caption text-center">
                    <div className="col-md-12 col-md-8">
                      <div className="review-box">
                        <div className="review-message">
                          <p>hello</p>
                          {this.YourComponent()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="fadeInLeft-land-caption text-center">
                    <div className="col-md-12 col-md-8">
                      <div className="review-box">
                        <div className="review-message">
                          <p>hello</p>
                          {this.YourComponent()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-12 ">
                  <div className="fadeInLeft-land-caption text-center">
                    <div className="col-md-12 col-md-8">
                      <div className="review-box">
                        <div className="review-message">
                          <p>hello</p>
                          {this.YourComponent()}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*home section end*/}
      </div>
    );
  }
}

export default showReq;
