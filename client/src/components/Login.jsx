import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../slices/user";

const Login = () => {
  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const userId = useSelector((state) => state.userSlicer.user.userId);
  const history = useHistory();
  const dispatch = useDispatch();
  const inputHandler = (e) => {
    switch (e.target.name) {
      case "name":
        setUserNameInput(e.currentTarget.value);
        break;
      case "password":
        setPasswordInput(e.target.value);
        break;
      default:
        return 0;
    }
  };

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ userName: userNameInput, password: passwordInput }));
  };
  useEffect(() => {
    userId && history.push("/home");
  }, [userId, history]);
  return (
    <>
      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Login / Register</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Login/Register
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="login_box_area section-margin">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_box_img">
                <div className="hover">
                  <h4>New to our website?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link className="button button-account" to="/signup">
                    Create an Account
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner">
                <h3>Log in to enter</h3>
                <div className="row login_form" id="contactForm">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={userNameInput}
                      placeholder="Username"
                      onChange={inputHandler}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={passwordInput}
                      placeholder="Password"
                      onChange={inputHandler}
                    />
                  </div>

                  <div className="col-md-12 form-group">
                    <button
                      className="button button-login w-100 mt-5"
                      onClick={loginHandler}
                    >
                      Log In
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
