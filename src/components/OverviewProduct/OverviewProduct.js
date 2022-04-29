import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './OverviewProduct.css';
import { removeFromDb } from '../../utilities/fakedb';


const OverviewProduct = ({ product, quantityIncrease, quantityDecrese }) => {


    return (

        <div className="card mb-3 height" >
            <div className="row g-0">
                <div className="col-4 col-md-2  me-md-3 me-lg-4 me-xl-0 col-lg-2 ">
                    <img src={product.img} className="img-fluid rounded-start p-1 design" alt="" />
                </div>
                <div className="col-8 col-md-4 col-lg-5">
                    <div className="card-body ms-1 ms-md-0">
                        <h5 className="card-title">{product.name}</h5>
                        <p className="card-text">Price: <span>${product.price}</span> </p>
                        <p className="card-text">Shipping Charge: <span>${product.shipping}</span></p>
                    </div>
                </div>

                <div className='col-12 col-md-4 col-lg-3 d-flex justify-content-center align-items-end gap-2 p-2 buttonGroup'>
                    <button onClick={() => { quantityDecrese(product._id) }} className='minus' > <FontAwesomeIcon icon={faMinus} /></button>

                    <input className='disply' type="number" id={product._id} defaultValue={product.quantity} />

                    <button onClick={() => { quantityIncrease(product._id) }} className='pluse'> <FontAwesomeIcon icon={faPlus} /></button>
                </div>

                <div className='col-12 col-md-1 col-lg-1 d-flex align-items-center justify-content-center pb-2 pb-lg-0'>
                    <button onClick={() => { removeFromDb(product._id) }} className='trash' id={product._id}>
                        <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default OverviewProduct;
