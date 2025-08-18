import React from "react";
import logo from "/logo.svg";

function Header() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center p-5 gap-4 sm:gap-0">
      <div className="w-16">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <nav className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center text-white text-sm font-medium">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">News</a>
        <a href="#">Genre</a>
        <a href="#">Movie</a>
        <a href="#">TV Show</a>
      </nav>
    </div>
  );
}

export default Header;
