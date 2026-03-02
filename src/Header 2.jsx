import React from 'react'
import "./Home.css"

function Header() {
  return (
    <>
      <header>
        <div className="top-bar">
          <div className="container">
            <nav className="navbar navbar-expand-sm">
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  <button className="red-block">Breaking</button>
                </a>

                <button
                  className="navbar-toggler navbar-dark"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapsibleNavbar"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <a className="nav-link"><i className="fa-brands fa-facebook-f"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><i className="fa-brands fa-instagram"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><i className="fa-brands fa-tiktok"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><i className="fa-brands fa-x-twitter"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><i className="fa-brands fa-vimeo-v"></i></a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link"><i className="fa-brands fa-pinterest-p"></i></a>
                    </li>
                  </ul>
                </div>

              </div>
            </nav>
          </div>
        </div>
      </header>

      <section>
        <div className="second-bar">
          <div className="container">
            <div className="p-4">
              <div className="row">
                <div className="col-md-3 left-part-writing text-center">
                  <h1 className="logo-h1">MAGAZINE</h1>
                </div>

                <div className="col-md-9 d-flex justify-content-center align-items-center">
                  <ul className="folded-li">
                    <li>home <i className="fa-solid fa-angle-down"></i></li>
                    <li>features <i className="fa-solid fa-angle-down"></i></li>
                    <li>shop <i className="fa-solid fa-angle-down"></i></li>
                    <li>technology <i className="fa-solid fa-angle-down"></i></li>
                    <li>culture <i className="fa-solid fa-angle-down"></i></li>
                    <li>buy theme</li>
                  </ul>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="gray-part">
          <div className="container">
            <img
              src="https://cheerup2.theme-sphere.com/magazine/wp-content/uploads/sites/7/2017/03/themela.jpg"
              className="long-photo"
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Header
