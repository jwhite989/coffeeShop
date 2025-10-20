function Card({ title, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <h3 className="title">{title}</h3>
      <p className="description">{description}</p>
    </div>
  );
}

export default Card;
