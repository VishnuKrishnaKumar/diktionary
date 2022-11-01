import React from 'react'
import Dropdown from './dropdown'
import Logo from './logo'
import Newsletter from './Newsletter'

const Footer = () => {
    return (
        <>
            <footer className='bg__darkblue dark_bg footer'>
                <div className="container">
                    <Logo to="#" imgSrc="https://workpreviews.com/vi/diktionary_img/diktionary_icon_2.svg" logoSize="small" />
                    <div className="footer_link_group">
                        <div>
                            <ul className="footer_ul ft1">
                                <li><a href="#">About</a></li>
                                <li><a href="#">What’s YOUR Word</a></li>
                                <li><a href="#">FAQs</a></li>
                            </ul>
                        </div>
                        <div>
                            <ul className="footer_ul ft1">
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                    <Newsletter title="Newsletter" imgSrc="https://workpreviews.com/vi/diktionary_img/right_arrow_white.svg" name="newsletter" placeholder="demo"/>
                    <Dropdown button_type="topScroll" imgSrc="https://workpreviews.com/vi/diktionary_img/blue_arrow_up.svg" />
                </div>
            </footer>
        </>
    )
}

export default Footer