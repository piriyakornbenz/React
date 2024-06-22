import React from 'react';
import './Cart.css';

function Cart({ cartItems, onHideCart, onRemoveItem, onBuy }) {
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.product.price * item.countAmount;
    }, 0);
  };

  return (
    <div className={`cart ${cartItems.length > 0 ? 'cart-open' : ''}`}>
      <div className="cart-header">
        <h2>Cart</h2>
        <button className="cart-close-btn" onClick={onHideCart}>
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
        
          <div className="cart-content">
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.product.thumbnailUrl} alt={item.product.name} />
                  <div className="item-details">
                    <h4>{item.product.name}</h4>
                    <p>Size: {item.size}</p>
                    <p>Quantity: {item.countAmount}</p>
                    <p>Price: ${item.product.price}</p>
                  </div>
                  <button 
                    className="btn btn-danger" 
                    onClick={() => onRemoveItem(index)}
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <h3>Total Price: </h3>
              <h3 className='text-danger'>${calculateTotalPrice().toFixed(2)}</h3>
            </div>
            <button className="btn btn-success w-100" onClick={onBuy}>Check out</button>
          </div>

        </>
      )}
    </div>
  );
}

export default Cart;
