import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-green-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-semibold">
          <Link to="/"> CS Country Club </Link>
        </div>
        <div className="space-x-4">
          <Link
            to="/"
            className="hover:text-gold-500 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            to="/mission"
            className="hover:text-gold-500 transition-colors duration-200"
          >
            Mission
          </Link>
          <Link
            to="/apply"
            className="hover:text-gold-500 transition-colors duration-200"
          >
            Apply
          </Link>
          <Link
            to="/about"
            className="hover:text-gold-500 transition-colors duration-200"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
