import React from 'react';
import { Link, useParams } from 'react-router-dom';


const Servicedetail = () => {
    const {serviceId}=useParams();
   

   
    return (
        <div>
            <h2 className='text-center mt-5'>Welcome to My Consultancy For : {serviceId} No Service </h2>
            <div className='text-center'>
                <Link to ="/checkout">
                <button className="btn btn-danger mt-5">Proceed Checkout</button>
                </Link>
            </div>
           
            
        </div>
    );
};

export default Servicedetail;