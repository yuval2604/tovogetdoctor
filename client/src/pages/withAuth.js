import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      console.log("with auth page");
      console.log("checkToken");
      fetch("/api/checkToken")
        .then((res) => {
          console.log("inside check token", res);
          if (res.status === 200) {
            this.setState({ loading: false });
            console.log("setState", res.status);
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch((err) => {
          console.error(err);
          console.log("catch error");
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        console.log("redirect to login");
        return <Redirect to="/login" />;
      }
      console.log("redirect to props");
      return <ComponentToProtect {...this.props} />;
    }
  };
}
