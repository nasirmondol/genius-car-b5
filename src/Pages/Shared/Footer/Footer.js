import React from 'react';
import './Footer.css';
import fbLogo from '../../../images/footer/Facebook.png'
import gitLogo from '../../../images/footer/GitHub.png'

const Footer = () => {
    return (
        <>
            <footer className='footer'>
                <div className='footer-container'>
                    <div className='row'>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-5'>company</h4>
                            <ul className='m-3'>
                                <li><a hrf='#'>Level-4, 104 Badda, Mouchak</a> </li>
                                <li><a hrf='#'>nasirAhmed8202@gmail.com</a> </li>
                                <li><a hrf='#'>(Available from 9AM-5Pm)</a></li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-5'>Get help</h4>
                            <ul className='m-3'>
                                <li><a hrf='#'><small>Home</small></a> </li>
                                <li><a hrf='#'><small>About us</small></a> </li>
                                <li><a hrf='#'><small>Success page</small></a> </li>
                                <li><a hrf='#'><small>Our blogs</small></a> </li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-5'>Online order</h4>
                            <ul className='m-3'>
                                <li><a hrf='#'><small>Terms and conditions</small></a> </li>
                                <li><a hrf='#'><small>FAQS</small></a> </li>
                                <li><a hrf='#'><small>Privacy policy</small></a> </li>
                            </ul>
                        </div>
                        <div className='footer-col'>
                            <h4 className='ms-5 mb-4'>Follow us</h4>
                            <div className='social-links ms-4'>
                                <a hrf='#' ><img className='m-3 ' src={fbLogo} alt="" /></a>
                                <a hrf='#' ><img className='m-3' src={gitLogo} alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;