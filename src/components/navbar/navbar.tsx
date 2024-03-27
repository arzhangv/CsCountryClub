import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center ">
        <div className=" font-semibold text-4xl">
          <Link to="/"> CS Country Club </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="hover:text-gold-500 transition-colors duration-200 text-2xl"
          >
            Home
          </Link>
          <Link
            to="/mission"
            className="hover:text-gold-500 transition-colors duration-200 text-2xl"
          >
            Mission
          </Link>
          <Link
            to="/apply"
            className="hover:text-gold-500 transition-colors duration-200 text-2xl"
          >
            Apply
          </Link>
          <Link
            to="/about"
            className="hover:text-gold-500 transition-colors duration-200 text-2xl"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
