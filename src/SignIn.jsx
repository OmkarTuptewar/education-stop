import React, { useContext } from 'react'
import Navbar from './Navbar';
import { createContext } from 'react';

const SignIn = () => {

	// const contextForSignIn = createContext();
 
  return (
    <>

	{/* <Routes>
        <Route path="/sign-in" element={<SignIn />}></Route>
      </Routes> */}

	<h1 style={{textAlign:"center",width:"100%"}}>EDUCATION<span>STOP</span></h1>	
<section class="vh-100" style={{backgroundColor:"#fff",padding:"0 10rem 0 10rem"}}>
  <div class="container py-5 h-100" style={{height:"80%"}}>
    <div class="row d-flex align-items-center justify-content-center h-100">
      <div class="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          class="img-fluid" alt="Phone image"/>
      </div>
      <div class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
        <form>
          {/* <!-- Email input --> */}
          <div class="form-outline mb-4">
            <input type="email" id="form1Example13" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example13">Email address</label>
          </div>

          {/* <!-- Password input --> */}
          <div class="form-outline mb-4">
            <input type="password" id="form1Example23" class="form-control form-control-lg" />
            <label class="form-label" for="form1Example23">Password</label>
          </div>

          <div class="d-flex justify-content-around align-items-center mb-4">
            {/* <!-- Checkbox --> */}
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="form1Example3" checked />
              <label class="form-check-label" for="form1Example3"> Remember me </label>
            </div>
            <a href="#!">Forgot password?</a>
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>

          <div class="divider d-flex align-items-center my-4">
            <p class="text-center fw-bold mx-3 mb-0 text-muted"><span style={{paddingLeft:"700%"}}>OR</span></p>
          </div>

          <a class="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#3b5998"}} href="#!"
            role="button">
            <i class="fab fa-facebook-f me-2"></i>Continue with Facebook
          </a>
		<hr />
          <a class="btn btn-primary btn-lg btn-block" style={{backgroundColor: "#55acee"}} href="#!"
            role="button">
            <i class="fab fa-twitter me-2"></i>Continue with Twitter</a>

        </form>
      </div>
    </div>
  </div>
</section>
<h3 style={{textAlign: "center"}}>
      Hello<span>Bachooooooo!!</span>
    </h3>
    </>
  )
}

export default SignIn ;