import React from 'react';
import './Products.css'

const Products = ({ product, handelAddToCart, cart }) => {
    let { _id, img, name, price, seller, ratings } = product;
    const exist = cart.find(item => item._id === _id)


    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="card-img-top p-1" alt="" />
                <div className="card-body">
                    <h5 className="card-title title">{name}</h5>
                    <h5 className="card-title price">Price: ${price}</h5>
                </div>
                <div className='card-body2'>
                    <p className="card-text">Manufacturer: {seller}</p>
                    <p className="card-text">Rating: {ratings} star</p>
                </div>

                <div className="card-footer text-center">
                    {
                        exist ?
                            <button style={{ backgroundColor: '#ff9900' }} id={_id} disabled onClick={() => { handelAddToCart(_id) }}>
                                <p>
                                    Added to Cart
                                </p>
                            </button>
                            :
                            <button id={_id} onClick={() => { handelAddToCart(_id) }}>
                                <p>
                                    Add to Cart &nbsp;
                                    <i className="fa-solid fa-cart-plus"></i>
                                </p>
                            </button>

                    }

                </div>
            </div>
        </div>
    );
};

export default Products;