import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css";

const Service = ({service}) => {

    const {id,name,info,img} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`);

    }
    return (
        <div className='service'>
             <img src ={img} alt =""   />
            <h2>{name}</h2>
            <p>{info}</p>
            <button onClick ={() => navigateToServiceDetail(id)}>Book This</button>
            
        </div>
    );
};

export default Service;