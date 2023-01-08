import React from 'react';

const Blogs = () => {
    return (
     
          <div>
                <div class="card text-center">
  <div class="card-header">
  <h5 className='text-success'>1. Difference between authorization and authentication</h5>
  </div>
  <div class="card-body">
    <h5  className='text-danger'>AUTHENTICATION</h5>

<p><li>Usually the first step of a access control.</li> <li>Verifies the user's identity.</li> <li>Ii's visible by the user.</li><li>It's changeable by the user.</li><li>Determines whether users are who they claim to be.</li><li>Authentication is the first step of authorization so always come first.</li><li>Authentication usually requires a username and a password.</li></p>
<br />
<h5  className='text-danger'>AUTHORIZATION</h5>

    <p><li>Usually comes after authentication.</li> <li>Grants or denies permissions to the user do something.</li><li>Grants or denies permissions to the user do something.</li> <li>Permission are granted and monitored by the organization</li><li>It's not visible by the user.</li><li>Cannot be changed by the user.</li><li>Access after successful authentication.</li><li>Send through an Access Token.</li></p>
  </div>
</div>
<div class="card text-center">
  <div class="card-header">
   <h5  className='text-info'> 2- Why are you using firebase? What other options do you have to implement authentication? </h5>
  </div>
  <div class="card-body">
    <h5 class="card-title text-danger">Firebase</h5>
    <p class="card-text">Firebase is used for many purposes that can help your apps to develop, grow and make it a quaility app.Firebase is made with a developer in mind to solve all the issues they might face when making an app. The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive exepericence.</p>
  <h5  className='text-danger'>Option to implement othentication</h5>
  <p>Usually, authentication by a server entails the use of a user name and password. Other ways to authentication can be through card,retina scan, voice recognition, and fingerprints.  Some other authentication is Biometric authentication,multifactor authentication and etc.but the passwords are the most common methods of authentication.</p>
  
  </div>
  </div>
  <div class="card text-center">
  <div class="card-header">
 <h5  className='text-primary'>3- What other services does firebase provide other than authentication?</h5>
  </div>
  <div class="card-body">
    <h5 class="card-title text-danger">Services firebase provide other then authentication</h5>
    <p class="card-text">Firebase Authentication provides backend services, easy to use SDKs, and ready made UI libraries to authentication users to your app. It supports authentication using passwords,phone numbers, popular fedreated identity providers like Google, Facebook and Twitter and more. Firebase Authenticaion integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</p>
    
  </div>
</div>
  </div>      

    )
     
};

export default Blogs;