import React from "react";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  return (
    <nav className="navbar">
      <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 container">
          <a href="/" class="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
            <img className="brand-img" src="/images/PEDDLE.svg" alt="Peddle logo" />
          </a>

              <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                <li className="nav-item">
                  <Link href="#" className="nav-link px-2 link-secondary active">About</Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link px-2 link-secondary">FAQS</Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link px-2 link-secondary">Pricing</Link>
                </li>
                <li className="nav-item">
                  <Link href="#" className="nav-link px-2 link-secondary">Testimonials</Link>
                </li>
              </ul>

                  <div className="col-md-3 text-end nav-btn">
                  <button type="button" className="signinbtnIN btn btn me-2">Sign-In</button> 
                    <button type="button" className="signbtnUP btn btn-outline me-2">Sign Up</button>
                    
                  </div>
                </div> 
    </nav>
  )
}

export default NavbarComp
