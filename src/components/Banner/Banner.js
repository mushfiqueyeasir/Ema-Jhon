import React, { useEffect } from 'react';
import './Banner.css';
import banner from '../../images/banner.png';
import { Link } from 'react-router-dom';


const Banner = ({ productClicked }) => {
    useEffect(() => {
        document.title = "Ema-John"
    }, [])

    return (
        <main id='home' className='container my-5 px-3'>
            <div className="row align-items-center">
                <div className="banner-title col-12 col-lg-7 order-2 order-lg-1">
                    <p className='sale'>Sale up to 70% off</p>
                    <p className="bannerTitle ">New Collection For Fall</p>
                    <p className='description '>Discover all the new arrivals of ready-to-wear collection.</p>
                    <Link to='/products' className='shopNow px-4 py-1 mt-3 mt-lg-5'>Shop Now</Link>
                </div>
                <div className="banner-photo col-12 col-lg-5 order-1 order-lg-2 align-items-center d-flex justify-content-center">
                    <img src={banner} className="p-2 img-fluid" alt="" />
                </div>
            </div>

        </main>
    );
};

export default Banner;