import React from 'react'

const Newsletter = (
  {
    title , 
    placeholder , 
    imgSrc,
    name
  }
) => {
    return (
        <>
            <div className="newsletter_wrap">
                <h5 className='text_2xl mb'>{title}</h5>
                <form action="">
                    <input type="text" required="" placeholder={placeholder} name={name} />
                        <button className="bt"><img src={imgSrc} alt=""/></button>
                </form>
            </div>
        </>
    )
}

export default Newsletter