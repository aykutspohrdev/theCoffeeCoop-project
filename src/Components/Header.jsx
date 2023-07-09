import logo from "../assets/Images/Logo_Final.svg";
import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

// TODO: Add Navbar that changes styles when scrolling for visibility


const Header = () => {
  return (
    <>
      <input type="checkbox" className={classes.navToggle} />
      <nav className={classes.NavBar}>
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
