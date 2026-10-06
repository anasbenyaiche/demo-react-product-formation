import ProductList from "../containers/ProductList";
import hero from "../assets/hero.png";

export const ProductPage = () => {
  return (
    <main className="product-page">
      <header className="hero">
        <div className="hero-text">
          <span className="hero-tag">Nouvelle collection</span>
          <h1>Notre boutique</h1>
          <p>
            Découvrez une sélection de produits choisis avec soin, au meilleur
            prix.
          </p>
        </div>
        <img className="hero-image" src={hero} alt="" />
      </header>
      <ProductList />
    </main>
  );
};
export default ProductPage;
