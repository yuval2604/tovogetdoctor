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
import axios from "axios";

class HomeOne extends React.Component {
  state = {
    cardDisplay: false,
    avalibility: null,
    specialty: null,
    fesition: null,
    name: null,
    number: null,
    email: null,
    id: null
  };
  componentDidMount() {
    this.handleChecking();
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }

  handleAvalibility = event => {
    this.setState({ avalibility: event.label });
  };
  handleSpecialty = event => {
    this.setState({ specialty: event.label });
  };
  handleFesition = event => {
    this.setState({ fesition: event.label });
  };
  handleProfileId = e => {
    this.setState({ id: e.target.value });
  };
  handleProfileName = e => {
    this.setState({ name: e.target.value });
  };
  handleProfileNumber = e => {
    this.setState({ number: e.target.value });
  };
  handleProfileEmail = e => {
    this.setState({ email: e.target.value });
  };

  handleSubmit = () => {
    const newVal = !this.state.cardDisplay;
    this.setState({ cardDisplay: newVal });
  };
  handleChecking = () => {
    fetch("http://192.168.1.15:3001/api/checking");
  };

  handleSendProfile = () => {
    console.log(this.state);
    axios
      .post("http://192.168.1.15:3001/api/getAllData", {
        avalibility: this.state.avalibility,
        specialty: this.state.specialty,
        fesition: this.state.fesition,
        name: this.state.name,
        number: this.state.number,
        email: this.state.email,
        id: this.state.id
      })
      .then(res => console.log("return from post res was", res));
  };

  render() {
    const Avalibility = [
      { value: "1", label: "immidiate within 24 hours" }
      //{ value: "2", label: "Later Future" }
    ];
    const specialty = [{ value: "Oncology", label: "אונקולוגיה" }];
    const fesition = [
      { value: "1", label: "ד'ר נועם אסנה" },
      { value: "2", label: "פרופ משה שפר" }
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
                    <Select
                      options={specialty}
                      onChange={this.handleSpecialty}
                    />
                    <p>please select your Avalibility</p>
                    <Select
                      options={Avalibility}
                      onChange={this.handleAvalibility}
                    />
                    <p>please select your fesition</p>
                    <Select options={fesition} onChange={this.handleFesition} />

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
                            className="close"
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
                                  onChange={this.handleProfileName}
                                />
                              </div>
                            </div>
                            <div className="form-group">
                              <input
                                type="number"
                                className="form-control"
                                placeholder="phone"
                                required="required"
                                onChange={this.handleProfileNumber}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="email"
                                className="form-control"
                                placeholder="email address"
                                required="required"
                                onChange={this.handleProfileEmail}
                              />
                            </div>
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="your id"
                                required="required"
                                onChange={this.handleProfileId}
                              />
                            </div>

                            <div className="form-button text-center">
                              <button
                                type="submit"
                                className="btn btn-custom theme-color"
                                onClick={this.handleSendProfile}
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
