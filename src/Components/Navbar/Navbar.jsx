import React, { useState } from "react";
import "./Navbar.css";
import "./Navbar.scss";
import { MdOutlineTravelExplore } from "react-icons/md";
import { TbGridDots } from "react-icons/tb";
import { AiFillCloseCircle } from "react-icons/ai";

function Navbar() {
  const [active, setActive] = useState("navBar");

  const showNavBar = () => {

    setActive('navBar activeNavBar ')
  };

  const removeNavBar= ()=>{

setActive('navBar')

  }

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex ">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Habibi Yalla
            </h1>
          </a>
        </div>

        <div onClick={showNavBar} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="#" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Packages
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div onClick={removeNavBar} className="closeNavBar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
      </header>
    </section>
  );
}

export default Navbar;
