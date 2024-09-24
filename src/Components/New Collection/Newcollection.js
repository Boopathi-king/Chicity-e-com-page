import React from 'react'
import './Newcollection.css'
import imagetwo from './../../Assets/Image 2.jpg'
import imagethree from './../../Assets/Image 3.jpg'
import imagefour from './../../Assets/Image 4.jpg'

const CollectionCard = ({ image, title, description }) => {
    return (
      <div className="collection-card">
        <img src={image} alt={title} className="collection-image" />
        <div className="collection-info">
          <h2>{title}</h2>
          <p>{description}</p>
          <button className="explore-button">Explore Now</button>
        </div>
      </div>
    );
  };
  

const Newcollection = () => {
  return (
    <div className="collection-container">
    <h1>New Collection of Chicity</h1>
    
    <div className="collection-grid">
      <CollectionCard
        image={imagetwo}
        title="Women's Hot Collection"
        description="Lorem ipsum dolor sit amet consectetur. Nisi imperdiet ac nulla sed neque suspendisse purus. Nullam enim id ipsum in venenatis vitae libero."
      />
      <CollectionCard
        image= {imagethree}
        title="Sunglasses Collection"
        description="Lorem ipsum dolor sit amet consectetur. Nisi imperdiet ac nulla sed neque suspendisse purus. Nullam enim id ipsum in venenatis vitae libero."
      />
      <CollectionCard
        image= {imagefour}
        title="Men's Hot Collection"
        description="Lorem ipsum dolor sit amet consectetur. Nisi imperdiet ac nulla sed neque suspendisse purus. Nullam enim id ipsum in venenatis vitae libero."
      />
    </div>
  </div>
  )
}

export default Newcollection