import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../slices/user";
const SignUp = () => {
  const dispatch = useDispatch();

  const [userNameInput, setUserNameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");
  const userSignUp = useSelector((state) => state.userSlicer.signUpStatus);

  const inputHandler = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case "name":
        setUserNameInput(e.target.value);
        break;
      case "password":
        setPasswordInput(e.target.value);
        break;
      case "confirmPassword":
        setConfirmPasswordInput(e.target.value);
        break;
      default:
        return 0;
    }
  };

  const signUpHandler = (e) => {
    if (passwordInput === confirmPasswordInput) {
      e.preventDefault();
      dispatch(
        registerUser({ userName: userNameInput, password: passwordInput })
      );
    }
  };

  return (
    <>
      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Register</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Register
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
                  <h4>Already have an account?</h4>
                  <p>
                    There are advances being made in science and technology
                    everyday, and a good example of this is the
                  </p>
                  <Link className="button button-account" to="/login">
                    Login Now
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="login_form_inner register_form_inner">
                <h3>Create an account</h3>
                <form className="row login_form" id="register_form">
                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Username"
                      onChange={inputHandler}
                      value={userNameInput}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                      onChange={inputHandler}
                      value={passwordInput}
                    />
                  </div>
                  <div className="col-md-12 form-group">
                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      placeholder="Confirm Password"
                      onChange={inputHandler}
                      value={confirmPasswordInput}
                    />
                  </div>
                  <div style={{ minHeight: 30 }} className="form-group w-100 ">
                    {confirmPasswordInput !== "" &&
                      confirmPasswordInput !== passwordInput && (
                        <h6 className="text-danger">
                          Password and Confirm Password does not match.
                        </h6>
                      )}
                    {userSignUp === "success" && (
                      <h6 className="text-success">
                        Your account has been created successfully.
                      </h6>
                    )}
                    {userSignUp === "failed" && (
                      <h6 className="text-danger">Some thing went wrong!</h6>
                    )}
                  </div>
                  <div className="col-md-12 form-group">
                    <button
                      className="button button-register w-100 "
                      onClick={signUpHandler}
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
