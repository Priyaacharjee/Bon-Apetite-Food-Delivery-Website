import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaPhoneAlt, FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <Navbar bg='dark' variant='dark' expand="lg" className="bg-body-tertiary footer">
                <div className='col-12' style={{ display: 'flex' }}>

                    {/*Contact Div */}
                    <div className='col-6' style={{ color: 'white' }}>
                        <h4>Contact</h4>
                        <div style={{ paddingTop: '40px', marginLeft: '-23px' }}><FaPhoneAlt className='icon' /> : <span className='link'>0123456789</span></div>
                        <div style={{ paddingTop: '10px', marginLeft: '-23px' }}><MdEmail className='icon' /> : <span className='link'>bonapetite.fooddelivery@gmail.com</span></div>
                        <div style={{ paddingTop: '10px', marginLeft: '-23px' }}><a href='https://www.facebook.com/keya.tarafdar.75' target='new'>
                            <FaFacebook className='icon' />
                        </a>
                            <a href='https://www.instagram.com/keya.tarafdar.75/' target='new'>
                                <FaInstagramSquare className='icon' />
                            </a></div>
                    </div>

                    {/*About Div */}
                    <div className='col-6'>
                        <h4>About</h4>
                    </div>

                </div>

            </Navbar>
            <Navbar bg='dark' variant='dark' expand="lg" className='m-0 p-0'>
                <div className='footer'>
                    <div className="foot_panel4">
                        <div className="copyright">
                            &copy;Prepared on 2023, Bon Apetite.com
                        </div>
                    </div>
                </div>
            </Navbar>
        </>
    )
}

export default Footer