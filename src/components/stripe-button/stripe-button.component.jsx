import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token => {
    console.log(token);
    alert('Payement Successfull')
}

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publihableKey = 'pk_test_51Hra5uIERojE4LkiW7FHE93JKw8ZMooFzZjSSFCEd78Xz0vuvWBE2ONXTK8QzipxXDW0StqFtVUDGuOqX49WbF9o00OKu6UIW7';
    return (
        <StripeCheckout
            label='Pay Now'
            name='Clothing Ltd.'
            billingAddress
            shippingAddress
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publihableKey}
        />
    ); 

}

export default StripeCheckoutButton;