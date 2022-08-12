import React from "react";
import "../Footer/Footer.css";
import FooterLogo from "../../assets/Images/logo.svg";

function Footer() {
  return (
    <div>
      <h3>Subscribe</h3>
      &nbsp;
      <h6>Subscribe to our newsletter to stay updated at every moment.</h6>
      <div className="searchbarContainer">
        <input type="search" placeholder="Enter a valid email id" />
        <button type="search" className="blogbtn">
          Search
        </button>
      </div>
      <hr></hr>
      <footer class="footer-section">
        <div class="container">
          {/* <div class="footer-cta pt-5 pb-5">
                <div class="row">
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-map-marker-alt"></i>
                            <div class="cta-text">
                                <h4>Find us</h4>
                                <span>1 Cresswell Park,
                                    Blackheath,<br>
                                    London, SE3 9RD</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="fas fa-phone"></i>
                            <div class="cta-text">
                                <h4>Call us</h4>
                                <span>0203 907 9460</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-xl-4 col-md-4 mb-30">
                        <div class="single-cta">
                            <i class="far fa-envelope-open"></i>
                            <div class="cta-text">
                                <h4>Mail us</h4>
                                <span>sales@fireprotection.pstg.co.uk</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
          <div class="footer-content pt-5 pb-5">
            <div class="row">
              <div class="col-xl-4 col-lg-4 mb-50">
                <div class="footer-widget">
                  <div class="footer-logo">
                    <a href="/">
                      <img src={FooterLogo} class="img-fluid" alt="logo" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="col-xl-8 col-lg-8 col-md-6 mb-30"></div>

              <div>
                Company Name

                
                 
                  <div class="footer-widget">
                    {/* <div class="footer-widget-heading"></div> */}
                    <ul className="footlist">
                    
                      <li>
                        <a href="/">About</a>
                      </li>
                      <li>
                        <a href="/">Terms</a>
                      </li>
                      <li>
                        <a href="/">Privacy</a>
                      </li>
                      <li>
                        <a href="/">Blog</a>
                      </li>
                     
                    </ul>
                    

              </div>
              <div class="footer-social-icon">
                        <span>Follow us</span>
                        <a href="/">
                          <i class="fab fa-facebook-f facebook-bg"></i>
                        </a>
                        <a href="/">
                          <i class="fab fa-twitter twitter-bg"></i>
                        </a>
                        <a href="/">
                          <i class="fab fa-linkedin linkedin-bg"></i>
                        </a>
                      </div>
                  </div>
            </div>
          </div>
        </div>
        {/* <div class="copyright-area">
            <div class="container">
                <div class="row">
                    <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                        <div class="copyright-text">
                            <p>Copyright &copy; 2020, All Right Reserved Fire Protection. Built by <a href="https://www.digital22.com">Digital 22 Online Ltd</a></p>
                        </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 d-none d-lg-block text-right">
                        <div class="footer-menu">
                            <ul>
                                <li><a href="/">Privacy Policy</a></li>
                                <li><a href="/">Terms & Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div> */}
      </footer>
    </div>
  );
}

export default Footer;
