import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";
import { useStateValue } from "./StateProvider";


function Checkout() {

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          alt="#####"
        />

        <div>
          <h2 className="checkout__title">YOUR SHOPPING BASKET</h2>
              {/*Check-out product */}
              {basket.map(item => (
                <CheckoutProduct
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
