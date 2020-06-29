import React from 'react';
import { connect } from 'react-redux';

import './cart-dropdown.styles.scss';

import CustomButton from '../custom-button/custom-button.component.jsx';
import CartItem from '../cart-item/cart-item.component.jsx';

const CartDropDown = ({ cartItems }) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {cartItems.map((cartItem) => (
        <CartItem key={cartItem.id} item={cartItem} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});

export default connect(mapStateToProps)(CartDropDown);
