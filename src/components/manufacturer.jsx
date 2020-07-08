import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import NavBar from "./navbar";

import "../App.css";

class Manufacturer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      manufacturerList: [],
    };
  }

  render() {
    var manufacturers = this.state.manufacturerList;
    return (
      <div>
        <NavBar />
        <Container maxWidth="sm">
          <div id="task-container">
            <div id="list-wrapper" className="mater">
              <h1> Manufacturer</h1>
              {/* //Here you can add your data fetched from django //Using data in
              detched in manufacturers */}
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Manufacturer;
