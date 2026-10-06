import AddProduct from "../components/AddProduct";
import Product from "../components/Product";
import { PRODUCTS } from "../constants/product";
import { useState } from "react";

const ProductList = () => {
  // initialisation du state products avec la constante PRODUCTS
  const [products, setProducts] = useState(PRODUCTS);
  // initialisation du state newProduct avec un objet vide

//   console.log("rendering ProductList");

  const handleAddProduct = (newProduct) => {
    // ajouter à liste
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
    // reset newProduct
  };
  return (
    <div>
      <AddProduct onAddProduct={handleAddProduct} />
      <ul className="products">
        {products?.map(({ id, name, price }) => (
          <Product
            onAddToCart={() => console.log(`product:${id} ${name}`)}
            key={id}
            id={id}
            name={name}
            price={price}
          />
        ))}
        <div>
          <button
            onClick={() => setProducts(products.filter(({ id }) => id !== 1))}
          >
            Supprimer le produit 1
          </button>
          <button
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
      </ul>
    </div>
  );
};

export default ProductList;
