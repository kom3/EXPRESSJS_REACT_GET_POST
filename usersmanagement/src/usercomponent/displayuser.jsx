import React, { Component } from "react";

export default class Displayuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    let url = "https://reqres.in/api/users?page=2";
    let payload = {
      method: "GET",
      headers: { "Content-Type": "json/application" },
    };
    fetch(url, payload)
      .then((res) => res.json())
      .then((res) => this.setState({ data: res.data }))
      .catch((err) => console.log(err));
  }

  delete = (event) => {
    alert("You want to delete this user?");
    console.log("deleting...", event);
    let uid = event.target.getAttribute("uid");
    let url = `https://reqres.in/api/users/${uid}`;
    let payload = {
      method: "GET",
      headers: { "Content-Type": "json/application" },
    };
    fetch(url, payload).then((res) => alert("delete successful"));
  };
  adduser() {
    console.log("adding user");
  }

  render() {
    return (
      <div>
        <fieldset>
          <h2 style={{ textAlign: "center" }}>User details</h2>
          <button onClick={() => window.location.assign("#adduser")}>
            add user
          </button>
        </fieldset>
        <br />
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Email</th>
              <th>First Name</th>
              <th>Last name</th>
              <th>Profile pic</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((item, idx) => {
              return (
                <tr key={item + idx}>
                  <td>{item.id}</td>
                  <td>{item.email}</td>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>
                    <img src={item.avatar} height="100px" width="100px" />
                  </td>
                  <td>
                    <button uid={item.id} onClick={(e) => this.delete(e)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
