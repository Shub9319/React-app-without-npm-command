import React from "react";
import epf_logo from "../../assets/images/epfo_logo.png";
import './header.css';

export default function Header() {
  return (
    <div className="app-header">
      <section className="app-header-main">
        <img className="app-header-logo" src={epf_logo} alt="epf-logo" />
        <div>
          <h1>National Employee Fund Organisation</h1>
          <p>
            With EPS (Employee Pension Scheme) <b>Certified Since 1994. </b>
          </p>
        </div>
      </section>
      <section className="app-header-navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Admissions</li>
          <li>Schloarship</li>
          <li>Contact</li>
        </ul>
      </section>
      <hr/>
    </div>
  );
}
