import React, { Component } from "react";
import UserList from "./Components/userList";
import "./App.css";
import UserDetails from "./Components/userDetails";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      User: null,
      date: "",
      show: false
    };
  }

  componentDidMount() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0");
    var yyyy = today.getFullYear();
    this.setState({
      date: yyyy + "-" + mm + "-" + dd,
    });
  }

  Handler = (User) => {
    this.setState((preState) => {
      return {
        User: User,
        show: !preState.show
      }
    });
  };

  dateHandler = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  render() {
    console.log(this.state);
    return (<div>
      <UserList clickHandler={this.Handler} show={this.state.show}></UserList>
      {this.state.show ? (<UserDetails
        userInfo={this.state.User}
        dateHandler={this.dateHandler}
        date={this.state.date}
        submit={this.Handler}
        show={this.state.show}
      ></UserDetails >) : null}
    </div>
    );
  }
}
export default App;
