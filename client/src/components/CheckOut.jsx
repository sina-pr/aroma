import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getOrderById } from "../slices/order";
import { Link } from "react-router-dom";
import { changeOrderStatus } from "../slices/cart";
const CheckOut = () => {
  let totalPrice;
  let shippingPrice;
  const dispatch = useDispatch();

  const userId = useSelector((state) => state.userSlicer.user.userId);
  const orders = useSelector((state) => state.orderSlicer.orders);
  dispatch(changeOrderStatus());
  useEffect(() => {
    if (userId) {
      dispatch(getOrderById({ userId }));
    }
  }, [dispatch, userId]);
  return (
    <>
      <section className="blog-banner-area" id="category">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Orders</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="#">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Orders
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <section className="checkout_area section-margin--small">
        <div className="container">
          <div className="column align-items-center">
            {userId ? (
              orders.length > 0 ? (
                orders.map((order, index) => {
                  totalPrice = 0;
                  let randomNum = Math.random();
                  shippingPrice = Math.round(randomNum * 100);
                  return (
                    <div
                      className="col-lg-10 ml-auto mr-auto mb-5 "
                      key={index}
                    >
                      <div className="order_box">
                        <h2>Order</h2>

                        <ul className="list">
                          <li>
                            <Link to="#">
                              <h4>
                                Product <span>Total</span>
                              </h4>
                            </Link>
                          </li>
                          {order.map((i, index) => {
                            totalPrice += i.price * i.quantity;
                            return (
                              <li key={index}>
                                <Link to={`/product/${i._id}`}>
                                  {i.name}
                                  <span className="middle">x {i.quantity}</span>
                                  <span className="last">
                                    ${i.price * i.quantity}
                                  </span>
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                        <ul className="list list_2">
                          <li>
                            <Link to="#">
                              Subtotal <span>${totalPrice}</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Shipping <span>Flat rate: ${shippingPrice}</span>
                            </Link>
                          </li>
                          <li>
                            <Link to="#">
                              Total <span>${totalPrice + shippingPrice}</span>
                            </Link>
                          </li>
                        </ul>

                        <div className="payment_item">
                          <div className="radion_btn">
                            <input
                              type="radio"
                              id="f-option5"
                              name="selector"
                            />
                            <label htmlFor="f-option5">Check payments</label>
                            <div className="check"></div>
                          </div>
                          <p>
                            Please send a check to Store Name, Store Street,
                            Store Town, Store State / County, Store Postcode.
                          </p>
                        </div>
                        <div className="payment_item active">
                          <div className="radion_btn">
                            <input
                              type="radio"
                              id="f-option6"
                              name="selector"
                            />
                            <label htmlFor="f-option6">Paypal </label>
                            <img src="img/product/card.jpg" alt="" />
                            <div className="check"></div>
                          </div>
                          <p>
                            Pay via PayPal; you can pay with your credit card if
                            you don’t have a PayPal account.
                          </p>
                        </div>
                        <div className="creat_account">
                          <input
                            type="checkbox"
                            id="f-option4"
                            name="selector"
                          />
                          <label htmlFor="f-option4">
                            I’ve read and accept the{" "}
                          </label>
                          <Link to="#">terms &amp; conditions*</Link>
                        </div>
                        <div className="text-center">
                          <Link className="button button-paypal" to="#">
                            Proceed to Paypal
                          </Link>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>
                  <h4 className="text-danger" style={{ textAlign: "center" }}>
                    Nothing to show!
                  </h4>
                </div>
              )
            ) : (
              <div>
                <h3 className="text-danger  text-center">
                  Please login first.
                </h3>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default CheckOut;
