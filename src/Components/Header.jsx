import { useState } from "react";

import logo from "../assets/Images/Logo_Final.svg";
import { NavLink, useLocation } from "react-router-dom";
import classes from "./Header.module.css";

// TODO: Add Navbar that changes styles when scrolling for visibility
// TODO: Make checkbox for Mobile Navbar prettier (Hamburger Menu)
// TODO: Add functionality to mobile sidebar so that it closes when clicked outside of it

const Header = () => {
  const [inputChecked, setInputChecked] = useState(false);

  const mobileInputChangeHandler = () => {
    setInputChecked((prevInputChecked) => {
      return !prevInputChecked;
    });
  };

  inputChecked
    ? (document.querySelector("div.wrapper").style.cssText =
        "overflow: hidden; height: 100vh")
    : (document.querySelector("div.wrapper").style.cssText =
        "");

  // Setting Navigation bar Class based on pathname
  const pathName = useLocation().pathname;
  const setNavBG = (route) => {
    return route === "/" || route === "/Courses"
      ? `${classes.navBar}`
      : `${classes.navBar} ${classes.navBarBG}`;
  };

  return (
    <>
      <input
        type="checkbox"
        className={classes.navToggle}
        onChange={mobileInputChangeHandler}
        checked={inputChecked ? "checked" : ""}
      />
      <nav className={setNavBG(pathName)} id="navBarParent">
        <NavLink className={classes.navLinkElement} to="/">
          Home
        </NavLink>
        <NavLink className={classes.navLinkElement} to="/Courses">
          Courses
        </NavLink>
        <NavLink className={classes.navLinkElement} to="/Shop">
          Shop
        </NavLink>
        <NavLink className={classes.logoImgContainer} to="/">
          <img className={classes.logoImg} src={logo} alt="Coffee Coop Logo" />
        </NavLink>
        <NavLink className={classes.navLinkElement} to="/Blog">
          Blog
        </NavLink>
        <NavLink className={classes.navLinkElement} to="/About">
          About Us
        </NavLink>
        <NavLink className={classes.navLinkElement} to="/Contact">
          Contact
        </NavLink>
      </nav>
    </>
  );
};

export default Header;
