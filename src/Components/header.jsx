import React from 'react'
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/apneck.png';
import {HiOutlineInboxIn} from 'react-icons/hi';
import {VscAccount} from 'react-icons/vsc';
import {CgShoppingCart} from 'react-icons/cg';




const header = () => {
    const location =useLocation();
    return <>
        <header className='header-top-strip '>
            <div className="  shadow-sm ">
                <div className="row align-item-center">
                    <div className='col-6 px-4'>
                        <p className='m-auto'>The trending outfits at 100% off</p>
                    </div>
                    <div className='col-6 d-flex justify-content-between'>
                        <div>
                            <a href="tel:+2426747467">Call us +2426747467</a>
                        </div>
                        <div className='top-img'>
                            <Link><BiPhoneCall className='fs-6 ' /></Link>
                            <Link><AiOutlineMail className='fs-6 mx-3' /></Link>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <header className='header-upper sticky-top '>
            <div className='container-fluid '>
                <div className='row'>
                    <div className="col-2">
                        <Link to='/'><img src={logo} alt="" className='logo' /></Link>
                    </div>
                    <div className="col-3 d-flex align-items-center searchbar">
                        <div className="input-group  mb-3 mt-3">
                            <span className="input-group-text " id="basic-addon1">All</span>
                            <input type="text" className="form-control " placeholder="Search..." aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                                <button className="input-group-text px-6 " id="basic-addon2">Search</button>
                        </div>
                    </div>
                    <div className="col-4 d-flex align-items-center justify-content-between mx-auto   cart-icon" >
                        <Link to={'/'} className={`link ${location.pathname === '/' ? 'active' : 'inactive'}`}>Home</Link>
                        <Link to={'shop'} className={`link ${location.pathname === '/shop' ? 'active' : 'inactive'}`}>Shop</Link>
                        <Link to={'blog'} className={`link ${location.pathname === '/blog' ? 'active' : 'inactive'}`}>Blog</Link>
                        <Link to={'about'} className={`link ${location.pathname === '/about' ? 'active' : 'inactive'}`}>About</Link>
                        <Link to={'contact'} className={`link ${location.pathname === '/contact' ? 'active' : 'inactive'}`}>Contact</Link>

                        <div className='nav-link-nav col-3 d-flex px-5 align-items-center justify-content-between side '>
                        <Link to={'wishlist'} className='d-flex fs-5 px-2 pt-3 side'><HiOutlineInboxIn/>
                        <p className={location.pathname==="/wishlist" ? 'aactive' : 'iinactive'}>Wishlist</p>
                        </Link>
                        <Link to={'account'} className='d-flex fs-5 side   px-2 pt-3'><VscAccount/>
                        <p className={location.pathname==="/account" ? 'aactive' : 'iinactive'}>Account</p>
                        </Link>
                        <Link to={'cart'} className='d-flex fs-5 px-2 side pt-3'><CgShoppingCart/>
                        <p className={location.pathname==="/cart" ? 'aactive' : 'iinactive'}>Cart</p>
                        </Link>

                    </div>
                    </div>
                    
                </div>

            </div>
        </header>
    </>
}

export default header
