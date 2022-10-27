import "./profile.css";

import { useNavigate } from "react-router-dom";

// const primaryColor = "#3bb19b";
const secondaryColor = "rgb(9, 67, 95)";
const layoutColor = "antiquewhite";
const bannerColor = "rgb(197, 124, 28)";

export default function Func1() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate("/AdminHome");
  };
  return (
    <>
      <div className="navbar">
        <div className="col-3 px-4 d-flex justify-content-start align-items-center">
          <img
            src={require("./images/logo.png")}
            alt=""
            srcset=""
            height="50"
          />
        </div>
        <div className="col-3 px-2 d-flex justify-content-end">
          <button className="white_btn" onClick="exit();">
            Logout
          </button>
        </div>
      </div>

      <div
        className="container mt-5 p-2"
        style={{ backgroundColor: layoutColor }}
      >
        <div className="col p-2">
          <div
            className="row mx-auto p-2 d-flex justify-content-center"
            style={{ backgroundColor: bannerColor }}
          >
            <h2>Profile</h2>
          </div>
          <div
            className="col my-5 pt-4 pb-3 px-5"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="row student-profile py-4 justify-content-center align-items-center">
                    <div className="col-6 d-flex justify-content-end">
                      <div className="card shadow-sm">
                        <div className="card-header bg-transparent text-center">
                          <img
                            className="profile_img"
                            src={require("./images/user.jpg")}
                            alt=""
                          />
                          <h3> Admin / User </h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-6 d-flex justify-content-start">
                      <div className="card shadow-sm" style={{width:"max-content"}}>
                        <div className="card-header bg-transparent border-0">
                          <h3 className="mb-0">
                            <i className="far fa-clone pr-1"></i> General
                            Information
                          </h3>
                        </div>
                        <div className="card-body p-0">
                          <table className="table table-bordered">
                            <tr>
                              <th>USER ID</th>
                              <td>:</td>
                              <td>125-XXX-987</td>
                            </tr>
                            <tr>
                              <th>FULL NAME</th>
                              <td>:</td>
                              <td>Vikram Ahuja</td>
                            </tr>
                            <tr>
                              <th>GENDER</th>
                              <td>:</td>
                              <td>Male</td>
                            </tr>
                            <tr>
                              <th>RELIGION</th>
                              <td>:</td>
                              <td>Hindu</td>
                            </tr>
                            <tr>
                              <th>BLOOD</th>
                              <td>:</td>
                              <td>B+</td>
                            </tr>
                          </table>
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
                Home Page
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
