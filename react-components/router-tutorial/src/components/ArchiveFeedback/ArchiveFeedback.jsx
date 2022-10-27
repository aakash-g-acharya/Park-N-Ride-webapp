// const primaryColor = "#3bb19b";
const secondaryColor = "rgb(9, 67, 95)";
const layoutColor = "antiquewhite";
const bannerColor = "rgb(197, 124, 28)";

export default function ArchiveFeedback() {
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
            <h2>Requests / Feedback</h2>
          </div>
          <div
            className="row m-5 pt-4 pb-3 px-5 d-flex justify-content-center"
            style={{ backgroundColor: secondaryColor }}
          >
            <div className="col">
              <div className="row d-flex justify-content-center my-1">
                <div
                  className="btn-group"
                  role="group"
                  aria-label="Basic mixed styles example"
                >
                  <a
                    href="/ActiveRequests"
                    className="btn btn-warning btn-lg mx-1"
                    role="button"
                    style={{ width: "max-content" }}
                  >
                    Active Requests
                  </a>
                  <a
                    href="/ActiveFeedback"
                    className="btn btn-warning btn-lg"
                    role="button"
                    style={{ width: "max-content" }}
                  >
                    Active Feedbacks
                  </a>
                  <a
                    href="/AdminHome"
                    className="btn btn-success btn-lg mx-1"
                    role="button"
                    style={{ width: "max-content" }}
                  >
                    Home Page
                  </a>
                  <a
                    href="/ArchiveRequests"
                    className="btn btn-warning btn-lg"
                    role="button"
                    style={{ width: "max-content" }}
                  >
                    Archive Requests
                  </a>
                  <a
                    href="/ArchiveFeedback"
                    className="btn btn-warning btn-lg mx-1"
                    role="button"
                    style={{ width: "max-content" }}
                  >
                    Archive Feedbacks
                  </a>
                </div>
              </div>
              <div className="row my-4">
                <table class="table table-dark table-hover text-center">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Request Type</th>
                    <th scope="col">Comments</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Feedback</td>
                    <td>Otto</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Feedback</td>
                    <td>Thornton</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Feedback</td>
                    <td>Thornton</td>
                  </tr>
                </tbody>
              </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
