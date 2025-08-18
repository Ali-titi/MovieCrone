import React from "react";
import logo from "/logo.svg";

function Header(){
    return (
    <div className="flex justify-between items-center p-5">
      <div className="w-16">
        <img src={logo} alt="Logo" className="w-full" />
      </div>
      <nav className="flex gap-6 items-center text-white text-sm font-medium">
        <a href="#">Home</a>
        <a href="#">Explore</a>
        <a href="#">News</a>
        <a href="#">Genre</a>
        <a href="#">Movie</a>
        <a href="#">TV Show</a>
      </nav>
    </div>
    );
};

export default Header;
