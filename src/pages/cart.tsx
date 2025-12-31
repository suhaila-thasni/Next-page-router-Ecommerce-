


import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div style={{ marginTop: "80px", backgroundColor: "white" }} className="container p-4">
      <h2 style={{ marginTop: "150px" }}>Your Cart</h2>

      {cart.length === 0 ? (
        <h4>Cart is empty</h4>
      ) : (
        cart.map((product) => (
          <div key={product.id} className="card p-3 my-2 shadow-sm">
            <div className="row align-items-center">

              <div className="col-md-2 text-center">
                <img
                  src={product.image}
                  alt={product.title}
                  className="img-fluid"
                  style={{ maxHeight: "120px", objectFit: "contain" }}
                />
              </div>

              <div className="col-md-6">
                <h5>{product.title}</h5>
                <p>Price: ${product.price}</p>
                <p>Quantity: {product.quantity}</p>
              </div>

              <div className="col-md-4 text-end">
                <button
                  className="btn btn-danger"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </button>
              </div>

            </div>
          </div>
        ))
      )}
    </div>
  );
}

