import Button from "./Button";

function Card({ title, description, image, price, category }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="title">{title}</h3>
      <p className="category">Available: {category}</p>
      <p className="description">{description}</p>
      <p className="price">{price}</p>
      <Button className="order-button" text="Order Now" />
    </div>
  );
}

export default Card;
