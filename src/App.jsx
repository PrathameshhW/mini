import React, { useEffect, useState } from "react";
import "./App.css";
import CartPopup from "./Components/CartPopUp/CartPopup";

const App = () => {
  const API =
    "https://boppotech.github.io/react-task-json.github.io/reactjob.json";
  const [data, setData] = useState([]);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      fetch(API)
        .then((res) => res.json())
        .then((d) => setData(d))
        .catch((err) => console.log(err));
    };
    fetchData();
  }, []);

  const openCart = () => {
    setIsOpenCart(true);
  };

  const closeCart = () => {
    setIsOpenCart(false);
  };

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <div className="App">
      <div className="container">
        {data.map((item, i) => {
          return (
            <div className="card" key={i}>
              <img
                src={item.images.edges[0].node.src}
                alt={item.title}
                width={200}
              />
              <span>{item.title}</span>
              <span>
                {item.price.currenCode}&nbsp;{item.price.amount}
              </span>
              {item.quantity <= 10 ? (
                <span>Quantity is less, cannot add to cart</span>
              ) : (
                <button
                  onClick={() => {
                    openCart();
                    addToCart(item);
                  }}
                >
                  Add to cart
                </button>
              )}
            </div>
          );
        })}
      </div>
      {isOpenCart && <CartPopup cartItems={cartItems} onClose={closeCart} />}
    </div>
  );
};

export default App;
