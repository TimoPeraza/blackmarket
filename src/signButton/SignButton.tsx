import './SignButton.css'

interface signButtonProp {
    className: string,
    children: string,
    disabled: boolean
}

function SignButton({className, children, disabled}: signButtonProp) {
    return(
        <button className={`buttonBox ${className}`} disabled={disabled} type='submit'>
            {children}
        </button>
    )
}

export default SignButton;