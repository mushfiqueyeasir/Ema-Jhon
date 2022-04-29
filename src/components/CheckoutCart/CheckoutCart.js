import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan, faArrowRightLong } from '@fortawesome/free-solid-svg-icons'
import './CheckoutCart.css';
import { deleteShoppingCart } from '../../utilities/fakedb';



const CheckoutCart = ({ cart, success }) => {
    let total = 0;
    for (const product of cart) {
        total += (product.price * product.quantity);
    }
    let quantity = 0;
    for (const product of cart) {
        quantity += product.quantity;
    }


    let shipingCharge = 0;
    if (total) {
        for (const product of cart) {
            shipingCharge += product.shipping;
        }
    }

    let tax = total * 0.1;


    return (
        <div>
            <h5 className='title text-center mb-5'>Order Summary</h5>
            <p className='item-info'>Selected Items: {cart.length}</p>
            <p className='item-info'>Product Quantity: {quantity}</p>
            <p className='item-info'>Total Price: ${total}</p>
            <p className='item-info'>Total Shipping Charge: ${shipingCharge}</p>
            <p className='item-info'>Tax: ${tax.toFixed(2)}</p>

            <h5 className='mt-'>Grand Total: ${(total + shipingCharge + tax).toFixed(2)}</h5>
            <button onClick={deleteShoppingCart} className='clear'>Clear Cart <FontAwesomeIcon icon={faTrashCan} /></button>
            <button type="button" className='review' data-bs-toggle="modal" data-bs-target="#exampleModalToggle">Checkout Order
                <FontAwesomeIcon icon={faArrowRightLong} /></button>

        </div>
    );
};

export default CheckoutCart;