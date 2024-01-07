import React from "react";
import { useDispatch, useSelector } from "react-redux";
import currencyFormatter from "currency-formatter";

const Home = () => {
  const { products } = useSelector((state) => state.ProductsReducer);
  const quantity = products[0].quantity;
  const dispatch = useDispatch();

  return (
    <div>
      <div className="showcase">
        <h2>Most Popular</h2>
        <div className="block">
          <hr />
          <div className="text">✪</div>
          <hr />
        </div>
      </div>
      <div className="container">
        <div className="row">
          {products.map((product) => (
            <div className="col-3" key={product.id}>
              {product.original_price ? (
                <div className="product">
                  <div className="product__img badge">
                    <div className="ribbon">
                      <span>30% off</span>
                    </div>

                    <img src={product.img_url} alt="card name" />
                  </div>

                  <div className="product__info">
                    <span className="product__name">{product.name}</span>
                    <div>
                      <span className="original_price">
                        {product.original_price &&
                          "$" + product.original_price + ".00"}
                      </span>
                    </div>
                    <h2 className="final_price">
                      {currencyFormatter.format(product.final_price, {
                        code: "USD",
                      })}
                    </h2>
                  </div>

                  <div className="product__des">
                    <p>{product.description}</p>
                  </div>

                  <button
                    className="btn-default"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: { product, quantity },
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              ) : (
                <div className="product">
                  <div className="product__img">
                    <img src={product.img_url} alt="card name" />
                  </div>

                  <div className="product__info">
                    <span className="product__name">{product.name}</span>
                    <div>
                      <span className="original_price">
                        {product.original_price &&
                          "$" + product.original_price + ".00"}
                      </span>
                    </div>
                    <h2 className="final_price">
                      {currencyFormatter.format(product.final_price, {
                        code: "USD",
                      })}
                    </h2>
                  </div>

                  <div className="product__des">
                    <p>{product.description}</p>
                  </div>

                  <button
                    className="btn-default"
                    onClick={() =>
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: { product, quantity },
                      })
                    }
                  >
                    Add to cart
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
