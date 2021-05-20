import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProductById, removeCurrentProduct } from "../slices/products";
import { addProductToCart } from "../slices/cart";
import { Link } from "react-router-dom";

const Product = () => {
  let productId = useParams().id;
  const dispatch = useDispatch();
  let quantity;
  let product = useSelector((state) => state.productsSlicer.currentProduct);

  const cart = useSelector((state) => state.cartSlicer.cart);
  const index = cart.findIndex((c) => c._id === productId);
  if (index !== -1) {
    quantity = cart[index].quantity;
  }
  useEffect(() => {
    dispatch(fetchProductById(productId));
    //remove product from state when component unmount!
    return () => {
      dispatch(removeCurrentProduct());
    };
  }, [dispatch, productId]);

  const addCartHandler = () => {
    dispatch(addProductToCart(product));
  };
  return (
    <>
      <section className="blog-banner-area" id="blog">
        <div className="container h-100">
          <div className="blog-banner">
            <div className="text-center">
              <h1>Shop Single</h1>
              <nav aria-label="breadcrumb" className="banner-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/home">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shop Single
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      <div className="product_image_area ">
        <div className="container">
          <div className="row s_product_inner " style={{ minHeight: 300 }}>
            {product.loading ? (
              <div
                className="spinner-border text-info mr-auto ml-auto mb-4"
                role="status"
                style={{
                  width: 80,
                  height: 80,
                  alignSelf: "center",
                }}
              >
                <span className="sr-only">Loading...</span>
              </div>
            ) : (
              <>
                <div className="col-lg-6">
                  <img
                    className="mx-auto d-block w-75"
                    src={`/img/product/${product.image}`}
                    alt=""
                  />
                </div>
                <div className="col-lg-5  m-t_m d d-flex flex-column justify-content-between ">
                  <h3 className="mt-2">{product.name}</h3>
                  <h2 className="mt-3 mb-3">${product.price}</h2>
                  <ul className="list my-4">
                    <li>
                      <Link to="#" className="active">
                        <span>Category</span> : Household
                      </Link>
                    </li>
                    <li>
                      <Link to="#">
                        <span>Availibility</span> : In Stock
                      </Link>
                    </li>
                  </ul>
                  <p className="my-2">{product.desc}</p>
                  <div className="product_count  m-t_xl">
                    <label htmlFor="qty">Quantity:</label>

                    <input
                      type="text"
                      name="qty"
                      size={2}
                      readOnly
                      value={quantity ? quantity : 0}
                      title="Quantity:"
                      className="input-text qty"
                    />

                    <div
                      style={{ cursor: "pointer" }}
                      className="button primary-btn ml-5 m-t_l"
                      onClick={addCartHandler}
                    >
                      Add to Cart
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
