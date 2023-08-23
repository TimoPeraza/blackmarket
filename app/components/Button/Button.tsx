'use client'

import './Button.scss'

interface ButtonProp {
    className: string,
    children: string | JSX.Element,
    disabled?: boolean,
    logo?: string,
    logoClassName?: string,
    onClick?: () => void
}

var classNames = require('classnames');

const Button = ({className, children, disabled, logo, logoClassName, onClick}: ButtonProp) => {
    var buttonClass = classNames('buttonBox', className)
    return(
        <button className={buttonClass} onClick={onClick} disabled={disabled}>
            {children} 
            {logo &&
                <img src={logo} className={`${logoClassName}`}></img>
            }
        </button>
    )
}

export default Button;