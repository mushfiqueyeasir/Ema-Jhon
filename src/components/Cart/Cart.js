import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import './Cart.css';
import { Link } from 'react-router-dom';

const Cart = ({ cart, deleteShoppingCart }) => {



    let total = 0;
    for (const product of cart) {
        total += (product.price);
    }

    let shipingCharge = 0;
    if (total) {
        for (const product of cart) {
            shipingCharge += product.shipping;
        }
    }

    let tax = total * 0.1;

    const gotoOverview = () => {

    }


    return (
        <div>
            <h5 className='title text-center mb-5'>Order Summary</h5>
            <p className='item-info'>Selected Items: {cart.length}</p>
            <p className='item-info'>Total Price: ${total}</p>
            <p className='item-info'>Total Shipping Charge: ${shipingCharge}</p>
            <p className='item-info'>Tax: ${tax.toFixed(2)}</p>

            <h5 className='mt-'>Grand Total: ${(total + shipingCharge + tax).toFixed(2)}</h5>
            <div className='d-flex flex-column'>
                <button onClick={deleteShoppingCart} className='clear '>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
                <Link to='/overview' onClick={gotoOverview} className='review w-100'>Review Order  <FontAwesomeIcon icon={faArrowRightLong} /></Link>

            </div>


        </div>
    );
};

export default Cart;