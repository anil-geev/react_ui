import React from "react";
import { AppBar } from "@material-ui/core";

const NavBar = () => {
  return (
    <React.Fragment>
      <AppBar position="static">
        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="_blank">
            Home <span className="badge badge-pill badge-secondary"></span>
          </a>
        </nav>
      </AppBar>
    </React.Fragment>
  );
};

export default NavBar;
