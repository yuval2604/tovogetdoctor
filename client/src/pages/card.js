import React, { Component } from "react";
import TimeKeeper from "react-timekeeper";
import "./clockcss.css";
import axios from "axios";

class Card extends Component {
  state = {};

  DeleteFromDB = () => {
    console.log("delete db in card", this.props.data["_id"]);
    // var id = this.props.data["_id"];
    // axios.post("http://167.71.44.156:3001/api/deleteData", {
    //   id: Number(this.props.data["id"])
    // });
  };

  updateDB = () => {
    let date_ob = new Date();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    var timeOfSec = hours + ":" + minutes;
    console.log(
      "pressed",
      this.props.data["_id"],
      "time of secratery in Card is ",
      timeOfSec
    );
    axios.post("http://167.71.44.156:3001/api/updateReq", {
      id: Number(this.props.data["id"]),
      number: this.props.data["number"],
      time: this.state.time,
      update: { time: this.state.time, timeOfsecretarySet: timeOfSec }
    });
    this.props.handler();
  };

  YourComponent() {
    return (
      <div>
        <TimeKeeper
          time={this.state.time}
          switchToMinuteOnHourSelect
          onChange={newTime => this.setState({ time: newTime["formatted24"] })}
        />
        <p>The time is :{this.state.time}</p>
      </div>
    );
  }

  render() {
    console.log(this.props.data["_id"]);
    const divStyle = {
      float: "left",
      width: "50%"
    };
    return (
      <div className="review-box" style={divStyle}>
        <img
          src="assets/images/avtar/1.jpg"
          alt="review"
          className="img-fluid"
        />
        <h5>{this.props.data["name"]}</h5>
        <div className="rating-star">
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
          <i className="fa fa-star" aria-hidden="true"></i>
        </div>
        <div className="review-message">
          <p>name :{this.props.data["name"]}</p>
          <p>id :{this.props.data["id"]}</p>
          <p>time :{this.props.data["avalibility"]}</p>
          <p>number :{this.props.data["number"]}</p>
          <p>fesition :{this.props.data["fesition"]}</p>
          <p>time :{this.props.data["time"]}</p>
          <p>date :{this.props.data["dateofevent"]}</p>
          {this.YourComponent()}
          {this.props.data["time"] == "00:00" ? (
            <button
              type="submit"
              className="btn btn-custom theme-color theme-color"
              onClick={this.updateDB}
              style={{}}
            >
              submit
            </button>
          ) : (
            <button
              type="submit"
              className="btn btn-outline-danger"
              disabled
              style={{}}
            >
              Have Time
            </button>
          )}
        </div>
        <button
          type="submit"
          onClick={() => console.log("delete db in card")}
          className="btn btn-outline-danger"
          style={{}}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default Card;
