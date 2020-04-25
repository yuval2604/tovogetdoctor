import React from "react";

class Footer extends React.Component {
  componentWillMount() {
    (function(d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src =
        "https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js#xfbml=1&version=v2.12&autoLogAppEvents=1";
      fjs.parentNode.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }

  render() {
    return (
      <div>
        <section className="p-0">
          <div className="container-fluid">
            <div className="bottom-section">
              <div className="row">
                <div className="col-md-6 p-0">
                  <div className="address-bar">
                    <div>
                      <ul className="footer-style">
                        <li>
                          <div className="footer-icon">
                            <img src="assets/images/locate.png" alt="locate" />
                          </div>
                          <div className="footer-address">
                            <a href={null}>Barzily Hospital</a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-icon">
                            <img
                              src="assets/images/telephone.png"
                              alt="telephone"
                            />
                          </div>
                          <div className="footer-address">
                            <a href={null}>08-6745378</a>
                          </div>
                        </li>
                        <li>
                          <div className="footer-icon">
                            <img
                              src="assets/images/fotter-email.png"
                              alt="fotter-email"
                            />
                          </div>
                          <div className="footer-address">
                            <a href={null}>rachelr@bmc.gov.il</a>
                            <a href={null}>shirahi@bmc.gov.il</a>
                          </div>
                        </li>
                        <li>
                          {/* <div className="footer-icon">
                            <img src="assets/images/fax.png" alt="" />
                          </div> */}
                          {/* <div className="footer-address">
                            <a href={null}>123-456 / 456-789</a>
                          </div> */}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 p-0">
                  <iframe
                    title="google-map"
                    src="https://maps.google.com/maps?q=%D7%94%D7%94%D7%A1%D7%AA%D7%93%D7%A8%D7%95%D7%AA%202%2C%20%D7%90%D7%A9%D7%A7%D7%9C%D7%95%D7%9F&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    allowFullScreen
                    className="md-height"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="copyright-section index-footer">
          {/* <p>2019 Power By Yuval Beiser</p> */}
        </div>

        <div className="tap-top">
          <div>
            <i className="fa fa-angle-double-up"></i>
          </div>
        </div>
        <div id="fb-root"></div>
        {/*Your customer chat code*/}
      </div>
    );
  }
}

export default Footer;
