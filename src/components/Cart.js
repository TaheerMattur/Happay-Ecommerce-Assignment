import React from "react";
import { useSelector, useDispatch } from "react-redux";
import currencyFormatter from "currency-formatter";
import { BsDash, BsPlus } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BsReverseBackspaceReverse } from "react-icons/bs";
import { HiArrowLeft } from "react-icons/hi";

const Cart = () => {
  const { products, totalPrice, deliveryPrice, taxAndCharges } = useSelector(
    (state) => state.CartReducer
  );

  const dispatch = useDispatch();

  return (
    <div className="cart">
      <Link to="/">
        <div className="back">
          <HiArrowLeft />
          <span className="backToHome">Back to Home</span>
        </div>
      </Link>
      <div className="container">
        <h3>Order Summary ( {products.length} Items ) </h3>

        {products.length > 0 ? (
          <>
            <div className="main-container">
              <div className="col-6 summary-container">
                <div className="cart__heading">
                  <div className="row">
                    <div className="col-2 small">SI NO</div>
                    <div className="col-2 small">ITEMS</div>
                    <div className="col-2 small">QTY</div>
                    <div className="col-2 small">DELETE</div>
                  </div>
                </div>
                <div className="divider"></div>
                {products.map((product) => (
                  <div className="row verticalAlign" key={product.id}>
                    <div className="col-2">
                      <div className="cart__number">
                        {products.indexOf(product) + 1}.
                      </div>
                    </div>
                    <div className="col-2">
                      <div className="cart__name">
                        {product.name.toUpperCase()}
                      </div>
                    </div>

                    <div className="col-2">
                      <div className="details__info cart__incDec">
                        <div className="details__incDec">
                          <span
                            className="dec"
                            onClick={() =>
                              dispatch({ type: "DEC", payload: product.id })
                            }
                          >
                            <BsDash fill="white" stroke="black" />
                          </span>
                          <span className="quantity">{product.quantity}</span>
                          <span
                            className="inc"
                            onClick={() =>
                              dispatch({ type: "INC", payload: product.id })
                            }
                          >
                            <BsPlus fill="white" stroke="black" />
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="col-2">
                      <div
                        className="cart__remove"
                        onClick={() =>
                          dispatch({ type: "REMOVE", payload: product.id })
                        }
                      >
                        <BsReverseBackspaceReverse />
                      </div>
                    </div>
                  </div>
                ))}

                <div className="divider"></div>
                <Link to="/">
                  <div className="add_items">+ Add more items</div>
                </Link>
              </div>

              <div className="col-5 price-container">
                <div className="summary">
                  <div className="summary__heading">Price Details</div>
                  <div className="divider"></div>
                  {products.map((product) => (
                      <div className="product_row" key={product.id}>
                        <span>
                          {product.quantity} X{" "}
                          {currencyFormatter.format(product.final_price, {
                            code: "USD",
                          })}
                        </span>
                        <span>
                          {currencyFormatter.format(
                            product.final_price * product.quantity,
                            { code: "USD" }
                          )}
                        </span>
                      </div>
                  ))}

                  <div className="divider"></div>

                  <div className="extra-charges">
                    <div className="product_row">
                      <span>Total Savings</span>
                      <span className="discount_price">
                        {currencyFormatter.format(-18, { code: "USD" })}
                      </span>
                    </div>

                    <div className="product_row">
                      <span>Delivery Fee</span>
                      <span>
                        {currencyFormatter.format(5, { code: "USD" })}
                      </span>
                    </div>

                    <div className="product_row">
                      <span>Tax and Charges</span>
                      <span>
                        {currencyFormatter.format(2, { code: "USD" })}
                      </span>
                    </div>
                    <div className="divider"></div>
                  </div>
                  <div className="product_row">
                    <span className="pay">To Pay</span>
                    <span className="total">
                      {currencyFormatter.format(
                        totalPrice + deliveryPrice + taxAndCharges,
                        { code: "USD" }
                      )}
                    </span>
                  </div>

                  <button type="button" className="checkout">
                    PLACE ORDER
                  </button>
                </div>
              </div>
            </div>
          </>
        ) : (
          "Your cart is empty!"
        )}
      </div>
    </div>
  );
};

export default Cart;
