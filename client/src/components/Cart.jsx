import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlineArrowUp,
  AiOutlineArrowDown,
  FaRegTrashAlt,
} from "react-icons/all";
import { submitOrder } from "./../slices/cart";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../slices/cart";
import { Link, useHistory } from "react-router-dom";

const Cart = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector((state) => state.cartSlicer.cart);
  const orderStatus = useSelector(
    (state) => state.cartSlicer.submitOrderStatus
  );

  const userId = useSelector((state) => state.userSlicer.user.userId);
  let totalPrice = 0;

  products.forEach((p) => {
    totalPrice += p.price * p.quantity;
  });
  const removeHanlder = (object) => {
    dispatch(removeFromCart(object._id));
  };
  const increaseHanlder = (object) => {
    dispatch(increaseQuantity(object._id));
  };
  const decreaseHanlder = (object) => {
    dispatch(decreaseQuantity(object._id));
  };
  const orderHandler = () => {
    dispatch(submitOrder({ products, userId }));
  };
  if (orderStatus === "success") {
    history.push("/checkout");
  }
  return (
    <>
      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Shopping Cart</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shopping Cart
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="cart_area">
        {products.length !== 0 ? (
          <div className="container">
            <div className="cart_inner d-flex flex-column align-items-center ">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Product</th>
                      <th scope="col">Price</th>
                      <th scope="col">Quantity</th>
                      <th scope="col">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {products.map((p) => (
                      <tr key={p._id}>
                        <td>
                          <div className="media">
                            <div className="d-flex">
                              <img
                                className="product-cart_image"
                                src={`/img/product/${p.image}`}
                                alt=""
                              />
                            </div>
                            <div className="media-body">
                              <p>{p.name}</p>
                            </div>
                          </div>
                        </td>
                        <td>
                          <h5>${p.price}</h5>
                        </td>
                        <td>
                          <div className="product_count">
                            <input
                              type="text"
                              name="qty"
                              readOnly
                              maxLength="12"
                              value={p.quantity}
                              title="Quantity:"
                              className="input-text qty"
                            />
                            <button
                              onClick={() => increaseHanlder(p)}
                              className="increase items-count"
                              type="button"
                            >
                              <AiOutlineArrowUp />
                            </button>
                            <button
                              onClick={() => decreaseHanlder(p)}
                              className="reduced items-count"
                              type="button"
                            >
                              <AiOutlineArrowDown style={{ marginBottom: 6 }} />
                            </button>
                          </div>
                        </td>
                        <td>
                          <h5>${p.price * p.quantity}</h5>
                        </td>
                        <td>
                          <FaRegTrashAlt
                            onClick={() => {
                              removeHanlder(p);
                            }}
                            style={{ cursor: "pointer" }}
                            size={21}
                            color="#c5322d"
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td></td>
                      <td></td>
                      <td>
                        <h5>Subtotal</h5>
                      </td>
                      <td>
                        <h5>${totalPrice}</h5>
                      </td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {userId ? (
                <button
                  onClick={orderHandler}
                  className="button button-login w-50 m-5 center "
                >
                  Order
                </button>
              ) : (
                <h4 className="text-danger my-4">Login to submit order.</h4>
              )}
            </div>
          </div>
        ) : (
          <div>
            <h4 style={{ textAlign: "center" }} className="text-danger">
              Your cart is Empty!
            </h4>
          </div>
        )}
      </section>
    </>
  );
};

export default Cart;
