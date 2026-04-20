import Products from '@/Components/Products';
import React from 'react';

const getProducts = async () =>{

    const res = await fetch('http://localhost:5000/products',{
        cache:"force-cache"
    }) ;
    return res.json() ;
}

const ProductsPage =async () => {

    const products = await getProducts()

    return (
        <div >
            <h1>Products : {products.length}</h1>
            <div className='grid grid-cols-3 gap-10'>
                {
                    products.map(product => <Products key={product.id} product={product}></Products>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;