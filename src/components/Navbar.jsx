import React from "react";
import { Link, NavLink } from "react-router";
import user from "../assets/user.png";




const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className=""></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink className={"p-2"} to="/">Home</NavLink>
        <NavLink className={"p-2"} to="/about">About</NavLink>
        <NavLink className={"p-2"} to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={user} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
