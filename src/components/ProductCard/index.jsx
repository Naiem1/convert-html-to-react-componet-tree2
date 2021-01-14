import React from 'react';

const ProductCard = ({ product }) => {
  const { img, name, price } = product;
  return (
    <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12">
        <div className="product-box">
          <i>
            <img
              src={img}
              alt="product"
            />
          </i>
          <h3>{name}</h3>
          <span>${ price }</span>
        </div>
    </div> 
  );
};

export default ProductCard;