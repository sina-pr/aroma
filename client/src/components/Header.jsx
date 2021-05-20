import "../styles/style.css";
import { Link } from "react-router-dom";
import { FiShoppingCart, BiSearch } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";
import "bootstrap/js/src/collapse.js";
import { logOutUser } from "../slices/user";

const Header = () => {
  const dispatch = useDispatch();
  let products = useSelector((state) => state.cartSlicer.cart);
  let lengthOfArray = products.length;
  const userId = useSelector((state) => state.userSlicer.user.userId);
  const logOutHandler = () => {
    dispatch(logOutUser());
  };
  return (
    <>
      <header className="header_area">
        <div className="main_menu">
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
              <Link to="/home" className="navbar-brand logo_h">
                <img src="/img/logo.png" alt="" />
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <div
                className="collapse navbar-collapse offset"
                id="navbarSupportedContent"
              >
                <ul className="nav navbar-nav menu_nav ml-auto mr-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="nav-item  submenu dropdown">
                    <Link
                      to="/products"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/products">
                          Shop Category
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link className="nav-link" to="/cart">
                          Shopping Cart
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/checkout">
                          Orders
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li className="nav-item submenu dropdown">
                    <Link
                      to="#"
                      className="nav-link dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </Link>
                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Login
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/signup">
                          Register
                        </Link>
                      </li>
                    </ul>
                  </li>
                </ul>

                <ul className="nav-shop  mb-0">
                  <li className="nav-item mx-3">
                    <Link to="/products">
                      <button>
                        <BiSearch size={23} />
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item ">
                    <Link to="/cart">
                      <button>
                        <FiShoppingCart size={18} />
                        {lengthOfArray > 0 ? (
                          <span className="nav-shop__circle">
                            {lengthOfArray}
                          </span>
                        ) : (
                          <span className="nav-shop__circle danger-bg">
                            {lengthOfArray}
                          </span>
                        )}
                      </button>
                    </Link>
                  </li>
                  <li className="nav-item">
                    {userId ? (
                      <Link
                        onClick={logOutHandler}
                        className="button btn-danger btn-logout"
                        to="/home"
                      >
                        Sign out
                      </Link>
                    ) : (
                      <Link className="button button-header" to="/login">
                        Login
                      </Link>
                    )}
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
