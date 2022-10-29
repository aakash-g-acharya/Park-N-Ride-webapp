import "./style.css";

import { useNavigate } from "react-router-dom";

// const primaryColor = "#3bb19b";
const secondaryColor = "rgb(9, 67, 95)";
const layoutColor = "antiquewhite";
const bannerColor = "rgb(197, 124, 28)";

export default function Services() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate("/Payment");
  };

  const handleCart = (event) => {
    const btn = document.getElementById(event.currentTarget.id);
    if(btn.innerText==="Add to Cart")
    {
      btn.innerText="Remove from Cart";
    }
    else{
      btn.innerText="Add to Cart";
    }
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
          <span
            className="bullet active"
            style={{ boxShadow: `0px 0px 20px white` }}
          >
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
            <h2>Premium Services</h2>
          </div>
          <div
            className="row m-5 py-4 px-5 d-flex justify-content-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="col">
              <div className="row d-flex justify-content-center">
                <h4 style={{ color: layoutColor, textAlign: "center" }}>
                  Experience our below services @ discounted price !
                </h4>
              </div>
              <hr />
              <div className="row">
                <div className="col-4 d-flex justify-content-center">
                  <div
                    className="card text-center"
                    style={{
                      width: "18rem",
                      backgroundColor: "rgb(255, 196, 0)",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Car Wash</h5>
                      <p className="card-text">
                        Car Wash services available by Wash247 @ flat 20%
                        discount !
                      </p>
                      <p className="card-text">PRICE : 300 INR</p>
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="car-wash"
                        onClick={handleCart}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <div
                    className="card text-center"
                    style={{
                      width: "18rem",
                      backgroundColor: "rgb(255, 196, 0)",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">EV Charging / Fuelling</h5>
                      <p className="card-text">
                        EV charging services available by PowerNxt @ flat 25%
                        discount !
                      </p>
                      <p className="card-text">PRICE : 32 INR / hour</p>
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="ev-fill"
                        onClick={handleCart}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-4 d-flex justify-content-center">
                  <div
                    className="card text-center"
                    style={{
                      width: "18rem",
                      backgroundColor: "rgb(255, 196, 0)",
                    }}
                  >
                    <div className="card-body">
                      <h5 className="card-title">Tyres Related</h5>
                      <p className="card-text">
                        Tyres filling services available by Tyrefig99 @ flat 32%
                        discount !
                      </p>
                      <p className="card-text">PRICE : 20 INR / tyre</p>
                      <button
                        type="button"
                        className="btn btn-danger"
                        id="tyre-fill"
                        onClick={handleCart}
                      >
                        Add to Cart
                      </button>
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
