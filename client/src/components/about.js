import React from "react";

class About extends React.Component {
  componentDidMount() {
    setTimeout(function () {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }

  render() {
    return (
      <section id="about" className="about">
        <div className="about-decor">
          <div className="about-circle1">
            <img src="assets/images/team1.png" alt="team1" />
          </div>
          <div className="about-circle2">
            <img src="assets/images/main-banner1.png" alt="banner1" />
          </div>
        </div>
        <div className="container">
          <div className="row ">
            <div className="col-md-5">
              <div className="about-contain">
                <div>
                  <h2 className="title">
                    about <span>Get Doctor</span>
                  </h2>
                  <div
                    className="descriptionAbout"
                    style={{ textAlign: "right" }}
                  >
                    <p className="caption-about">
                      מי אנחנו ? שני יזמים שנמצאים בשוק הבריאות מעל 15 שנה, ד"ר
                      אסנה היינו מנהל המערך האונקלוגי בבית החולים ברזרילי. מר
                      ארז בייזר מנהל תפעול רדיותרפיה המערך האונקלוגי סוראסקי.
                      מנסיוננו המקצועי נחשפנו לפערים הקיימים במערכת הבריאות בין
                      דרישות וצרכי המטופלים לבין זמינות המערכת הציבורית והפרטית
                      ולכן לקחנו על עצמנו את האתגר למצוא דרכים להנגיש שירותי
                      רפואה במינימום זמן ומקסימום נוחות לקהל הרחב..
                    </p>
                  </div>
                  <div className="row sm-mb">
                    <div className="col-6">
                      <ul className="about-style">
                        <li className="abt-hover">
                          <div className="about-icon">
                            <div className="icon-hover">
                              <img
                                src="assets/images/icon1.png"
                                alt="easy-to-customized"
                              />
                            </div>
                          </div>
                          <div className="about-text">
                            <h3>Easy customize</h3>
                          </div>
                        </li>
                        <li className="abt-hover">
                          <div className="about-icon">
                            <div className="icon-hover">
                              <img
                                src="assets/images/icon3.png"
                                alt="easy-to-use"
                              />
                            </div>
                          </div>
                          <div className="about-text">
                            <h3>easy to use</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="about-style">
                        <li className="abt-hover">
                          <div className="about-icon">
                            <div className="icon-hover">
                              <img
                                src="assets/images/icon2.png"
                                alt="Awasome-Design"
                              />
                            </div>
                          </div>
                          <div className="about-text">
                            <h3>Nice Design</h3>
                          </div>
                        </li>
                        <li className="abt-hover">
                          <div className="about-icon">
                            <div className="icon-hover">
                              <img
                                src="assets/images/icon4.png"
                                alt="SEO-Friendly"
                              />
                            </div>
                          </div>
                          <div className="about-text">
                            <h3>SEO Friendly</h3>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="top-margin">
                    <a href="#home">
                      <button
                        type="button"
                        className="btn btn-custom theme-color theme-color"
                      >
                        view more
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-7 d-medium-none">
              <div className="about-right">
                <div className="about-phone">
                  {/* <img
                    src="assets/images/aboutus.png"
                    className="img-fluid"
                    alt="aboutus"
                  /> */}
                  <img
                    src="assets/images/Layer 1.png"
                    // className=" about-circle1"
                    style={{ width: "350px", height: "350px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
