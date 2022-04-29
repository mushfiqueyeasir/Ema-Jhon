import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css';
import Cart from '../Cart/Cart';
import { addToDb, getStoredCart } from '../../utilities/fakedb.js';
import { useParams } from 'react-router-dom';


const Shop = ({ displayProducts, allProducts }) => {

    const { product } = useParams();
    const [page, setPage] = useState(0);
    const [size, setSize] = useState(6);
    const [productCount, setProductCount] = useState(allProducts.length);

    useEffect(() => {
        if (displayProducts.length > 0) {
            setProductCount(displayProducts.length);
        }
    }, [displayProducts.length])



    let [cart, setCart] = useState([]);
    const storedCart = getStoredCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const savedCart = [];


    //Delete Local storage data and update UI
    const deleteShoppingCart = () => {
        let backupCart = {};
        //get the shopping cart from local storage
        const storedCart = localStorage.getItem('Ema_John');
        if (storedCart) {
            backupCart = JSON.parse(storedCart);
        }
        if (backupCart) {
            for (const product of cart) {
                try {
                    let button = document.getElementById(product._id);
                    button.disabled = false;
                    button.innerHTML = `<p>Add to Cart <i className="fa-solid fa-cart-plus"></i></p>`;
                    button.style.backgroundColor = "#FFE0B3";

                } catch (error) { }
            }
        }
        localStorage.removeItem('Ema_John');
        setCart([]);
    }


    //load saved items form local storage
    useEffect(() => {
        for (const _id in storedCart) {
            const addedProduct = allProducts.find(product => product._id === _id);

            if (addedProduct) {

                try {
                    let product = document.getElementById(addedProduct._id);
                    product.disabled = true;
                    product.innerHTML = `<p>Added to Cart <i className="fa-solid fa-cart-plus"></i></p>`;
                    product.style.backgroundColor = "#ff9900";

                } catch (error) {

                }
                const quantity = storedCart[_id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct);
            }
        }

        const key = '_id';

        const arrayUniqueByKey = [...new Map(savedCart.map(item =>
            [item[key], item])).values()];

        setCart(arrayUniqueByKey);

    }, [allProducts])



    //add to cart button clicked
    const handelAddToCartClicked = (id) => {

        let product = document.getElementById(id);
        product.disabled = true;

        product.innerHTML = `<p>Added to Cart <i className="fa-solid fa-cart-plus"></i></p>`;
        product.style.backgroundColor = "#ff9900";

        if (cart.find(item => item._id === id)) {
            ;

        } else {
            setCart([...cart, allProducts.find(product => product._id === id)]);
            addToDb(id);
        }
    }

    return (
        <div id='product' className='mb-5'>

            <div className='row gx-0 px-3 px-lg-0'>
                <div className='col-0 col-lg-1  order-4 order-lg-1'>
                </div>
                <div className="products-container mt-5 col-12  col-lg-7 col-xl-8  order-3 order-lg-2">
                    {
                        product ?
                            <>
                                {
                                    displayProducts.length ?
                                        <></>
                                        :
                                        <h2 className='text-center mb-3 text-danger'>No Searched Product Found!</h2>
                                }
                            </>
                            :
                            <></>
                    }

                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            {
                                [...Array(Math.ceil(productCount / size)).keys()].map(number => <li key={number} className="page-item">
                                    <button onClick={() => setPage(number)} className="page-link">{number + 1}</button>
                                </li>
                                )
                            }

                        </ul>
                    </nav>

                    <div className='d-flex justify-content-end pe-3'>
                        <div className="btn-group mb-3">
                            <button className="btn btn-warning dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Products
                            </button>
                            <ul className="dropdown-menu">
                                <li><button onClick={() => setSize(6)} className="dropdown-item">6</button></li>
                                <li><button onClick={() => setSize(12)} className="dropdown-item">12</button></li>
                                <li><button onClick={() => setSize(18)} className="dropdown-item">18</button></li>
                            </ul>
                        </div>

                    </div>


                    <div className="row row-cols-1 row-cols-md-2 row-cols-xl-3 g-lg-4 g-3 mb-5">
                        {displayProducts.length ?
                            displayProducts.slice((page) * size, (page + 1) * size).map(product => <Products product={product} key={product._id} handelAddToCart={handelAddToCartClicked} cart={cart} />)
                            :
                            allProducts.slice((page) * size, (page + 1) * size).map(product => <Products product={product} key={product._id} handelAddToCart={handelAddToCartClicked} cart={cart} />)
                        }
                    </div>




                </div>
                <div className=' col-0 col-lg-1   order-2 order-lg-3'>
                </div>

                <div className="cart-container sticky-lgg-top  h-100 p-5 col-0 col-lg-3 col-xl-2  mt-lg-0 mt-3  order-1 order-lg-4 rounded-3">
                    <Cart cart={cart} deleteShoppingCart={deleteShoppingCart} />
                </div>

            </div>

        </div >
    );
};

export default Shop;