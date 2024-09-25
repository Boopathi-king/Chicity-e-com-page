import React from 'react';
import './Trendingproducts.css';
import britcoImage from './../../Assets/Britco.png';
import glitImage from './../../Assets/Gilt.png';
import popsugarImage from './../../Assets/PopSugar.png';
import huffpostImage from './../../Assets/huffpost.png';
import imageFive from './../../Assets/Shimmers.jpg';
import imageSix from './../../Assets/Check shirt.webp';
import imageSeven from './../../Assets/Switer set.jpg';
import { TiShoppingCart } from "react-icons/ti";


const TrendingProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Shimmery Shirt',
      price: 200.00,
      imageUrl: imageFive,
    },
    {
      id: 2,
      name: 'Check Shirt',
      price: 300.00,
      imageUrl: imageSix,
    },
    {
      id: 3,
      name: 'Sweater Set',
      price: 200.00,
      imageUrl: imageSeven,
    }
  ];

  const logos = [
    { id: 1, name: 'Brit+Co', logoUrl: britcoImage },
    { id: 2, name: 'GILT', logoUrl: glitImage },
    { id: 3, name: 'PopSugar', logoUrl: popsugarImage },
    { id: 4, name: 'HuffPost', logoUrl: huffpostImage },
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
            {/* <button className="cart-button">🛒</button> */}
            <TiShoppingCart className="cart-icon" />
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
