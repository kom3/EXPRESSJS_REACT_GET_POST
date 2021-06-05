import React, { Component } from "react";

export default class Adduser extends Component {
  state = {
    name: "",
    job: "",
  };

  updateUserData = (e) => {
    let name = e.target.name;
    let val = e.target.value;
    this.setState({ [name]: val });
  };
  createuser = (e) => {
    e.preventDefault();
    console.log("Creating user!", e);
    let url = "https://reqres.in/api/users";
    let payload = {
      headers: { "Content-Type": "json/application" },
      method: "POST",
      data: JSON.stringify(
        JSON.stringify({
          name: this.state.name,
          job: this.state.job,
        })
      ),
    };
    fetch(url, payload)
      .then((res) => res.json())
      .then((res) => alert("User added: ", JSON.stringify(res)));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.createuser}>
          <fieldset>
            <label>name </label>
            <input
              onChange={(e) => this.updateUserData(e)}
              type="text"
              name="name"
            />
            <br />
            <br />
            <label>job </label>
            <input
              onChange={(e) => this.updateUserData(e)}
              type="text"
              name="job"
            />
            <br />
            <br />
            <button type="submit">Create User</button>
          </fieldset>
        </form>
      </div>
    );
  }
}
