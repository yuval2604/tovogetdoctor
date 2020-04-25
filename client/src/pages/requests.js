import React from "react";
import Navbar from "../components/navbar";
import TimeKeeper from "react-timekeeper";
import "./clockcss.css";
import Card from "./card";

class Request extends React.Component {
  state = {
    ime: "12:00",
    data: [Object, Object],
    ready: false,
    len: 0
  };
  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 1000);
    this.getDataFromDb();
    this.setState({ ready: true });
    this.setState({ len: this.state.data.length });
    console.log(this.state.len, this.state.data.length);
  }

  handlerUpdate = () => {
    this.getDataFromDb();
  };

  getDataFromDb = () => {
    // return all the requests that the time isnt set yet == 00:00
    fetch("http://167.71.44.156:3001/api/getRequests")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
  };
  componentDidUpdate() {
    console.log("update");

    // this.state.data.map(function(data, i) {
    //   console.log(i);
    // });
  }
  cardcomponent() {
    const items = this.state.data.map((item, i) => (
      <Card data={this.state.data[i]} handler={this.handlerUpdate} />
    ));
    return items;
  }

  render() {
    const divStyle = {
      // float: "left",
      display: "contents"
    };
    return (
      <div>
        {/* Navbar Component*/}
        {/* <Navbar /> */}

        <div className="page-margin">
          {/*breadcrumb start*/}
          <div className="breadcrumb-bg">
            <div className="container">
              <div className="row">
                <div className="col-md-6 col-sm-6 col-text-center d-align-center">
                  <h2 className="title">
                    <span>Review</span>
                  </h2>
                </div>
                <div className="col-md-6 col-sm-6 col-text-center">
                  <nav aria-label="breadcrumb" className="blog-bradcrumb ">
                    <ol className="breadcrumb bg-transparent mb-0">
                      <li className="breadcrumb-item">
                        <a href={`${process.env.PUBLIC_URL}/main`}>Home</a>
                      </li>
                      <li className="breadcrumb-item active">
                        <a href="">Review</a>
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          {/*breadcrumb end*/}

          {/*Review Section Start*/}
          <section>
            <div className="innerpage-decor">
              <div className="innerpage-circle1">
                <img src="assets/images/Testimonial2.png" alt="" />
              </div>
              <div className="innerpage-circle2">
                {/* <img src="assets/images/Testimonial1.png" alt="" /> */}
              </div>
            </div>
            <div className="review-block">
              <div className="container">
                <div className="row margin-bottom">
                  <div className="" style={divStyle}>
                    {this.cardcomponent()}
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/*Review Section End*/}
        </div>
      </div>
    );
  }
}

export default Request;
