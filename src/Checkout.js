import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';

function Checkout() {
  const [{ user, basket}] = useStateValue();
  
  return (
    <div className='checkout'>
      <div className='checkout__left'>
        <img className='checkout__ad' src="/images/checkout-heading.jpg" alt="" />
        <div>
          <h3>Namaste, {user?.email}</h3>
          <h2 className='checkout__title'>
            Your shopping Basket
          </h2>
          {basket.map((item, index) => (
            <CheckoutProduct
              key={index}
              id={item.id}
              title={item.title}
              price={item.price}
              rating={item.rating}
              image={item.image}
            />
          ))}
        </div>
      </div>
      <div className='checkout__right'>
        <Subtotal />
      </div>
    </div>
  )
}

export default Checkout