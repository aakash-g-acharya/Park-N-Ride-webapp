// import "./css/bootstrap.min.css";
// // import "./css/style.css";
// import "./css/responsive.css";
// import "./css/jquery.mCustomScrollbar.min.css"

// import { useNavigate } from "react-router-dom";


export default function UserDashboard() {
//   const navigate = useNavigate();

//   const navigateToNextPage = () => {
//     navigate("/Page3");
//   };

  

  return (
    <>
      <div className="loader_bg">
      <div className="loader"><img src="./images/loading.gif" alt="#" /></div>
    </div>
    

    <header>
      <div className="header" id="nvbr">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div className="full">
                <div className="center-desk">
                  <div className="logo">
                    <a href="user_index.html"
                      ><img src="./images/logo.png" alt="#"
                    /></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav
                className="navigation navbar navbar-dark fixed-top navbar-expand-md px-5"
                style={{backgroundColor: "#3bb19b"}}
              >
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <a href="user_index.html"
                  ><img src={require("./images/logo.png")} alt="#"
                /></a>

                <div className="collapse navbar-collapse" id="navbarsExample04">
                  <ul className="navbar-nav mr-auto ml-5">
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#actions">Actions </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#srvcs">Services</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#rvws">Reviews</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link p-3" href="#abouts">Feedback</a>
                    </li>
                  </ul>
                  <div className="Call">
                    <a href="#">
                      <span style={{color: "black", fontWeight: "bold"}}
                        >Call Us : </span>
                        12345677890</a>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>

    <div className="food">
      <div className="container">
        <div className="row" style={{backgroundColor: "rgb(9, 67, 95)"}}>
          <div
            className="col-md-12 d_flex justify-content-center"
            style={{height: "72vh"}}>
            <div className="titlepage">
              <h2 style={{color: "white"}}>
                <strong className="yellow">Hello </strong>User!
              </h2>
              
            </div>
          </div>
        </div>
        <hr />
        <div style={{paddingTop: "100px"}} id="actions"></div>
        <div className="container" style={{height: "72vh"}}>
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <h2><strong className="yellow">User </strong>Dashboard</h2>
                <span>
                 There are many variations of passages of Lorem Ipsum
                  available, but the majorityomised words which don't look even
                  slightly believable</span>
                 
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6 d-flex justify-content-center align-self-stretch"
            >
              <div className="food_box">
                <br />
                <a
                  href="./profile.html"
                  className="btn btn-warning btn-lg"
                  role="button"
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
                <a
                  href="./page1.html"
                  className="btn btn-warning btn-lg"
                  role="button"
                  ><strong>Request Parking Slot</strong>
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

      <div className="works p-5">
        <div style={{paddingTop: "100px"}} id="srvcs"></div>
        <div className="container" style={{height: "72vh"}}>
          <div className="row">
            <div className="col-md-12">
              <div className="titlepage">
                <span>PARK N RIDE @ your convinience</span>
                <h2><strong className="yellow">Premium </strong>Services</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 d-flex align-self-stretch">
              <div id="white_bg" className="works_box">
                <h4>01</h4>
                <p style={{textAlign: "center"}}>CAR WASH</p>
                <p>
                  Selecting a full-service car wash service can be more
                  expensive because of the attention to detail involved in
                  cleaning your vehicle. We offer customized plans so you can
                  choose what works best for your vehicle and budget from the
                  available options.
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch">
              <div id="white_bg" className="works_box">
                <h4>02</h4>
                <p style={{textAlign: "center"}}>EV CHARGING</p>
                <p>
                  Providing EV owner the convenience of charging their vehicles
                  while parking in order to use their time productively. You
                  will get updates on charging, recommendations on paying
                  charges online!
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex align-self-stretch">
              <div id="white_bg" className="works_box">
                <h4>03</h4>
                <p style={{textAlign: "center"}}>TYRES RELATED</p>
                <p>
                  Whether it’s a tubeless tyre puncture repair, air fill or a
                  stepney change, why look for a puncture shop when PARK N RIDE
                  arrives at your parking slot ? We get you moving!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="clients my-5">
        <div style={{paddingTop: "100px"}} id="rvws"></div>
        <div className="container-fluid" style={{height: "72vh"}}>
          <div className="row">
            <div className="col-md-12 d-flex justify-content-center">
              <div className="padding_lert">
                <div className="titlepage">
                  <h2><strong className="yellow">Clients </strong>says</h2>
                </div>
                <div
                  id="myCarousel"
                  className="carousel slide clients_Carousel"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      data-target="#myCarousel"
                      data-slide-to="0"
                      className="active"
                    ></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="imga">
                                <figure>
                                  <img src="images/client.png" alt="#" />
                                </figure>
                              </div>
                              <div className="test_box">
                                <h4>mark du</h4>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                </p>
                                <i><img src="images/toy_img.png" alt="#" /></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="imga">
                                <figure>
                                  <img src="images/client.png" alt="#" />
                                </figure>
                              </div>
                              <div className="test_box">
                                <h4>mark du</h4>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                </p>
                                <i><img src="images/toy_img.png" alt="#" /></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item">
                      <div className="container">
                        <div className="carousel-caption">
                          <div className="row">
                            <div className="col-md-12">
                              <div className="imga">
                                <figure>
                                  <img src="images/client.png" alt="#" />
                                </figure>
                              </div>
                              <div className="test_box">
                                <h4>mark du</h4>
                                <p>
                                  It is a long established fact that a reader
                                  will be distracted by the readable content of
                                  a page when looking at its layout. The point
                                  of using Lorem Ipsum is that it has a
                                  more-or-less normal distribution of letters,
                                </p>
                                <i><img src="images/toy_img.png" alt="#" /></i>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#myCarousel"
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
                    href="#myCarousel"
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
            
          </div>
        </div>
      </div>
    </div>

    <div className="container p-5">
      <div style={{paddingTop: "100px"}} id="abouts"></div>
      <div className="row d_flex" style={{height: "72vh"}}>
        <div className="col-md-6">
          <div className="text-bg">
            <h1>Your Feedback is our Priority!</h1>
            
          </div>
        </div>
        <div className="col-md-6">
          <form id="request" className="main_form">
            <div className="row">
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder="Name"
                  type="type"
                  name="Name"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder=" Email"
                  type="type"
                  name="Email"
                />
              </div>
              <div className="col-md-12">
                <input
                  className="contactus"
                  placeholder=" Phone Number"
                  type="type"
                  name="Phone Number"
                />
              </div>
              <div className="col-md-12">
                <textarea
                  className="contactus"
                  placeholder="Message"
                  type="type"
                  Message="Name"
                >
Message </textarea
                >
              </div>
              <div className="col-sm-12">
                <button className="send_btn">Send</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <br />
    <br />

    <footer>
      <div className="footer">
        
        <div className="copyright">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <p>
                  Copyright 2019 All Right Reserved By
                  <a href="https://html.design/"> Free Html Templates</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
