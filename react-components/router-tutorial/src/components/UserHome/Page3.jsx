import "./page1.css";

import { useNavigate } from "react-router-dom";

// const primaryColor = "#3bb19b";
const secondaryColor = "rgb(9, 67, 95)";
const layoutColor = "antiquewhite";
const bannerColor = "rgb(197, 124, 28)";

export default function Page3() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate("/Page4");
  };

  return (
    <>
      <div className="navbar">
        <div className="col-3 px-4 d-flex justify-content-start align-items-center">
          <img src={require("./images/logo.png")} alt="" height="50" />
        </div>
        <div className="col-6 bullets d-flex">
          <span className="bullet active">
            <i className="fa fa-ticket" style={{ fontSize: "24px" }}></i>
          </span>
          <span className="bullet active">
            <i className="fa fa-map-o" style={{ fontSize: "24px" }}></i>
          </span>
          <span
            className="bullet active"
            style={{ boxShadow: `0px 0px 20px white` }}
          >
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
            <h2>Payment Gateway</h2>
          </div>
          <div
            className="col mt-5 p-3 mb-4"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="row d-flex justify-content-center">
              {/* <!-- Button trigger modal --> */}
              <button
                type="button"
                className="btn btn-danger"
                data-toggle="modal"
                data-target="#exampleModal"
              >
                View Ticket Summary
              </button>

              {/* <!-- Modal --> */}
              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">
                        Ticket History
                      </h5>
                      <button
                        type="button"
                        className="close"
                        data-dismiss="modal"
                        aria-label="Close"
                      >
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <table className="table table-hover table-bordered table-dark">
                        <tbody>
                          <tr>
                            <th>Ticket ID</th>
                            <td>1432 XXX 9873</td>
                          </tr>
                          <tr>
                            <th>In Time</th>
                            <td>02 : 52 pm</td>
                          </tr>
                          <tr>
                            <th>Out Time</th>
                            <td>04 : 37 pm</td>
                          </tr>
                          <tr>
                            <th>Services</th>
                            <td>Car Wash</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div className="modal-footer">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        data-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row d-flex justify-content-center">
              <h3 style={{ color: layoutColor }}>Grand Total : 3000 INR</h3>
            </div>
            <hr />
            <div className="row d-flex justify-content-center">
              <h4 style={{ color: layoutColor }}>
                Thank you for choosing our services!
              </h4>
            </div>
            <hr />
            <div className="row d-flex justify-content-center">
              <h4 style={{ color: layoutColor }}>
                How would you like to pay the bill?
              </h4>
            </div>
            <hr />
            <div className="row p-3">
              <div className="col d-flex align-items-center justify-content-end px-5">
                <i
                  className="fa-solid fa-qrcode fa-3x"
                  style={{ marginRight: "0.6em" }}
                ></i>
                <button type="button" className="btn btn-warning">
                  Google Pay / UPI
                </button>
              </div>
              <div className="col d-flex align-items-center justify-content-start px-5">
                <i
                  className="fa-regular fa-credit-card fa-3x"
                  style={{ marginRight: "0.6em" }}
                ></i>
                <button type="button" className="btn btn-warning">
                  Credit / Debit Card
                </button>
              </div>
            </div>
            <hr />
            <div className="row d-flex justify-content-center">
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
    </>
  );
}
