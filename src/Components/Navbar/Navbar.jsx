import React from "react";
import BYNARO from "../../assets/images/By Naro.png";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">

        {/* اللوجو */}
        <NavLink className="navbar-brand" to="/">
          <img src={BYNARO} className="im1" alt="Logo" />
        </NavLink>

        {/* زر الموبايل */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* الروابط */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                الرئيسية
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                من نحن
              </NavLink>
            </li>


            <li className="nav-item">
              <NavLink className="nav-link" to="/products">
                المنتجات
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/videos">
                الفيدباك 
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/price">
                الأسعار
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                تواصل معنا
              </NavLink>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}