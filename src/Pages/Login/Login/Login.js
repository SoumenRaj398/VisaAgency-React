import React, { useRef } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Button, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Sociallogin from '../Sociallogin/Sociallogin';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const emailRef  = useRef(" ");
    const passwordRef  = useRef(" ");
    const navigate = useNavigate();
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail,sending,] = useSendPasswordResetEmail(auth);

      if(user){
          navigate(from,{replace:true});
      }

      let errorElement;
      if (error) {
         errorElement = <p className='text-danger'>Error: {error.message}</p>
           
         
        }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email,password)

    }

    const navigateRegister = event => {
       navigate("/register");
    }
    const resetPassword = async() => {
      const email = emailRef.current.value;
      await sendPasswordResetEmail(email);
      toast('sent email');
    }


    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-danger mt-5 mb-3'>Please Log In Here</h2>
            <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control ref ={emailRef} type="email" placeholder="Enter email" required/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control ref ={passwordRef} type="password" placeholder="Password" required />
  </Form.Group>
  
  <Button variant="danger w-50 d-block mx-auto mb-3" type="submit">
    Log In
  </Button>
</Form>
{errorElement}
<p>Do You Consult With Me?<span className='text-danger' onClick ={navigateRegister}>Please Register Here</span></p>
<p>Forget Password?<span className='text-danger' onClick ={resetPassword}>Reset Password</span></p>
<Sociallogin></Sociallogin>
<ToastContainer></ToastContainer>
            
        </div>
    );
};

export default Login;