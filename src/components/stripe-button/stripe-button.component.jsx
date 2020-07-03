import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; // stripe wants value in cents
  const publishableKey = 'pk_test_wavztYqJeSYeINjULMo72sz8000rOd7D1K';
  const onToken = (token) => {
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Ecommerce Clothing'
      billingAddress
      shippingAddress
      image='https://sendeyo.com/up/d/f3eb2117da'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
