import React from "react";

const DemoPremium = () => {
  const title = "Démostration JSX";
  const stock = 0;
  const products = [
    { id: 1, name: "Produit 1", price: 100 },
    { id: 2, name: "Produit 2", price: 200 },
  ];
 
  return (
    <div>
      {/* Variable */}
      <h1>{title}</h1>
      {/* Expression  */}
      <p>
        {stock > 0 ? (
          <p style={{ color: "green" }}>"En stock" </p>
        ) : (
          <p style={{ color: "red" }}>"Rupture de stock"</p>
        )}
      </p>
      {/* Loop */}

      <div className="products">
        {products.map(({ id, name, price }) => (
          <React.Fragment className="product" key={id}>
            <h2>{name}</h2>
            <p>{price} €</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default DemoPremium;
