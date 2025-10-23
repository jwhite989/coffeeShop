import { useState } from "react";
import Button from "./Button";
import "../styles/Card.css";

function Card({ title, description, image, price, category }) {
  const [quantity, setQuantity] = useState(0);

  const addDrink = () => setQuantity((prevQuantity) => prevQuantity + 1);
  const minusDrink = () => setQuantity((prevQuantity) => prevQuantity - 1);
  const numericPrice = parseFloat(price.replace("$", ""));

  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="title">{title}</h3>
      <p className="category">Available: {category}</p>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
      {quantity > 0 && (
        <>
          <p className="quantity">Quantity: {quantity}</p>
          <p className="total">
            Total: ${(quantity * numericPrice).toFixed(2)}
          </p>
        </>
      )}
      {quantity === 0 ? (
        <Button className="order-button" text="Order Now" onClick={addDrink} />
      ) : (
        <div className="quantity-controls">
          <Button className="adjust-button" text="-" onClick={minusDrink} />
          <Button className="adjust-button" text="+" onClick={addDrink} />
        </div>
      )}
    </div>
  );
}

export default Card;
