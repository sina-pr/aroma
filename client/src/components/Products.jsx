import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/products";
import { Link } from "react-router-dom";

const Products = () => {
  const dispath = useDispatch();
  useEffect(() => {
    dispath(fetchProducts());
  }, [dispath]);
  const products = useSelector(
    (state) => state.productsSlicer.allProducts.items
  );
  const loading = useSelector(
    (state) => state.productsSlicer.allProducts.loading
  );

  return (
    <>
      <section className="section-margin--small mb-5">
        <div className="container">
          <div className="row">
            <div className="col-xl-12 ">
              <div className=" d-flex flex-wrap align-items-center filter-bar">
                <h6 className="text-center mr-auto  mb-0">Products</h6>

                {loading && (
                  <div
                    className="spinner-border text-info py-0 my-0"
                    style={{ height: 21, width: 21 }}
                    role="status"
                  >
                    <span className="sr-only">Loading...</span>
                  </div>
                )}
              </div>
              <section className="lattest-product-area pb-40 category-list">
                <div className="row">
                  {products.map((p) => {
                    return (
                      <div className="col-md-6 col-lg-4" key={p._id}>
                        <div className="card text-center card-product">
                          <div className="card-product__img">
                            <img
                              className="card-img"
                              src={`img/product/${p.image}`}
                              alt=""
                            />
                          </div>
                          <div className="card-body">
                            <p>{p.desc}</p>
                            <h4 className="card-product__title">
                              <Link to={`/product/${p._id}`}>{p.name}</Link>
                            </h4>
                            <p className="card-product__price">${p.price}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
