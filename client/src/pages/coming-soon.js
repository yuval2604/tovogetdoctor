import React from 'react';
import Countdown from "react-countdown-now";

class ComingSoon extends React.Component {
    componentDidMount() {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
    }
  render() {
	
    // Random component
    const Completionist = () => <span>You are good to go!</span>;

    // Renderer callback with condition
    const renderer = ({
      total,
      days,
      hours,
      minutes,
      seconds,
      milliseconds,
      completed
    }) => {
      if (completed) {
        // Render a complete state
        return <Completionist />;
      } else {
        // Render a countdown
        return (
            <ul className="p-0 m-0">
                <li><span id="days">{days}</span>days</li>
                <li><span id="hours">{hours}</span>Hours</li>
                <li><span id="minutes">{minutes}</span>Minutes</li>
                <li><span id="seconds">{seconds}</span>Seconds</li>
            </ul>
        );
      }
    };
     
  	return (
  		<div>
        {/*home section*/}
        <section className="authentication-form coming-soon">
            <div className="innerpage-decor">
                <div className="innerpage-circle1"><img src="assets/images/Testimonial2.png" alt="" /></div>
                <div className="innerpage-circle2"><img src="assets/images/Testimonial1.png" alt="" /></div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-6 offset-xl-3">
                        <div className="fadeInLeft-land-caption text-center">
                            <div className="">
                                <div>
                                    <img src="assets/images/logoimage.png" alt="caption-img" className="caption-img" />
                                    <div className="clock-box">
                                        <h3>We Are Coming soon</h3>
                                        <p>Please check back again within Some Days as We're Pretty Close</p>
                                        <Countdown date={new Date(1564231136000)} renderer={renderer} />,
                                        
                                    </div>

                                    <a href=""><img src="assets/images/appstore.png" alt="appstore" className="store" /></a>
                                    <a href=""><img className="ml-4 store" src="assets/images/play-store.png" alt="play-store" /></a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/*home section end*/}

        <section className="coming-soon md-pt-0" data-anchor="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <div className="footer-text">
                            <img src="assets/images/email.png" alt="email" />
                            <h2 className="title text-center md-margin-top">subscribe to <span>newsletter</span></h2>
                            <p>  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</p>
                            <form className="footer-form">
                                <div className="form-group">
                                    <input type="email" className="form-control" required placeholder="enter your email" />
                                </div>
                                <div className="form-button">
                                    <button type="submit" className="btn btn-custom theme-color">send</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/*Footer Section start*/}
        <footer className="bg-light">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="copyright-section">
                            <p>2018-19 Copyright © By Themeforest Powered By Pixel Strap</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
        {/*Footer Section End*/}
      </div>
  	);
  }
}


export default ComingSoon;