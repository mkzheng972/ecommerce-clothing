import React from 'react';

import CustomButton from '../custom-button/custom-button.component.jsx';

import './cart-dropdown.styles.scss';

const CartDropDown = () => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      <CustomButton>Go to checkout</CustomButton>
    </div>
  </div>
);

export default CartDropDown;
