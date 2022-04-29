
// use local storage to manage cart data
const addToDb = id => {
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
}


const getStoredCart = () => {
    let shoppingCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('Ema_John');
    if (storedCart) {
        shoppingCart = JSON.parse(storedCart);
    }
    return shoppingCart;
}


const removeFromDb = id => {
    const storedCart = localStorage.getItem('Ema_John');
    if (storedCart) {
        const shoppingCart = JSON.parse(storedCart);
        if (id in shoppingCart) {
            delete shoppingCart[id];
            localStorage.setItem('Ema_John', JSON.stringify(shoppingCart));
        }
    }
}

const deleteShoppingCart = () => {

    localStorage.removeItem('Ema_John');

}

export {

    addToDb,
    getStoredCart,
    removeFromDb,
    deleteShoppingCart

}