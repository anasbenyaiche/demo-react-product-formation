import { useState } from "react";

const EMPTY_PRODUCT = { name: "", price: "", image: "" };

const AddProduct = ({ onAddProduct }) => {
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT);

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name.trim()) return;
    // ajouter à liste
    onAddProduct({ ...newProduct, price: Number(newProduct.price) || 0 });
    // reset newProduct
    setNewProduct(EMPTY_PRODUCT);
  };

  return (
    <form className="add-product" onSubmit={handleAddProduct}>
      <h2>Ajouter un produit</h2>
      <div className="add-product-fields">
        <label>
          Nom
          <input
            name="name"
            onChange={handleChange}
            value={newProduct.name}
            type="text"
            placeholder="Nom du produit"
            required
          />
        </label>
        <label>
          Prix (€)
          <input
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            type="number"
            min="0"
            step="0.01"
            placeholder="0.00"
          />
        </label>
        <label>
          Image (URL)
          <input
            name="image"
            value={newProduct.image}
            onChange={handleChange}
            type="url"
            placeholder="https://… (optionnel)"
          />
        </label>
        <button className="btn btn-primary" type="submit">
          Ajouter
        </button>
      </div>
    </form>
  );
};

export default AddProduct;
