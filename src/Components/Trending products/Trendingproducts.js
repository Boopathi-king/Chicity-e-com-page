import React from 'react';
import './Trendingproducts.css';
import britcoImage from './../../Assets/Britco.png';
import glitImage from './../../Assets/Gilt.png';
import popsugarImage from './../../Assets/PopSugar.png';
import huffpostImage from './../../Assets/huffpost.png';

const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Shimmery Shirt',
      price: 200.00,
      imageUrl: 'shimmery-shirt-image-url',
    },
    {
      id: 2,
      name: 'Check Shirt',
      price: 300.00,
      imageUrl: 'check-shirt-image-url',
    },
    {
      id: 3,
      name: 'Sweater Set',
      price: 200.00,
      imageUrl: 'sweater-set-image-url',
    }
  ];

  const logos = [
    { id: 1, name: 'Brit+Co', logoUrl: {britcoImage} },
    { id: 2, name: 'GILT', logoUrl: {glitImage} },
    { id: 3, name: 'PopSugar', logoUrl: {popsugarImage} },
    { id: 4, name: 'HuffPost', logoUrl: {huffpostImage} },
  ];

  return (
    <div className="trending-products">
      <h2>Trending Products</h2>
      <div className="products">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-image" />
            <h3>{product.name}</h3>
            <p>${product.price.toFixed(2)}</p>
            <button className="cart-button">🛒</button>
          </div>
        ))}
      </div>

      <div className="logos">
        {logos.map(logo => (
          <img key={logo.id} src={logo.logoUrl} alt={logo.name} className="logo-image" />
        ))}
      </div>
    </div>
  );
};

export default TrendingProducts;
