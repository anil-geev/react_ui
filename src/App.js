import React, { Component } from "react";

import "./App.css";
import NavBar from "./components/navbar";

import Manufacturer from "./components/manufacturer";
import { Button, Divider, TextField } from "@material-ui/core";

class App extends Component {
  state = { selectedComponent: "" };
  constructor() {
    super();
    console.log("called Construktr App");
  }

  render() {
    if (this.state.selectedComponent === "Manufacturer") {
      return <Manufacturer />;
    }

    return (
      <React.Fragment>
        <NavBar />
        <Button
          variant="contained"
          onClick={() => {
            this.setState({ selectedComponent: "Manufacturer" });
          }}
        >
          Manufacturer
        </Button>
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button
            variant="contained"
            onClick={() => {
              this.setState({ selectedComponent: "Manufacturer" });
            }}
          >
            Manufacturer
          </Button>
        </form>
        <br /> <br /> <br />
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Standard" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button
            variant="contained"
            onClick={() => {
              this.setState({ selectedComponent: "Manufacturer" });
            }}
          >
            Manufacturer
          </Button>
        </form>
        <Divider light />
        <main className="container"></main>
      </React.Fragment>
    );
  }
}

export default App;
