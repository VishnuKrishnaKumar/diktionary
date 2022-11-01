import React from 'react'
import Logo from '../../../logo'
import Menu from './MenuItems';


const Navbar = () => {
    return (
        <>
            <nav>
                <div className="container">
                    <div className='left'>
                        <Logo imgSrc="LOGO" to="#" logoSize="logo_large" />
                    </div>                    <div className="right">
                        <ul className="navigation_ul">
                            {Menu.map((item, index) => {
                                return (
                                    <li key={index}>
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