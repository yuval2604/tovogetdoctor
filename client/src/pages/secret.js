import React, { Component } from "react";
import axios from "axios";
import { string } from "prop-types";

export default class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: 0,
      data1: [],
      data: [],
      message: "Loading...",
      username: "",
      password: "",
      email: "",
      phonenumber: "",
      specialty: "",
      sex: "",
      avalibility: "",
      address: "",
      price: "",
      time: "",
      date: "",
    };
  }

  componentWillMount() {
    this.setState({
      data: this.props["location"]["state"]["data"]["doc"],
      username: this.props["location"]["state"]["data"]["doc"]["username"],
      email: this.props["location"]["state"]["data"]["doc"]["email"],
      phonenumber: this.props["location"]["state"]["data"]["doc"][
        "phonenumber"
      ],
      specialty: this.props["location"]["state"]["data"]["doc"]["specialty"],
      sex: this.props["location"]["state"]["data"]["doc"]["sex"],
      avalibility: this.props["location"]["state"]["data"]["doc"][
        "avalibility"
      ],
      address: this.props["location"]["state"]["data"]["doc"]["address"],
      price: this.props["location"]["state"]["data"]["doc"]["price"],
      password: this.props["location"]["state"]["data"]["password"],
    });
    fetch("/api/secret")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          message: res,
        })
      );

    axios
      .post("http://192.168.1.18:3001/api/findAllRequestByDoctorName", {
        username: this.props["location"]["state"]["data"]["doc"]["username"],
      })
      .then((data) =>
        this.setState({
          data: data.data["data"],
          data1: data.data["data"]["0"],
          ready: 1,
        })
      );
  }

  handlechange = (e) => {
    var s = e.target.value;
    this.setState({ time: s });
    console.log("handle change", this.state);
  };

  handlechangeDate = (e) => {
    var s = e.target.value;
    this.setState({ date: s });
    console.log("handle change", this.state);
  };

  handleSubmit = (id, number, key) => {
    console.log("handle submit", id, key);
    let date_ob = new Date();
    let hours = date_ob.getHours();
    let minutes = date_ob.getMinutes();
    var timeOfSec = hours + ":" + minutes;
    document.getElementById(key).remove();
    axios.post("http://167.71.44.156:3001/api/updateReqTable", {
      id: id,
      number: number,
      time: this.state.time,
      date: this.state.date,
      update: {
        time: this.state.time,
        timeOfsecretarySet: timeOfSec,
        DateToBeScedule: this.state.date,
      },
    });
  };

  renderProducts(data) {
    console.log("----------------------------------------");

    this.state.ready ? (
      Object.keys(data).map((key) => {
        return <p>{data[key]}</p>;
      })
    ) : (
      <p>nothing</p>
    );
  }

  render() {
    var style = {
      "overflow-x": "auto",
      "min-width": "initial",
    };
    console.log("b", this.state.data["0"] ? true : false);
    return (
      <div>
        <h1>Doctor</h1>
        <p>{this.state.username}</p>
        <p>{this.state.email}</p>
        <p>{this.state.phonenumber}</p>
        <p>{this.state.specialty}</p>
        <p>{this.state.avalibility}</p>
        <p>{this.state.address}</p>
        <p>{this.state.sex}</p>
        <p>{this.state.price}</p>
        <p>{this.state.password}</p>
        <h1>Requests</h1>
        <div className="container" style={style}>
          <div className="tablereq container">
            <table className="table table-dark">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">name</th>
                  <th scope="col">email</th>
                  <th scope="col">number</th>
                  {/* <th scope="col">avalibility</th>
                <th scope="col">fesition</th> */}
                  {/* <th scope="col">Time Right Now</th> */}
                  <th scope="col">Pick Time</th>
                  <th scope="col">Pick Date</th>
                </tr>
              </thead>
              <tbody>
                {this.state.ready == 1
                  ? Object.keys(this.state.data).map((key) => {
                      return (
                        <tr id={key} key={key}>
                          <th scope="row">{this.state.data[key]["id"]}</th>
                          <td>{this.state.data[key]["name"]}</td>
                          <td>{this.state.data[key]["email"]}</td>
                          <td>{this.state.data[key]["number"]}</td>
                          {/* <td>{item["avalibility"]}</td>
                    <td>{item["fesition"]}</td> */}
                          {/* <td>{item["time"]}</td> */}
                          <td className="inputtd">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="pick time"
                                required="required"
                                onChange={this.handlechange}
                              />
                            </div>
                          </td>
                          <td className="inputtd">
                            <div className="form-group">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="pick Date"
                                required="required"
                                onChange={this.handlechangeDate}
                              />
                            </div>
                          </td>
                          <td>
                            <button
                              type="button"
                              className="btn btn-success"
                              onClick={() =>
                                this.handleSubmit(
                                  this.state.data[key]["id"],
                                  this.state.data[key]["number"],
                                  key
                                )
                              }
                            >
                              Success
                            </button>
                          </td>
                        </tr>
                      );
                    })
                  : null}
              </tbody>
            </table>
          </div>
        </div>

        {/* {this.state.ready == 1
          ? Object.keys(this.state.data).map((key) => {
              return (
                <div>
                  <p>{this.state.data[key]["id"]}</p>
                  <p>{this.state.data[key]["name"]}</p>
                  <p>{this.state.data[key]["number"]}</p>
                  <p>{this.state.data[key]["email"]}</p>
                  <p>{this.state.data[key]["fesition"]}</p>
                  <p>{this.state.data[key]["speciality"]}</p>
                  <p>{this.state.data[key]["avalibility"]}</p>
                  <p>----------------------</p>
                </div>
              );
            })
          : null} */}
      </div>
    );
  }
}
