import React, { Component } from "react";
import axios from "axios";

export default class Secret extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  componentDidMount() {
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
    console.log("message", this.state);

    axios
      .post("http://192.168.1.18:3001/api/findAllRequestByDoctorName", {
        username: this.props["location"]["state"]["data"]["doc"]["username"],
      })
      .then((data) => this.setState({ data }));
  }

  render() {
    return (
      <div>
        <h1>Secret</h1>
        <p>{this.state.username}</p>
        <p>{this.state.email}</p>
        <p>{this.state.phonenumber}</p>
        <p>{this.state.specialty}</p>
        <p>{this.state.avalibility}</p>
        <p>{this.state.address}</p>
        <p>{this.state.sex}</p>
        <p>{this.state.price}</p>
        <p>{this.state.password}</p>
      </div>
    );
  }
}
