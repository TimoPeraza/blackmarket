import './SignInputBox.css'

interface signInputProp {
    className: string,
    labelText: string,
    typeText: string,
    placeholderText: string,
    setHookState: React.Dispatch<React.SetStateAction<boolean>>
}

interface inputHandlerProp {
    setHookState: React.Dispatch<React.SetStateAction<boolean>>,
    event: React.ChangeEvent<HTMLInputElement>
}

function SignInputBox({className, labelText, typeText, placeholderText, setHookState}: signInputProp) {
    
    function changeHandler({setHookState, event}: inputHandlerProp) {
        if (event.target.value.trim().length !== 0) {
            setHookState(true) 
        } else {
            setHookState(false)
        }
    }

    return(
        <div className={className}>
            <label className="signLabel">{labelText}</label>
            <input className="signInput" type={typeText} placeholder={placeholderText} onChange={(event) => changeHandler({setHookState, event})} />
        </div>
    )
}

export default SignInputBox;
