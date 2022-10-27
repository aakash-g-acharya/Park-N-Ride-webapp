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
            <div className="col-3">
              <a className="nav-link p-3" href="#actions">
                Actions
              </a>
            </div>
            <div className="col-3">
              <a className="nav-link p-3" href="#srvcs">
                Services
              </a>
            </div>
            <div className="col-3">
              <a className="nav-link p-3" href="#rvws">
                Reviews
              </a>
            </div>
            <div className="col-3">
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
    </>
  );
}
