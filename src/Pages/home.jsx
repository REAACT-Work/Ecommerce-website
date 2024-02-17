import React from 'react'
import {Link} from 'react-router-dom';
import Hero from '../Components/hero';
import FeaturedProducts from "../Components/featuredProduct";
import NewArrival from '../Components/newArrival';
import img1 from '../assets/images/banner/b17.jpg'
import img2 from '../assets/images/banner/b10.jpg'
import Blogs from '../Components/Blogs';


function home() {
  return<>
  <section className='container-fluid banner banner-details '>
    
    {/* <div className="container-xxl"
      <div className="row"> */}
      <div className='row container-fluid'>
        <div className="container-fluid banner-details d-flex flex-column align-items-starting justify-content-center">
          <span className=' container-fluid mx-4 text-black '>Trade in offer !!</span>
          <h1 className='container-fluid mx-3'>Super Value Deals</h1>
          <h2 className=' container-fluid pb-4 mx-3'>On all products</h2>

          <Link className=' container-fluid  button-link mt-4 text-align-center'>Shop Now</Link>

        </div>
        </div>
      {/* </div>
    </div> */}
  </section>

  <Hero />
  <section className='featured-products p-5'>
    <div className='container-fluid'>
      <div className='row'>
        <div className="text-center">
          <h1>Our Featured Products</h1>
          <p>All Weather Mordern Designer</p>
          </div>
        
           
            <FeaturedProducts />
          
          </div>
          
      
    </div>
  </section>
  <section className='repair'>
    <div className='container-fluid'>
      <div className='row'>
        <div className="repair-details text-center d-flex flex-column align-items-center p-3">
          <span className='text-white mt-1'>Repair Service</span>
          <h2 className='text-white pt-4'>On <span className='text-success'><b>70%</b></span> off On All Products And Accessories</h2>
          <div className="mt-3">
            <button className='button-repair mt-5'>Explore Now</button>
          </div>

          </div>
        
           
            
          
          </div>
          
      
    </div>
  </section>
  <section className='new-products p-5'>
    <div className='container-fluid'>
      <div className='row'>
        <div className="text-center">
          <h1>New Arrival</h1>
          <p>Your Best Design Outfits</p>
          </div>
        
           
            <NewArrival />
          
          </div>
          
      
    </div>
  </section>

  <section className='deals p-5'>
    <div className='container-fluid'>
      <div className="row">
        <div className="d-flex ">
        <div className="col-6 p-4 cardbod">
          <div className="card cardl   row">
            <div className="d-flex">
            <div className="col-md-4  ">
              <img src={img1} alt='' className='img-fluid rounded-start pt-4 px-2'/>
            </div>
            <div className="col-md-8">
              <div className="card-body ">
              <span>Hot Deals</span>
              <h3 className='card-tittle'>Buy One Get One Free</h3>
              <p>The latest best collection in our closet feel Cute with our Outfit</p>
              <button className='button-deal mt-3'>
                Learn More
              </button>

              </div>

            </div>
            </div>
          </div>
          </div>
          
          <div className="col-6 p-4 cardbod">
          <div className="card cardl row">
          <div className="d-flex">
            <div className="col-md-4">
              <img src={img2} alt='' className='img-fluid rounded-start pt-4'/>
            </div>
            <div className="col-md-8">
            <div className="card-body  ">
              <span>Hot Deals</span>
              <h3 className='card-tittle'>Buy One Get One Free</h3>
              <p>The latest best collection in our closet feel Cute with our Outfit</p>
              <button className='button-deal mt-3'>
                Learn More
              </button>

              </div></div>

            </div>
          </div>

          </div> 
        </div>
      </div>
    </div>
  </section>
  <div className="blog p-3">
    <div className="container-fluid ">
      <div className="row ">
        <div className='text-center mb-4 '>
          <h1>What Our Customer Say</h1>
          <p>Our Customer never miss a bit on providing feedback</p>

        </div>
        
          
        </div>
        
        <Blogs />
    </div>
  </div>

  


  
  </>
}

export default home
