import React from 'react';
import "./Client.css"

const Client = ({ client }) => {

    const{name,img,info} = client;


    return (
        <div className='client'>
            <img src ={img} alt =""   />
            <h2>{name}</h2>
            <p>{info}</p>
           
            
        </div>
       

     
      
    );
};

export default Client;