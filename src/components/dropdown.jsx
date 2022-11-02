import React from 'react'

const STYLES = [
    "bottomScroll",
    "topScroll"
]

const Dropdown = (
    {
        button_type,
        imgSrc
    }
) => {
    const checkStyle = STYLES.includes(button_type) ? button_type : STYLES[0];

    return (
        <>
            <button className={`btm_scroll ${checkStyle}`}>
                <span>
                    {
                        (imgSrc) ? <img src={imgSrc}  />  : ''
                    }
                </span>
            </button>
        </>
    )
}

export default Dropdown