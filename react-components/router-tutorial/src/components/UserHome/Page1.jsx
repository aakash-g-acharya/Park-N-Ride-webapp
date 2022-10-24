import "./page1.css";
import "./ticket.css";

import { useNavigate } from "react-router-dom";

// const primaryColor = "#3bb19b";
const secondaryColor = "rgb(9, 67, 95)";
const layoutColor = "antiquewhite";
const bannerColor = "rgb(197, 124, 28)";

export default function Page1() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate("/Page2");
  };

  return (
    <>
      <div className="navbar">
        <div className="col-3 px-4 d-flex justify-content-start align-items-center">
          <img src={require("./images/logo.png")} alt="" height="50" />
        </div>
        <div className="col-6 bullets d-flex">
          <span
            className="bullet active"
            style={{ boxShadow: `0px 0px 20px white` }}
          >
            <i className="fa fa-ticket" style={{ fontSize: "24px" }}></i>
          </span>
          <span className="bullet active">
            <i className="fa fa-map-o" style={{ fontSize: "24px" }}></i>
          </span>
          <span className="bullet active">
            <i className="fa fa-cc-visa" style={{ fontSize: "24px" }}></i>
          </span>
          <span className="bullet active">
            <i className="fa fa-check" style={{ fontSize: "24px" }}></i>
          </span>
        </div>
        <div className="col-3 px-2 d-flex justify-content-end">
          <button className="white_btn" onClick="exit();">
            Logout
          </button>
        </div>
      </div>

      <div
        className="container my-5 p-2"
        style={{ backgroundColor: layoutColor }}
      >
        <div className="col p-2">
          <div
            className="row mx-auto p-2 d-flex justify-content-center"
            style={{ backgroundColor: bannerColor }}
          >
            <h2>Parking Ticket</h2>
          </div>
          <div
            className="row m-5 py-4 px-5 d-flex justify-content-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="col">
              <div className="row d-flex justify-content-center py-2">
                <div className="card fl-left">
                  <div className="date">
                    <time datetime="23th feb">
                      <span>23</span> 
                      <span>feb</span>
                    </time>
                  </div>
                  <div className="card-cont">
                    <small>TICKET-ID : XXXX XXXX XXXX</small>
                    <h3>KA 03 MN 9824</h3>
                    <div className="even-date">
                      <i className="fa fa-calendar"></i>
                      <time>
                        <span> wednesday 23 february 2024</span>
                        <span>08:55pm to 12:00 am</span>
                      </time>
                    </div>
                    <div className="even-info">
                      <i className="fa fa-map-marker"></i>
                      <p>PARK N RIDE COMPLEX, BANGALORE</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row p-3 d-flex justify-content-center">
                <button
                  type="button"
                  className="btn btn-success btn-lg"
                  onClick={navigateToNextPage}
                >
                  Proceed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
