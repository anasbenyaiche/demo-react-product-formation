import { FALLBACK_IMAGE } from "../constants/product";

const Product = ({
  children,
  name = "Unknown Product",
  price = 0,
  category,
  rating,
  image,
  onAddToCart,
}) => {

  
  return (
    <li className="product">
      <div className="product-image">
        <img
          src={image || FALLBACK_IMAGE}
          alt={name}
          loading="lazy"
          // si l'image ne charge pas, on affiche l'image de secours
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
        {category && <span className="product-badge">{category}</span>}
      </div>
      <div className="product-body">
        <h2 className="product-name">{name}</h2>
        {rating && (
          <p className="product-rating" aria-label={`Note ${rating} sur 5`}>
            {"★".repeat(Math.round(rating))}
            {"☆".repeat(5 - Math.round(rating))}
            <span>{rating}</span>
          </p>
        )}
        {children && <div className="product-extra">{children}</div>}
        <div className="product-footer">
          <p className="product-price">{Number(price).toFixed(2)} €</p>
          <button className="btn btn-primary" onClick={onAddToCart}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </li>
  );
};

export default Product;
