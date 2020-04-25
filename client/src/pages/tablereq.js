import React from "react";
import "./table.scss";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

class tablereq extends React.Component {
  state = {
    ime: "12:00",
    time: "",
    date: "",
    data: [Object, Object],
    len: 0
  };
  componentDidMount() {
    setTimeout(function() {
      document.querySelector(".loader-wrapper").style = "display: none";
    }, 2000);
    this.getDataFromDb();
  }
  getDataFromDb = () => {
    // return all the requests that the time isnt set yet == 00:00
    fetch("http://167.71.44.156:3001/api/getRequests")
      .then(data => data.json())
      .then(res => this.setState({ data: res.data }));
    console.log(this.data);
  };

  handlechange = e => {
    var s = e.target.value;
    this.setState({ time: s });
    console.log("handle change", this.state);
  };

  handlechangeDate = e => {
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
        DateToBeScedule: this.state.date
      }
    });
  };

  render() {
    var style = {
      "overflow-x": "auto",
      "min-width": "initial"
    };
    return (
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
              {this.state.data.map((item, i) => {
                return (
                  <tr id={i} key={i}>
                    <th scope="row">{item["id"]}</th>
                    <td>{item["name"]}</td>
                    <td>{item["email"]}</td>
                    <td>{item["number"]}</td>
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
                          this.handleSubmit(item["id"], item["number"], i)
                        }
                      >
                        Success
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default tablereq;
