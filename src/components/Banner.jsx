
import React from 'react'
import Button from './Button'
import Dropdown from './dropdown'


const Banner = () => {
    return (
        <>
            <section className="banner bg__lightblue text__darkblue">
                <div className="container">
                    <div class="banner_cnt text-center">
                        <h1 className='text_4xl light text__darkblue'>Your<span class="b-i strong"> word</span> is.<br />
                            <span class="b-i text_5xl itl strong">everything</span>
                        </h1>
                        <p className='text_xl'>or maybe it’s <a href="#" className='strong text__darkblue underline'>STARLIGHT, FLUFFY</a>
                            or <a href="#" className='strong text__darkblue underline'>BRAINFREEZE</a> – you choose</p>
                        <Button to="#" className="blue" children="Get started for free today!" />
                        <Dropdown button_type="bottomScroll"/>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Banner