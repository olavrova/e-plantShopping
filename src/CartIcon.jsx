import React from 'react';
import { useSelector } from 'react-redux';

const CartIcon = ({ onClick }) => {
  const cartItems = useSelector(state => state.cart.items);
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div style={{ position: 'relative' }}>
      <a href="#" onClick={onClick}>
        {/* Cart SVG or icon */}
        <svg width="32" height="32" /* ... */></svg>
        <span style={{
          position: 'absolute',
          top: 0,
          right: 0,
          background: 'red',
          color: 'white',
          borderRadius: '50%',
          padding: '2px 6px',
          fontSize: '14px'
        }}>
          {totalItems}
        </span>
      </a>
    </div>
  );
};

export default CartIcon;
