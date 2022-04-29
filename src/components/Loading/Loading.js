import React from 'react';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '400px' }} >
            <div className="spinner-border text-primary" role="status" style={{ height: '100px', width: '100px' }} />
        </div >

    );
};

export default Loading;