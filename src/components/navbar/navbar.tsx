import React from "react";
import { Link } from "react-router-dom";
import countryclublogo from "../../assets/images/countryclublogo.png"
import {checkServerIdentity} from "node:tls";
const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white font-bold p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div className=" font-semibold text-4xl">
          <Link to="/"> <img src={countryclublogo} className="h-24 w-24" alt='Logo'/> </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl"
          >
            Home
          </Link>
          <Link
            to="/mission"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl"
          >
            Mission
          </Link>
          <Link
            to="/apply"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl"
          >
            Apply
          </Link>
          <Link
            to="/about"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
