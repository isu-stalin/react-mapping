import React from "react";
import products from "../../static/index";
import "./Product.css";
import Stars from "../../assets/stars.svg";
const Product = () => {
  return (
    <section className="products">
      <p className="subtitle">Find your favourite smart watch.</p>
      <h2 className="title">Our Latest Products</h2>

      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id}>
            <div className="img-wrapper">
              <img src={product.image} alt={product.title} className="watch-images" />
            </div>
            <h3 className="product-title">{product.title}</h3>
            <div className="rating">
                <img src={Stars} alt="Star" />              
            </div>
            <p className="price">
              {product.oldPrice && <del>${product.oldPrice}</del>}
              <span className="new-price">${product.newPrice}</span>
            </p>
          </div>
        ))}
      </div>

      <button className="view-more">View More</button>
    </section>
  );
};

export default Product;
