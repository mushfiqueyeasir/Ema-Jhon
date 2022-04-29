import React from 'react';
import './Modal.css';
import gif from '../../images/giphy.gif'

const Modal = () => {
    return (

        <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <img src={gif} className='img-fluid' alt="" />

                </div>
            </div>
        </div>
    );
};

export default Modal;