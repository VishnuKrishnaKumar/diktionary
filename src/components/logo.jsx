import React from 'react'
const SIZES = [
    "large",
    "small"
]
const Logo = ({
    to,
    imgSrc,
    logoSize
}) => {
    const checkLogoSize = SIZES.includes(logoSize) ? logoSize : SIZES[0];
    return (
        <>
            <a href={to} className={`logo logo_${checkLogoSize}`}>
                <img src={imgSrc} alt="" />
            </a>
        </>
    )
}

export default Logo