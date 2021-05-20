import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-area">
        <div className="container">
          <div className="row section_gap">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div className="single-footer-widget tp_widgets">
                <h4 className="footer_title large_title">Our Mission</h4>
                <p>
                  So seed seed green that winged cattle in. Gathering thing made
                  fly you're no divided deep moved us lan Gathering thing us
                  land years living.
                </p>
                <p>
                  So seed seed green that winged cattle in. Gathering thing made
                  fly you're no divided deep moved
                </p>
              </div>
            </div>
            <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget tp_widgets">
                <h4 className="footer_title">Quick Links</h4>
                <ul className="list">
                  <li>
                    <Link to="/home">Home</Link>
                  </li>
                  <li>
                    <Link to="products">Shop</Link>
                  </li>
                  <li>
                    <Link to="login">Login</Link>
                  </li>
                  <li>
                    <Link to="signup">Register</Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="offset-lg-1 col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget tp_widgets">
                <h4 className="footer_title">Contact Us</h4>
                <div className="ml-40">
                  <p className="sm-head">
                    <span className="fa fa-location-arrow"></span>
                    Head Office
                  </p>
                  <p>123, Main Street, Your City</p>

                  <p className="sm-head">
                    <span className="fa fa-phone"></span>
                    Phone Number
                  </p>
                  <p>+123 456 7890 +123 456 7890</p>

                  <p className="sm-head">
                    <span className="fa fa-envelope"></span>
                    Email
                  </p>
                  <p>free@infoexample.com www.infoexample.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
