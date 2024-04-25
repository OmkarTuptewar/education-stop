import React from 'react'
import image1 from "../src/code.jpg";
import image2 from "../src/physicsimage.jpg";
import image3 from "../src/phy.jpg";
import image4 from "../src/python.jpg";
import Navbar from "./Navbar" 
import { Link } from 'react-router-dom';
import Navbar2 from './Navbar2';

const Myhome = () => {
  return (
    <div  >
          <Navbar/>

<br />

<div id="carouselExampleDark" class="carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleDark"
      data-bs-slide-to="2"
      aria-label="Slide 3"
    ></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src={image1} class="d-block w-100 h-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
       
        <p>
        
        </p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src={image2} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      
        <p>
          {/* Some representative placeholder content for the second slide. */}
        </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src={image3} class="d-block w-100" alt="..." />
      <div class="carousel-caption d-none d-md-block">
      
        <p>
          {/* Some representative placeholder content for the third slide. */}
        </p>
      </div>
    </div>
  </div>
  <button
    class="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleDark"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
<br />

<section id="features" style={{textDecoration : "none"}} >
  <div class="row row2">
    <div class="col-lg-3">
      <div class="firstblock">
        <i class=" hello fa-sharp fa-solid fa-arrow-trend-up fa-beat-fade"></i>
        <h3>55%</h3>
        <p  > Average Salary Hike</p>
      </div>
    </div>
    <div class="col-lg-3">
      <div class="secondblock">
        <i class=" hello fa-solid fa-file-pen fa-beat"></i>
        <h3>600+</h3>
        <p>Different Courses</p>
      </div>
    </div>

    <div class="col-lg-3">
      <div class="thirdblock">
        <i class=" hello fa-solid fa-graduation-cap fa-beat"></i>
        <h3>400+</h3>
        <p>Top Educators</p>
      </div>
    </div>

    <div class="col-lg-3  ">
      <div class="thirdblock">
        <i class=" hello fa-solid fa-money-bill-transfer fa-beat"></i>
        <h3>12000+</h3>
        <p>Career Transitions</p>
      </div>
    </div>
  </div>
</section>
<br />
<br />

<div class="card" >
  <img src={image4} class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Python For Beginners</h5>
    <p class="card-text">
      Establishes strong programming foundation. Ideal for newcomers, it
      teaches versatile and widely-used Python language..
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <i class="fa-solid fa-video fa-xl"></i> <span>--- </span> 22 hours
      on-demand video
    </li>
    <li class="list-group-item">
      <i class="fa-solid  fa-laptop-code fa-xl "></i>
      <span>--- </span> 19 coding exercises
    </li>
    <li class="list-group-item">
      <i class=" fa-solid fa-regular fa-newspaper fa-xl"></i>
      <span>--- </span>15 articles
    </li>
  </ul>
  <div class="card-body btndiv">
    <button type="button" class="btn btn-outline-primary">
      ₹12000
    </button>
    <button type="button" class="btn btn-right btn-outline-success">
    <Link to='/payment' style={{textDecoration : "none"}} > Start Subscription</Link>

    </button>
  </div>
</div>
<div class="card">
  <img
    src="https://www.tutorialbar.com/wp-content/uploads/2636150_ed7d-2-2048x1152.jpg"
    class="card-img-top"
    alt="..."
    height={"265px"}
    width={"200px"}
  />
  <div class="card-body">
    <h5 class="card-title">Java For Beginners</h5>
    <p class="card-text">
      Establishes strong programming foundation. Ideal for newcomers, it
      teaches versatile and widely-used Python language..
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <i class="fa-solid fa-video fa-xl"></i> <span>--- </span> 22 hours
      on-demand video
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-laptop-code fa-xl "></i>
      <span>--- </span> 19 coding exercises
    </li>
    <li class="list-group-item">
      <i class=" fa-solid fa-regular fa-newspaper fa-xl"></i>
      <span>--- </span>15 articles
    </li>
  </ul>
  <div class="card-body btndiv">
    <button type="button" class="btn btn-outline-primary">
      ₹12000
    </button>
    <button type="button" class="btn btn-right btn-outline-success">
    <Link to='/payment' style={{textDecoration : "none"}} > Start Subscription</Link>

    </button>
  </div>
</div>
<div class="card">
  <img
    src="https://www.incredibuild.com/wp-content/uploads/2021/09/Microservices_and_C_800x533-005.jpg"
    class="card-img-top"
    alt="..."
  />
  <div class="card-body">
    <h5 class="card-title">C++ For Beginners</h5>
    <p class="card-text">
      Establishes strong programming foundation. Ideal for newcomers, it
      teaches versatile and widely-used Python language..
    </p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">
      <i class="fa-solid fa-video fa-xl"></i> <span>--- </span> 22 hours
      on-demand video
    </li>
    <li class="list-group-item">
      <i class="fa-solid fa-laptop-code fa-xl "></i>
      <span>--- </span> 19 coding exercises
    </li>
    <li class="list-group-item">
      <i class=" fa-solid fa-regular fa-newspaper fa-xl"></i>
      <span>--- </span>15 articles
    </li>
  </ul>
  <div class="card-body btndiv">
    <button type="button" class="btn btn-outline-primary">
      ₹12000
    </button>
    <button type="button" class="btn btn-right btn-outline-success">
        <Link to='/payment' style={{textDecoration : "none"}} > Start Subscription</Link>
    </button>
  </div>
</div>
<footer class="footer-distributed">
  <div class="footer-left">
    <h3>
      Education<span>Stop</span>
    </h3>

    <p class="footer-links">
      <a href="#" class="link-1">
        Home
      </a>
      <a href="#">Blog</a>
      <a href="#">Pricing</a>
      <a href="#">About</a>
      <a href="#">Faq</a>
    </p>
    <p class="footer-company-name">Education Stop © 2023</p>
<br />
<Link to='/contact'> 
<button type="button" class="btn btn-success" style={{width:"50%"}}>Contact Us</button>
 </Link>
   
  </div>

  <div class="footer-center">
    <div>
      <i class="fa-sharp fa-solid fa fa-map-marker"></i>
      <p>
        <span></span> <a style={{color: 'white'}} href="https://www.google.com/maps/place/LRC+MANIT/@23.2166489,77.4067549,17z/data=!3m1!4b1!4m6!3m5!1s0x397c43accb2f81f9:0x603cfa000db72484!8m2!3d23.216644!4d77.4093298!16s%2Fg%2F11t89yzl7g?entry=ttu">MANIT BHOPAL</a> 
      </p>
    </div>

    <div>
      <i class="fa-sharp fa-solid fa fa-phone"></i>
      <p>+91 9421664678</p>
    </div>

    <div>
      <i class="fa-sharp fa-solid fa fa-envelope"></i>
      <p>
        <a href="mailto:support@company.com">educationstop@company.com</a>
      </p>
    </div>
  </div>

  <div class="footer-right">
    <p class="footer-company-about">
      <span>About the company</span>
      To provide quality and free education at the lowest price
    </p>

    <div class="footer-icons">
      <a href="#">
        <i class=" fa-sharp fa-solid fa fa-facebook"></i>
      </a>
      <a href="#">
        <i class=" fa-sharp fa-solid fa fa-twitter"></i>
      </a>
      <a href=" fa-sharp fa-solid https://www.linkedin.com/in/vishal28d/">
        <i class=" fa-sharp fa-solid fa fa-linkedin"></i>
      </a>
      <a href=" https://github.com/vishal28d">
        <i class="fa-sharp fa-solid fa fa-github"></i>
      </a>
    </div>
  </div>
</footer>
    </div>
  )
}


export default Myhome ;