import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
        <img classname="checkoutProduct__image" src={image} />
      <div className="checkoutProduct__info">
        <p classname="checkoutProduct__title">{title}</p>
        <p classname="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p classname="checkoutProduct__rating">
          {Array(rating)
            .fill()
            //the values in the map() is for cases when no rating is given
            .map((_, i) => (
              <p>⭐️</p>
            ))}
        </p>
        <button onClick={removeFromBasket}>Remove From Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
