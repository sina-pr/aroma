//import HeroBanner from "../../public/img/home/hero-banner.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchTrendProducts } from "./../slices/products";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrendProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.productsSlicer.trendProducts);

  return (
    <main className="site-main">
      <section className="hero-banner">
        <div className="container">
          <div className="row no-gutters align-items-center pt-60px">
            <div className="col-5 d-none d-sm-block">
              <div className="hero-banner__img">
                <img
                  className="img-fluid"
                  src="img/home/hero-banner.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-7 col-lg-6 offset-lg-1 pl-4 pl-md-5 pl-lg-0">
              <div className="hero-banner__content">
                <h4>Shop is fun</h4>
                <h1>Browse Our Premium Product</h1>
                <p>
                  Us which over of signs divide dominion deep fill bring they're
                  meat beho upon own earth without morning over third. Their
                  male dry. They are great appear whose land fly grass.
                </p>
                <Link className="button button-hero" to="/products">
                  Browse Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-margin calc-60px ">
        <div className="container">
          <div className="section-intro pb-60px">
            <p>Popular Item in the market</p>
            <h2>
              Trending <span className="section-intro__style">Product</span>
            </h2>
          </div>
          <div className="row">
            {products.map((p) => {
              return (
                <div className="col-md-6 col-lg-4 col-xl-3" key={p._id}>
                  <div className="card text-center card-product">
                    <div className="card-product__img">
                      <img
                        className="card-img"
                        src={`img/product/${p.image}`}
                        alt=""
                      />
                    </div>
                    <div className="card-body">
                      <p>Accessories</p>
                      <h4 className="card-product__title">
                        <Link to={`product/${p._id}`}>{p.name}</Link>
                      </h4>
                      <p className="card-product__price">${p.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
