import React from "react"
import { Link } from "react-router-dom";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsFacebook,BsInstagram,BsLinkedin } from "react-icons/bs";
import goggle from '../assets/images/pay/play.jpg';
import app from '../assets/images/pay/app.jpg';
import pay from '../assets/images/pay/pay.png';





const footer =()=>{
    return(
        <footer className='footer p-5 container-fluid' >
            <div className="container-fluid ">
                <div className="row footers">
                    <div className="col-4 d-flex flex-column footers">
                        <h3 className="mb-4">Contact Us</h3>
                        <div className="footer-details ">
                            <p className="mb-3"><b>Address:</b> Thika Town,Natlex Building,2nd Floor</p>
                            <p className="mb-3"><b>Phone:</b> <a href="tel:+2426747467">Call us +2426747467</a></p>
                            <p className="mb-3"><b>OpenAt:</b> From 8 A.m to 5 p.m</p>
                            <p className="mb-3"><b>Follow Us</b></p>
                            <div className="col-3 social-icons mb-3 d-flex justify-content-around ">
                                <Link><AiFillTwitterCircle className="fs-5 mx-1"/></Link>
                                <Link><BsFacebook className="fs-5 mx-1"/></Link>
                                <Link><BsInstagram className="fs-5 mx-1"/></Link>
                                <Link><BsLinkedin className="fs-5 mx-1"/></Link>

                            </div>
                        </div>
                    </div>
                    <div className="col-2 stylet">
                        <h3 className=" mb-4">About</h3>
                        <div className="footer-details d-flex flex-column">
                            <Link className="mb-3 sky">
                                Delivery
                            </Link>
                            <Link className="mb-3 sky">
                                Privacy & Policy
                            </Link>
                            <Link className="mb-3 sky">
                                Tax Policy
                            </Link>
                            <Link className="mb-3 sky">
                                Terms & Conditions
                            </Link>
                            
                        </div>
                    </div>
                    <div className="col-2 nodisplay">
                        <h3 className=" mb-4">Account</h3>
                        <div className="footer-details d-flex flex-column">
                            <Link className="mb-3 sky">
                                Profile
                            </Link>
                            <Link className="mb-3 sky">
                                View Cart
                            </Link>
                            <Link className="mb-3 sky">
                                My Orders
                            </Link>
                            <Link className="mb-3 sky">
                                My Wishlist
                            </Link>
                            <Link className="mb-3 sky">
                                Help
                            </Link>
                            <Link className="mb-3 sky">
                               Coupons
                            </Link>
                            
                        </div>
                    </div>
                    <div className="col-4 nodisplay">
                        <h3 className="mb-3">Install App</h3>
                        <p>Available on Google Play Services & App Store</p>
                        <div className="pay d-flex ">
                        <Link>
                        <img src={goggle} alt="" className="img-fluid p-4 my-3 " />
                        </Link>
                        <Link>
                        <img src={app} alt="" className="img-fluid p-4 my-3" />
                        </Link>
                        </div>
                        <p className="mb-3 pt-2">Payment Methods</p>
                        <Link>
                        <img src={pay} alt="" className="pay img-fluid px-4 mb-3 mt-2 "/>
                        </Link>

                    </div>
                </div>
<hr/>

                
                <div className=" container-fluid row d-flex justify-content-between ">
                    <div className="col-3 lp">
                        <p className="lp">&copy; Developed by Simran Singh 2024</p>
                    </div>
                    <div className="col-3 d-flex justify-content-around ">
                        <Link className=" last text-black">Privacy Policy</Link>
                        <Link className=" last text-black">Terms of Use</Link>
                        <Link className="last  text-black">Contact Me</Link>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default footer