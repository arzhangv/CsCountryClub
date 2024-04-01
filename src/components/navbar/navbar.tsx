import React from "react";
import { Link } from "react-router-dom";
import countryclublogo from "../../assets/images/countryclublogo.png"
import {checkServerIdentity} from "node:tls";
const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white font-bold p-4">
      <div className="container mx-auto flex justify-center items-center ">
        <div className="space-x-4 p-3">
          <Link
            to="/"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl p-10"
          >
            Home
          </Link>
          <Link
            to="/mission"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl p-10"
          >
            Mission
          </Link>
          <Link
            to="/apply"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl p-10"
          >
            Apply
          </Link>
          <Link
            to="/about"
            className="hover:text-gold-500 transition-colors duration-200 text-3xl p-10"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
