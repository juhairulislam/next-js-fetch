import React from 'react';

const Products = ({product}) => {

    const {id , name , price , rating , category} = product

    return (
        
<div className="card w-96 bg-base-100 card-md shadow-sm">
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>{category}</p>
    <p className='font-bold'>$ {price}</p>
    <div className="justify-end card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default Products;