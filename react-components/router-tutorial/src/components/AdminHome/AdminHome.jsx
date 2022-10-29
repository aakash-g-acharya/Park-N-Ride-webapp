// import {Link} from "react-router-dom";

import "./style1.css";
import "./style2.css";

// import { useNavigate } from "react-router-dom";

// const primaryColor = "#3bb19b";
const secondaryColor = "rgb(9, 67, 95)";
// const layoutColor = "antiquewhite";
// const bannerColor = "rgb(197, 124, 28)";

export default function AdminHome() {
  return (
    <>
      {/* <Link to="/Func1">Profile</Link>
        <br />
        <Link to="/Func2">Contact Service Agents</Link>
        <br />
        <Link to="/Func31">Service Requests</Link>
        <br />
        <Link to="/Func4">Service Faulty Slots</Link> */}

      <div className="navbar" style={{ position: "fixed" }}>
        <div className="col-3 px-4 d-flex justify-content-start align-items-center">
          <img
            src={require("./images/logo.png")}
            alt=""
            srcset=""
            height="50"
          />
        </div>

        <div className="col-4">
          <div className="row">
            <div className="col-4">
              <a className="nav-link p-3" href="#actions">
                Actions
              </a>
            </div>
            <div className="col-4">
              <a className="nav-link p-3" href="#rvws">
                Reviews
              </a>
            </div>
            <div className="col-4">
              <a className="nav-link p-3" href="#fdbck">
                Feedback
              </a>
            </div>
          </div>
        </div>

        <div className="col-3 px-2 d-flex justify-content-end">
          <button className="white_btn" onClick="exit();">
            Logout
          </button>
        </div>
      </div>

      <div style={{ height: "10vh", width: "20vw" }}></div>

      <div className="container my-5 mx-auto">
        <div className="col-12 mx-auto mb-5">
          <div
            className="row d-flex justify-content-center align-items-center text-center mx-5 mb-5"
            style={{ height: "75vh", backgroundColor: secondaryColor }}
          >
            <h1 style={{ fontSize: "48px", color: "white" }}>
              <strong style={{ color: "#f6b219" }}>Hello </strong>Admin!
            </h1>
          </div>
        </div>

        <div className="container" style={{ height: "75vh" }}>
          <div style={{ paddingTop: "120px" }} id="actions"></div>
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2>
                  <strong className="yellow">Admin </strong>Dashboard
                </h2>
                <span>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majorityomised words which don't look even
                  slightly believable
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 d-flex justify-content-center align-self-stretch"
            >
              <div className="food_box">
                <br />
                <a href="/Profile" className="btn btn-warning btn-lg" role="button"
                  ><strong>Profile</strong>
                </a>
                <br />
                <br />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-self-stretch">
              <div className="food_box">
                <br />
                <a href="/ContactAgents" className="btn btn-warning btn-lg" role="button"
                  ><strong>Contact Service Agents</strong>
                </a>
                <br />
                <br />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
            <div
              className="col-md-6 d-flex justify-content-center align-self-stretch"
            >
              <div className="food_box">
                <br />
                <a href="/ActiveRequests" className="btn btn-warning btn-lg" role="button"
                  ><strong>Service Requests</strong>
                </a>
                <br />
                <br />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
            <div className="col-md-6 d-flex align-self-stretch">
              <div className="food_box">
                <br />
                <a href="/ServiceSlot" className="btn btn-warning btn-lg" role="button"
                  ><strong>Service Faulty Slots</strong>
                </a>
                <br />
                <br />
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-6" style={{height:"64vh",width:"72vw"}}></div>
      </div>

            <div className="container p-5" id="rvws">
        <div className="row" style={{ height: "10vh" }}></div>
        <div className="row d-flex justify-content-center">
          <div
            id="carouselExampleControls"
            className="carousel slide"
            data-ride="carousel"
          >
            <div className="carousel-inner">
              <div
                className="carousel-item active"
                style={{ backgroundColor: secondaryColor }}
              >
                {/* <img src={require("./images/menu_icon.png")} className="d-block w-100" alt="..."/> */}
                <div
                  className="row d-flex justify-content-center align-items-center"
                  style={{ height: "75vh", width: "75vw" }}
                >
                  <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">
                      This is a simple hero unit, a simple jumbotron-style
                      component for calling extra attention to featured content
                      or information.
                    </p>
                    <hr className="my-4" />
                    <p>
                      It uses utility classes for typography and spacing to
                      space content out within the larger container.
                    </p>
                    <a
                      className="btn btn-primary btn-lg"
                      href="/UserHome"
                      role="button"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>
              <div className="carousel-item" style={{ backgroundColor: secondaryColor }}>
                <div
                  className="row d-flex justify-content-center align-items-center"
                  style={{ height: "75vh", width: "75vw" }}
                >
                  <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">
                      This is a simple hero unit, a simple jumbotron-style
                      component for calling extra attention to featured content
                      or information.
                    </p>
                    <hr className="my-4" />
                    <p>
                      It uses utility classes for typography and spacing to
                      space content out within the larger container.
                    </p>
                    <a
                      className="btn btn-primary btn-lg"
                      href="/UserHome"
                      role="button"
                    >
                      Learn more
                    </a>
                  </div>
                </div>{" "}
                {/* <img src={require("./images/logo.png")} className="d-block w-100" alt="..."/> */}
              </div>
              <div className="carousel-item" style={{ backgroundColor: secondaryColor }}>
                <div
                  className="row d-flex justify-content-center align-items-center"
                  style={{ height: "75vh", width: "75vw" }}
                >
                  <div className="jumbotron">
                    <h1 className="display-4">Hello, world!</h1>
                    <p className="lead">
                      This is a simple hero unit, a simple jumbotron-style
                      component for calling extra attention to featured content
                      or information.
                    </p>
                    <hr className="my-4" />
                    <p>
                      It uses utility classes for typography and spacing to
                      space content out within the larger container.
                    </p>
                    <a
                      className="btn btn-primary btn-lg"
                      href="/UserHome"
                      role="button"
                    >
                      Learn more
                    </a>
                  </div>
                </div>
                {/* <img src={require("./images/logo.png")} className="d-block w-100" alt="..."/> */}
              </div>
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleControls"
              role="button"
              data-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleControls"
              role="button"
              data-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>

      <div className="container p-5">
        <div
          className="row d-flex justify-content-center align-items-center"
          style={{ height: "75vh" }}
          id="fdbck"
        >
          <div className="col-2"></div>
          <div className="col-4">
            <div className="col feedback_alert">
              <h1>Your</h1>
              <h1>Feedback</h1>
              <h1>is our</h1>
              <h1>Priority !</h1>
            </div>
          </div>
          <div className="col-6">
            <div className="row d-flex justify-content-center">
              <div className="wrapper">
                <h3 style={{ textAlign: "center" }}>Feedback Form</h3>
                <div id="error_message"></div>
                <form id="myform" onsubmit="return validate();">
                  <div className="input_field">
                    <input type="text" placeholder="First Name" id="fname" />
                  </div>
                  <div className="input_field">
                    <input type="text" placeholder="Last Name" id="lname" />
                  </div>
                  <div className="input_field">
                    <input type="text" placeholder="Phone" id="phone" />
                  </div>
                  <div className="input_field">
                    <input type="text" placeholder="Email" id="email" />
                  </div>
                  <div className="input_field">
                    <textarea
                      placeholder="Your Feedback"
                      id="yourfeedback"
                    ></textarea>
                  </div>
                  <div className="btn">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
