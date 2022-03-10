import inventory from "./inventory";
import InventoryCard from "../components/InventoryCard";
import React from "react";
import CartContent from "./CartContent";

const Shop = () => {
  const inventoryElements = inventory.map(item => {
    return (
      <InventoryCard
        name={item.name}
        img={item.img}
        price={item.price}
        color={item.color}
        sizes={item.sizes}
        id={item.id}
        key={item.id}
        addItemToCart={addItemToCart}
      />
    );
  });

  const [cartItems, setCartItems] = React.useState([]);

  function addItemToCart(event, id) {
    const selectedItem = inventory.find(item => item.id === id);
    const alreadyInCart = cartItems.filter(item => item.id === selectedItem.id);

    if (cartItems.length === 0) {
      selectedItem.qty = 1;
      setCartItems([selectedItem]);
    } else if (alreadyInCart.length === 1) {
      const updatedCartItems = cartItems.map(item => {
        if (item.id === selectedItem.id) {
          item.qty = item.qty + 1;
          return item;
        } else {
          item.qty = item.qty;
          return item;
        }
      });
      setCartItems(updatedCartItems);
    } else {
      selectedItem.qty = 1;
      setCartItems([...cartItems, selectedItem]);
    }
  }

  function increaseCartQty(event, id) {
    const selectedItem = cartItems.find(item => item.id === id);
    const updatedCart = cartItems.map(item => {
      if (item.id === selectedItem.id) {
        item.qty = item.qty + 1;
        return item;
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  function decreaseCartQty(event, id) {
    const selectedItem = cartItems.find(item => item.id === id);
    const updatedCart = cartItems.map(item => {
      if (item.id === selectedItem.id) {
        item.qty = item.qty > 1 ? (item.qty = item.qty - 1) : (item.qty = 1);
        return item;
      } else {
        return item;
      }
    });
    setCartItems(updatedCart);
  }

  function removeFromCart(event, id) {
    const selectedItem = cartItems.find(item => item.id === id);
    const newCartItems = cartItems.filter(item => item.id != selectedItem.id);
    setCartItems(newCartItems);
  }
  function cartTotal(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].qty * cartItems[i].price;
    }
    return total;
  }

  function cartTotalItems(cartItems) {
    let total = 0;
    for (let i = 0; i < cartItems.length; i++) {
      total += cartItems[i].qty;
    }
    return total;
  }

  const cartItemElements = cartItems.map(item => {
    return (
      <CartContent
        name={item.name}
        img={item.img}
        price={item.price}
        color={item.color}
        id={item.id}
        key={item.id}
        qty={item.qty}
        increaseCartQty={increaseCartQty}
        decreaseCartQty={decreaseCartQty}
        removeFromCart={removeFromCart}
      />
    );
  });

  // function toggleCart() {
  //   // const shoppingCart = document.querySelector(".shopping-cart");
  //   // const shopCover = document.querySelector(".shop-cover");
  //   // shoppingCart.classList.add("hidden");
  //   // shopCover.classList.add("hidden-cover");
  // }
  function toggleCart() {
    const shoppingCart = document.querySelector(".shopping-cart");
    const shopCover = document.querySelector(".shop-cover");

    if (shoppingCart.classList.contains("hidden")) {
      shoppingCart.classList.remove("hidden");
      shopCover.classList.remove("hidden-cover");
    } else {
      shoppingCart.classList.add("hidden");
      shopCover.classList.add("hidden-cover");
    }
  }

  return (
    <div className="container-shop-page">
      <div className="shop-cover hidden-cover" onClick={toggleCart}></div>
      <div className="shopping-cart hidden">
        <h2>Cart Contents ({cartTotalItems(cartItems)})</h2>
        {cartItemElements}
        <div className="shopping-cart-totals">
          <h2>
            Total: ${cartTotal(cartItems).toFixed(2)} (inc. $
            {(cartTotal(cartItems) * 0.1).toFixed(2)} GST)
          </h2>

          <div className="btn-checkout-container">
            <button className="btn-checkout">PROCEED TO CHECKOUT</button>
          </div>
        </div>
      </div>
      <div className="shop-container">
        {inventoryElements}
        <div className="shopping-cart-icon" onClick={toggleCart}>
          <img src="../images/cart-white.svg" />
          VIEW CART ({cartTotalItems(cartItems)})
        </div>
      </div>
    </div>
  );
};

export default Shop;
