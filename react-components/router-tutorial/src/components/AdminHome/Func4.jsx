import { useNavigate } from "react-router-dom";

// const primaryColor = "#3bb19b";
const secondaryColor = "rgb(9, 67, 95)";
const layoutColor = "antiquewhite";
const bannerColor = "rgb(197, 124, 28)";

export default function Func4() {
  const navigate = useNavigate();

  const navigateToNextPage = () => {
    navigate("/AdminHome");
  };
  return (
    <>
      <nav className="navbar">
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
      </nav>

      <div
        className="container mt-5 p-2"
        style={{ backgroundColor: layoutColor }}
      >
        <div className="col p-2">
          <div
            className="row mx-auto p-2 d-flex justify-content-center"
            style={{ backgroundColor: bannerColor }}
          >
            <h2>Parking Slots Map</h2>
          </div>
          <div
            className="row m-5 pt-4 pb-3 px-5 d-flex justify-content-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="col px-5">
              <div className="row d-flex justify-content-center my-1">
                <button type="button" className="btn btn-success mx-2">
                  Vacant
                </button>
                <button type="button" className="btn btn-danger mx-2">
                  Occupied
                </button>
                <button type="button" className="btn btn-warning mx-2">
                  Faulty
                </button>
              </div>
              <div className="row mt-3 py-2 px-5 d-flex justify-content-center">
                <table className="table table-dark table-borderless d-flex justify-content-center">
                  <tbody>
                    <tr>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-danger m-1">
                          01
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          02
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          03
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          04
                        </button>
                      </td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          05
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          06
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-danger m-1">
                          07
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          08
                        </button>
                      </td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          09
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          10
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-danger m-1">
                          11
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          12
                        </button>
                      </td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          13
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          14
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          15
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          16
                        </button>
                      </td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          17
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          18
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          19
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          20
                        </button>
                      </td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          21
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-warning m-1">
                          22
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          23
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          24
                        </button>
                      </td>
                      <td className="text-center"></td>
                    </tr>
                    <tr>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          25
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-warning m-1">
                          26
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-danger m-1">
                          27
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          28
                        </button>
                      </td>
                      <td className="text-center"></td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          29
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-warning m-1">
                          30
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          31
                        </button>
                      </td>
                      <td className="text-center">
                        <button type="button" className="btn btn-success m-1">
                          32
                        </button>
                      </td>
                      <td className="text-center"></td>
                    </tr>
                  </tbody>
                </table>
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
      </div>
    </>
  );
}
