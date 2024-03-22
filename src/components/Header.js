import { AppBar, Button, Toolbar } from "@material-ui/core";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import React from "react";
import { signInWithGoogle } from "../firebase/firebaseUtils";
import { signIn } from "../actions/index";

function Header(props) {
  return (
    <AppBar className={`nav ${!props.show ? "hide" : ""}`} color="secondary">
      <Toolbar className="nav__container">
        <Link style={{ textDecoration: "none", color: "unset" }} to="/">
          <h2 className="logo">NOT NETFLIX</h2>
        </Link>

        {props.currentUser ? (
          <Link
            to="/profile"
            style={{ textDecoration: "none", color: "unset" }}
          >
            <h5> My WatchList</h5>
          </Link>
        ) : (
          <Button onClick={signInWithGoogle} color="inherit" variant="outlined">
            Sign In
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default connect(mapStateToProps, { signIn })(Header);
