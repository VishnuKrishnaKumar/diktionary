import React from 'react'
const STYLES = [
    "blue",
    "light_blue"
]
const Button = ({
    to,
    children,
    className
}) => {
    const checkButton = STYLES.includes(className) ? className : STYLES[0];
    return (
        <>
            <a href={to} className={`btn btn_${checkButton}`}>
                {children}
            </a>
        </>
    )
}

export default Button