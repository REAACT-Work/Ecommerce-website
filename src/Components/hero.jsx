import React from 'react'
import icons from '../assets/images/icons/icon1.png';
import icons1 from '../assets/images/icons/icon2.png';
import icons2 from '../assets/images/icons/icon3.png';
import icons3 from '../assets/images/icons/icon4.png';
import icons4 from '../assets/images/icons/icon5.png';
import icons5 from '../assets/images/icons/icon6.png';

function hero() {
  return <>
  <section className='hero p-2'>
    <div className="container-fluid">
        <div className='row'>
            <div className="hero-details d-flex justify-content-around text-align-center px-5">
                <div className=' p-2'>
                    <div className="card-details mx-3">
                    <img src={icons} alt="" className='img-fluid mb-2 ' />
                    <p>Fast Orders</p>
                </div></div>
                <div className=' p-2'>
                    <div className="card-details p-2">
                    <img src={icons1} alt="" className='img-fluid mb-2' />
                    <p>Quick Shipping</p>
                </div></div>
                <div className=' p-2'>
                    <div className="card-details">
                    <img src={icons2} alt="" className='img-fluid mb-2' />
                    <p>High Saves</p>
                </div></div>
                <div className=' p-2'>
                    <div className="card-details">
                    <img src={icons4} alt="" className='img-fluid mb-2' />
                    <p>24/7 Support</p>
                </div></div>
                <div className=' p-2'>
                    <div className="card-details">
                    <img src={icons5} alt="" className='img-fluid mb-2' />
                    <p>Discount</p>
                </div></div>

            </div>

        </div>
    </div>

  </section>
  </>
}

export default hero
