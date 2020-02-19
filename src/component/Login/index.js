import React, { Component } from "react";
import UserForm from "../UserForm";
import { login } from "../../actions/users";
import { connect } from "react-redux";

class LoginContainer extends Component {
  state = {
    email: "",
    password: "",
    name: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    this.props.dispatch(
      login(this.state.name, this.state.email, this.state.password)
    );
    this.props.history.push("/levels");
    this.setState({ name: "", email: "", password: "" });
  };

  // componentDidUpdate(prevProps) {
  //   if (prevProps.userLoggedIn !== this.props.userLoggedIn) {
  //     setTimeout(() => this.props.history.push("/"), 1500);
  //   }
  // }

  render() {
    return (
      <div>
        <UserForm
          text="Login"
          isLogin
          values={this.state}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLoggedIn: state.users.token !== null
  };
};

export default connect(mapStateToProps)(LoginContainer);
