import AddProduct from "../components/AddProduct";
import Product from "../components/Product";
import { PRODUCTS } from "../constants/product";
import { useState } from "react";

const ProductList = () => {
  // initialisation du state products avec la constante PRODUCTS
  const [products, setProducts] = useState(PRODUCTS);

  const handleAddProduct = (newProduct) => {
    // ajouter à liste (Date.now() évite les id en double après une suppression)
    setProducts([...products, { ...newProduct, id: Date.now() }]);
  };

  return (
    <section className="product-list">
      <AddProduct onAddProduct={handleAddProduct} />

      <div className="toolbar">
        <p className="toolbar-count">
          {products.length} produit{products.length > 1 ? "s" : ""}
        </p>
        <div className="toolbar-actions">
          <button
            className="btn btn-ghost"
            onClick={() => setProducts(products.filter(({ id }) => id !== 1))}
          >
            Supprimer le produit 1
          </button>
          <button
            className="btn btn-ghost"
            onClick={() =>
              setProducts(
                products.map((p) =>
                  p.id === 2 ? { ...p, name: "Produit Modifié" } : p,
                ),
              )
            }
          >
            Modifier le produit 2
          </button>
        </div>
      </div>

      {products.length === 0 ? (
        <p className="empty">Aucun produit pour le moment.</p>
      ) : (
        <ul className="products">
          {products.map(({ id, name, price, category, rating, image }) => (
            <Product
              onAddToCart={() => console.log(`product:${id} ${name}`)}
              key={id}
              name={name}
              price={price}
              category={category}
              rating={rating}
              image={image}
            />
          ))}
        </ul>
      )}
    </section>
  );
};

export default ProductList;
