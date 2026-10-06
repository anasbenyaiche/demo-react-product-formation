import { useState } from 'react';

const AddProduct = ({onAddProduct}) => {
      const [newProduct, setNewProduct] = useState({ name: "", price: 0 });

        const handleChange = (e) => {
    console.log(e.target.name, e.target.value);
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
// text-decoration-line: line-through;
  const handleAddProduct = () => {
    // ajouter à liste

    onAddProduct(newProduct);
    // reset newProduct
    setNewProduct({ name: "", price:0});
  };
  return (
          <div className="product">
        <label htmlFor="">name</label>
        <input
          name="name"
          onChange={handleChange}
          // cible les changements de l'input et met à jour le state newProduct
          value={newProduct.name}
          type="text"
          placeholder="Nom du produit"
        />
        <label htmlFor="">price</label>
        <input
          name="price"
          // cible les changements de l'input et met à jour le state newProduct
          value={newProduct.price}  
          onChange={handleChange}
          type="text"
          placeholder="prix du produit"
        />
        <button onClick={() => handleAddProduct()}>Ajouter</button>
      </div>
  )
}

export default AddProduct