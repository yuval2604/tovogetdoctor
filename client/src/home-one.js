import React from "react";
import Navbar from "./components/navbar";
import About from "./components/about";
import Feature from "./components/feature";
import ScreenShot from "./components/screenshot";
import Team from "./components/team";
import Blog from "./components/blog";
import Price from "./components/price";
import Testimonial from "./components/testimonial";
import Contact from "./components/contact";
import Subscribe from "./components/subscribe";
import Footer from "./components/footer";
import Tilt from "react-tilt";
import Select from "react-select";

class HomeOne extends React.Component {
  state = {
    cardDisplay: false
  };
  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }

  handleSubmit = () => {
    const newVal = !this.state.cardDisplay;
    this.setState({ cardDisplay: newVal });
  };

  render() {
    const Avalibility = [
      { value: "1", label: "immidiate within 24 hours" },
      { value: "2", label: "Later Future" }
    ];
    const specialty = [
      { value: "Oncology", label: "Oncology" },
      { value: "skin", label: "skin" },
      { value: "orthopedics", label: "orthopedics" }
    ];
    const fesition = [
      { value: "1", label: "name1" },
      { value: "2", label: "name2" },
      { value: "3", label: "name3" }
    ];
    document.body.classList.remove("landing-page");
    document.body.classList.remove("home-style");
    document.body.classList.remove("three");
    document.body.classList.remove("home-style-two");
    return (
      <div>
        {/* Navbar Component*/}
        <Navbar />

        {/* Home One Section Start */}
        <section id="home" className="home">
          <div className="home-decor">
            <div className="home-circle1">
              <img src="assets/images/main-banner3.png" alt="" />
            </div>
            <div className="home-circle2">
              <img src="assets/images/main-banner12.png" alt="" />
            </div>
            <div className="home-circle3">
              <img src="assets/images/main-banner1.png" alt="" />
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <div className="home-contain">
                  <div className="">
                    {/* <h1>
                      Get<span className="f-bold"></span> Doct
                      <span className="f-bold">o</span>r
                      <span className="f-bold f-color"></span>
                    </h1> */}
                    <p>
                      Access to private medical services with minimum time and
                      maximum convenience
                    </p>

                    <p>Please choose your specialty</p>
                    <Select options={specialty} />
                    <p>please select your Avalibility</p>
                    <Select options={Avalibility} />
                    <p>please select your fesition</p>
                    <Select options={fesition} />

                    <button
                      type="submit"
                      className="btn btn-custom theme-color theme-color"
                      style={{ margin: "20px" }}
                      onClick={() => this.handleSubmit()}
                    >
                      submit
                    </button>
                    {this.state.cardDisplay ? (
                      <div className="card">
                        <div className="popup_inner">
                          <a
                            class="close"
                            href="#"
                            onClick={() => this.handleSubmit()}
                          >
                            ×
                          </a>
                          <form className="theme-form">
                            <div className="form-group">
                              <div className="md-fgrup-margin">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="your name"
                                  required="required"
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="phone"
                                required="required"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="email address"
                                required="required"
                              />
                            </div>
                            <div className="form-group">
                              <input
                                required=""
                                type="password"
                                className="form-control"
                                placeholder="Password"
                              />
                            </div>

                            <div className="form-button text-center">
                              <button
                                type="submit"
                                className="btn btn-custom theme-color"
                              >
                                submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    ) : (
                      <div></div>
                    )}

                    <a href={null}>
                      <img
                        src="assets/images/appstore.png"
                        alt="appstore"
                        className="store"
                      />
                    </a>
                    <a href={null}>
                      <img
                        className="ml-10 store"
                        src="assets/images/play-store.png"
                        alt="play-store"
                      />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 offset-md-1">
                <div className="home-right">
                  <Tilt
                    options={{
                      perspective: 110,
                      speed: 400,
                      max: 1.2,
                      scale: 1
                    }}
                  >
                    <img
                      src="assets/images/mobile.png"
                      className="img-fluid"
                      alt="mobile"
                    />
                  </Tilt>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Home One Section End */}

        {/* About Component*/}
        <About />

        {/*Feature Component*/}
        <Feature />

        {/*ScreenShot Component*/}
        {/* <ScreenShot /> */}

        {/*Team Component*/}
        {/* <Team /> */}

        {/*Blog Component*/}
        {/* <Blog /> */}

        {/*Price Component*/}
        {/* <Price /> */}

        {/*Testimonial Component*/}
        {/* <Testimonial /> */}

        {/*Contact Component*/}
        <Contact />

        {/*Subscription Component*/}
        {/* <Subscribe /> */}

        {/*Footer Component*/}
        <Footer />
      </div>
    );
  }
}

export default HomeOne;
