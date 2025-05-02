import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { AuthContext } from "../providers/AuthProvider";




const Navbar = () => {

    const { user } = use(AuthContext);
    console.log(user);
    


  return (
    <div className="flex justify-between items-center">



      <div className="">{user && user.email}</div>

      <div className="nav flex gap-5 text-accent">
        <NavLink className={"p-2"} to="/">Home</NavLink>
        <NavLink className={"p-2"} to="/about">About</NavLink>
        <NavLink className={"p-2"} to="/career">Career</NavLink>
      </div>
      <div className="login-btn flex gap-5">
        <img src={userIcon} alt="" />
        <Link to="/auth/login" className="btn btn-primary px-10 ">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
