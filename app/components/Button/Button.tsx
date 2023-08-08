import './Button.scss'

interface ButtonProp {
    className: string,
    children: string,
    disabled: boolean
}

const Button = ({className, children, disabled}: ButtonProp) => {
    return(
        <button className={`buttonBox ${className}`} disabled={disabled}>
            {children}
        </button>
    )
}

export default Button;