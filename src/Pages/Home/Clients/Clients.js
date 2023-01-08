import React from 'react';
import client1 from "../../../images/client1.jpg"
import client2 from "../../../images/client2.png"
import client3 from "../../../images/client3.jpg"
import client4 from "../../../images/client4.jpg"
import Client from '../Client/Client';
import "./Clients.css"

const clients =  [

    {id:1,name:"Soumen Raj",img:client1,info:"Thank you for your excellent service. Thank you because you are so helpful and loyal about your service. They always answered all our questions and concern at all hours without getting annoyed."},
    {id:2,name:"Marry Christen",img:client2,info:"This is definitely a HIGHLY recommended Agency. A big applause and very grateful to this agency for their efforts and assistance to our visa application. They are truly knowledgeable,skilled and has empathy throughout the process."},
    {id:3,name:"Ravi Bishno",img:client3,info:"We have been lucky enough to Invite this bands and artists here in this city like Valley of Chrome, Typecast, Gloc-9 and Shantidope through ImmiCo. The events went through smoothly because of this and we greatly appreciate the support ."},
    {id:4,name:"Anjeli Bhatt",img:client4,info:"I only trust this Consultancy in any advice that they give me because I know they’re giving me the right direction towards reaching my dreams. They are very professional, friendly, helpful.They are truly knowledgeable,skilled and has empathy throughout the process "}
]

const Clients = () => {
    return (
        <div id="clients">
            <h1 className='clients-title mt-5 mb-5 text-danger'>Successful Clients </h1>
            <div className='clients-container'>
            {
                    clients.map(client => <Client
                       key ={client.id}
                       client ={client}
                       
                       
                       ></Client>
                   )
                }
            </div>
              

            
            
        </div>
    );
};

export default Clients;