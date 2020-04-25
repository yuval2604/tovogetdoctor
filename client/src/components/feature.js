import React from "react";

class Feature extends React.Component {
  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
  }
  render() {
    return (
      <section id="feature" className="feature">
        <div className="feature-decor">
          <div className="feature-circle1">
            <img src="assets/images/feature2.png" alt="" />
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="feature-phone">
              <img src="assets/images/222.png" className="img-fluid" alt="" />
            </div>
            <div className="offset-lg-4 col-lg-8">
              <div className="row">
                <div className="col-sm-12 mrgn-md-top">
                  <h2 className="title">
                    Our<span>features</span>
                  </h2>
                </div>
                <div className="col-12 col-md-6">
                  <ul className="feature-style">
                    <li>
                      <div className="feature-icon">
                        <img src="assets/images/icon/1.png" alt="icon" />
                      </div>
                      <div className="feature-subtitle">
                        <h3>נוח למשתמש</h3>
                      </div>
                      <div>
                        <p>נוחות ופשוטות בהפעלת האפליקציה / אתר האינטרנט. </p>
                      </div>
                    </li>
                    <li>
                      <div className="feature-icon">
                        <img src="assets/images/icon/3.png" alt="icon" />
                      </div>
                      <div className="feature-subtitle">
                        <h3>
                          <b>חינם</b>
                        </h3>
                      </div>
                      <div>
                        <p>
                          השירות ניתן בחינם למטופלים במטרה לשפר את הנגישות
                          לשירותי רפואה{" "}
                        </p>
                      </div>
                    </li>
                    <li>
                      <div className="feature-icon">
                        <img src="assets/images/icon/5.png" alt="icon" />
                      </div>
                      <div className="feature-subtitle">
                        <h3>נסיון בריאותי</h3>
                      </div>
                      <div>
                        <p>ניסיון של מעל 15 שנה בתחום שירותי הבריאות </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="col-12 col-md-6 sm-m-top">
                  <ul className="feature-style">
                    <li>
                      <div className="feature-icon">
                        <img src="assets/images/icon/2.png" alt="icon" />
                      </div>
                      <div className="feature-subtitle">
                        <h3>עדכונים מהירים</h3>
                      </div>
                      <div>
                        <p>נגישות לרופאים מומחים המובילים בתחומם. </p>
                      </div>
                    </li>
                    <li>
                      <div className="feature-icon">
                        <img src="assets/images/icon/4.png" alt="icon" />
                      </div>
                      <div className="feature-subtitle">
                        <h3>100% בטוח</h3>
                      </div>
                      <div>
                        <p>אתר מאובטח ואין צורך להזין פרטים בריאותיים. </p>
                      </div>
                    </li>
                    <li>
                      <div className="feature-icon">
                        <img src="assets/images/icon/6.png" alt="icon" />
                      </div>
                      <div className="feature-subtitle">
                        <h3>24 x 7 בשבילך</h3>
                      </div>
                      <div>
                        <p>.עזרה 24/7 לכלל המטופלים </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Feature;
