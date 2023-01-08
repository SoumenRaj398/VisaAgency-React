import React from 'react';
import { useCreateUserWithEmailAndPassword,} from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import "./Register.css"
import auth from "../../../firebase.init";
import Sociallogin from '../Sociallogin/Sociallogin';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    //   const [updateProfile, updating, updateError] = useUpdateProfile(auth);




    const navigate= useNavigate();

    const navigateLogin = () => {
        navigate("/login")
    }
    if(user){
       navigate('/home');
    }

    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
       


        createUserWithEmailAndPassword(email,password);
    }
    return (
        <div className='form-container'>
            <h2 style ={{textAlign:"center"}} className="text-danger mt-5 mb-5">Register Here</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name ="name" id ="" placeholder="Your Name"/>
                <input type="email" name ="email" id ="" placeholder="Email address" required/>
                <input type="password" name ="password" id ="" placeholder="Password" required/>
                <input type ="checkbox" name ="terms" id="terms"/>
                <label htmlFor='terms'>Accept Visa Terms And Conditions</label>
                <input className="btn btn-danger w-50 d-block mx-auto mt-2 mb-3" type="submit" value ="Register"/>
             </form>

             <p>Already Have An Account?<span className='text-danger' onClick ={navigateLogin}>Please Log IN Here</span></p>
             <Sociallogin></Sociallogin>
            
        </div>
    );
};

export default Register;