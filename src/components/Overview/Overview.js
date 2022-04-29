import React, { useEffect, useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import CheckoutCart from '../CheckoutCart/CheckoutCart';
import Modal from '../Modal/Modal';

import OverviewProduct from '../OverviewProduct/OverviewProduct';

import './Overview.css';

const Overview = ({ products }) => {
    console.log = console.warn = console.error = () => { };
    useEffect(() => {
        document.title = "Overview";
    }, [])

    const storedCart = getStoredCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const savedCart = [];
    const [tempCart, setTempCart] = useState([]);

    //load Product Data

    for (const id in storedCart) {
        const addedProduct = products.find(product => product._id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            savedCart.push(addedProduct);
        }
    }

    useEffect(() => {
        setTempCart(savedCart);
    }, [savedCart])


    const quantityIncrease = id => {
        let shoppingCart = {};

        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('Ema_John');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }

        // add quantity
        const quantity = shoppingCart[id];
        if (quantity) {
            const newQuantity = quantity + 1;
            shoppingCart[id] = newQuantity;
        }
        else {
            shoppingCart[id] = 1;
        }
        localStorage.setItem('Ema_John', JSON.stringify(shoppingCart));
        document.getElementById(id).value = shoppingCart[id];

    }

    const quantityDecrese = id => {

        let shoppingCart = {};

        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('Ema_John');
        if (storedCart) {
            shoppingCart = JSON.parse(storedCart);
        }


        // add quantity
        const quantity = shoppingCart[id];
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            shoppingCart[id] = newQuantity;
        }

        localStorage.setItem('Ema_John', JSON.stringify(shoppingCart));
        document.getElementById(id).value = shoppingCart[id];
    }



    return (
        <div className='container mt-2 mt-lg-5'>
            <Modal />
            <div className='row gap-5 p-2 p-lg-0'>
                <div className="savedProductList col-12 col-lg-8 order-2 order-lg-1">
                    <div className="row row-cols-1 mt-0 mt-lg-5">
                        {
                            savedCart.map(product => <OverviewProduct product={product} key={product._id} quantityIncrease={quantityIncrease} quantityDecrese={quantityDecrese} />)
                        }
                    </div>
                </div>
                <div className="productCart h-100 sticky-lgg-top col-12 col-lg-3 order-1 order-lg2">
                    <CheckoutCart cart={tempCart} />
                </div>

            </div>


        </div>
    );
};

export default Overview;