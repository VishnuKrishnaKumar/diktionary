import React from 'react'
import Logo from '../../../logo'
import Menu from './MenuItems';


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className='left'>
                        <Logo imgSrc="https://workpreviews.com/vi/diktionary_img/main-logo.svg" to="#" logoSize="logo_large" />
                    </div>                    <div className="right">
                        <ul className="navigation_ul">
                            {Menu.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item">
                                        <a href={item.url} className={item.className}>{item.title}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Navbar