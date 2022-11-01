import React from 'react'

const Newsletter = (
    title , 
    placeholder , 
    imgSrc,
    name
) => {
    return (
        <>
            <div class="newsletter_wrap">
                <h5>{title}</h5>
                <form action="">
                    <input type="text" required="" placeholder={placeholder} name={name} />
                        <button class="bt"><img src={imgSrc} alt=""/></button>
                </form>
            </div>
        </>
    )
}

export default Newsletter