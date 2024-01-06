import React from "react";
import "./cart.css";

function Cart({ cartItems, setCartItems }) {
  console.log("cartItems:", cartItems);
  if (!cartItems) {
    return <p>Loading...</p>;
  }

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleRemove = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  return (
    <>
      <div className="container-fluid cart_container">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="row mt-5 gx-3">
              <div className="col-md-12 col-lg-8 col-11 mx-auto main_cart mb-lg-0 mb-5 shadow">
                <div className="card p-4">
                  <h2 className="py-4 font-weight-bold">
                    Cart ({totalItems} items)
                  </h2>

                  {cartItems.map((item) => (
                    <div key={item.id} className="row mb-4">
                      <div className="col-md-5 col-11 mx-auto bg-light d-flex justify-content-center align-items-center shadow product_img">
                        <img
                          src={item.images[0]}
                          className="img-fluid"
                          alt={item.title}
                        />
                      </div>
                      <div className="col-md-7 col-11 mx-auto px-4 mt-2">
                        <div className="row">
                          <div className="col-6 card-title">
                            <h1 className="mb-4 product_name">{item.title}</h1>
                            <p className="mb-2">
                              DESCRIPTION: {item.description}
                            </p>
                            <p className="mb-2">PRICE: ${item.price}</p>
                            <p className="mb-3">QUANTITY: {item.quantity}</p>
                            <p
                              style={{ color: "red", cursor: "pointer" }}
                              onClick={() => handleRemove(item.id)}
                            >
                              Remove
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-md-12 col-lg-4 col-11 mx-auto mt-lg-0 mt-md-5">
                <div className="right_side p-3 shadow bg-white">
                  <h2 className="product_name mb-5">The Total Amount Of</h2>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Product amount</p>
                    <p>
                      $<span id="product_total_amt">0.00</span>
                    </p>
                  </div>
                  <div className="price_indiv d-flex justify-content-between">
                    <p>Shipping Charge</p>
                    <p>
                      $<span id="shipping_charge">50.0</span>
                    </p>
                  </div>
                  <hr />
                  <div className="total-amt d-flex justify-content-between font-weight-bold">
                    <p>The total amount of (including VAT)</p>
                    <p>
                      $<span id="total_cart_amt">0.00</span>
                    </p>
                  </div>
                  <button className="btn btn-primary text-uppercase">
                    Checkout
                  </button>
                </div>
                <div className="discount_code mt-3 shadow">
                  <div className="card">
                    <div className="card-body">
                      <a
                        className="d-flex justify-content-between"
                        data-toggle="collapse"
                        href="#collapseExample"
                        aria-expanded="false"
                        aria-controls="collapseExample"
                      >
                        Add a discount code (optional)
                        <span>
                          <i className="fas fa-chevron-down pt-1"></i>
                        </span>
                      </a>
                      <div className="collapse" id="collapseExample">
                        <div className="mt-3">
                          <input
                            type="text"
                            name=""
                            id="discount_code1"
                            className="form-control font-weight-bold"
                            placeholder="Enter the discount code"
                          />
                          <small id="error_trw" className="text-dark mt-3">
                            code is thapa
                          </small>
                        </div>
                        <button
                          className="btn btn-primary btn-sm mt-3"
                          onClick={() => discount_code()}
                        >
                          Apply
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 shadow p-3 bg-white">
                  <div className="pt-4">
                    <h5 className="mb-4">Expected delivery date</h5>
                    <p>July 27th 2020 - July 29th 2020</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
