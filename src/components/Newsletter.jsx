import React from 'react'
import InputBlock from './InputBlock'

const Newsletter = (
    {
        title
    }
) => {
    return (
        <>
            <div className="newsletter_wrap">
                <h5 className='text_2xl mb'>{title}</h5>
                <InputBlock placeholder="demo" name="name" theme="darkblue_theme" imgSrc="https://workpreviews.com/vi/diktionary_img/right_arrow_white.svg" />
            </div>
        </>
    )
}

export default Newsletter