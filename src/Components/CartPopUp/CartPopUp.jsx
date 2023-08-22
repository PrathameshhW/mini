import React from "react";
import "./CartPopUp.css";

const CartPopup = ({ cartItems, onClose }) => {
  return (
    <div className="cart-popup">
      <div className="cart-content">
        <h2>Your Cart</h2>
        {cartItems.map((item, i) => {
          return (
            <div className="cart" key={i}>
              <img
                src={item.images.edges[0].node.src}
                alt={item.title}
                width={20}
              />
              <span>{item.title}</span>
              <span>{item.price.amount}</span>
            </div>
          );
        })}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default CartPopup;
