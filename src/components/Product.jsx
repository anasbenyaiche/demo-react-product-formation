const Product = ({
  children,
  id = 1,
  name = "Unknown Product",
  price = 0,
  onAddToCart,
}) => {
  return (
    <li className="product" key={id}>
      <h2>{name}</h2>
      <p>{price} €</p>
      <button onClick={onAddToCart}>Add to Cart</button>
      <div>{children || name}</div>
    </li>
  );
};

export default Product;
