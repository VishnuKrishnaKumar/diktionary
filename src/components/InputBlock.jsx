import React from 'react'

const THEMES = [
    "white_theme" ,
    "darkblue_theme",
    "lightblue_theme"
]
const InputBlock = ({
    placeholder,
    name,
    imgSrc,
    theme
}) => {
    const checkTheme = THEMES.includes(theme) ? theme : THEMES[0];
    return (
        <>
            <form action="" className={`form_container ${theme}`}>
                <input type="text" required="" placeholder={placeholder} name={name} />
                <button className="bt"><img src={imgSrc} alt="" /></button>
            </form>
        </>
    )
}

export default InputBlock