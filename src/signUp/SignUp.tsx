import React, { useState } from 'react'; 

import SignLink from '../signLink/SignLink'
import SignInputBox from '../signInput/SignInputBox'
import SignButton from '../signButton/SignButton'
import logo from '../assets/logo.svg'
import { requestApi } from '../utils/requestApi'

import './SignUp.css'
import '../signContainer/SignContainer.css'

interface SignUpData {
    email: string,
    name: string,
    password: string
}

function SignUp() {

    const [email, setEmailState] = React.useState(false)
    const [fullName, setFullNameState] = React.useState(false)
    const [password, setPasswordState] = React.useState(false)

    var dataLink = <SignLink className='signLink' href='/'>Data Policy</SignLink>
    var cookiesLink = <SignLink className='signLink' href='/'>Cookies Policy</SignLink>
    var logInLink = <SignLink className='signLink' href='/'>Log in</SignLink>
    var buttonClassName = 'buttonDisable'
    var disabledButton = true

    if (email && fullName && password) {
        buttonClassName = 'buttonEnable'
        disabledButton = false
    } else {
        buttonClassName = 'buttonDisable'
        disabledButton = true
    }

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        const sign_up_data: SignUpData = {
            email: event.target[0]?.value,
            name: event.target[1]?.value,
            password: event.target[2]?.value,
        }
        debugger
    }

    async function postSignUp({email, name, password}: SignUpData) {
        
    }

    return (
        <div className="signUpBox">
            <img src={logo} className="logoSign" alt="logo" ></img>
            <form onSubmit={handleSubmit}>
                <SignInputBox className='signInputBox emailDiv' labelText='Email' typeText='text' placeholderText='Type your email' setHookState={setEmailState} />
                <SignInputBox className='signInputBox fullNameDiv' labelText='Full Name' typeText='text' placeholderText='Type your full name' setHookState={setFullNameState}/>
                <SignInputBox className='signInputBox passwordDiv' labelText='Password' typeText='password' placeholderText='Type your password' setHookState={setPasswordState}/>
                <SignButton className={`singUpButton ${buttonClassName}`} children='Sign Up' disabled={disabledButton} />
                <div className='signInfoText policyText'>
                    By signing up, you accept the {dataLink} and the {cookiesLink}.
                </div>
                <div className='signInfoText logInText'>
                    Already have an account?{logInLink}
                </div>
            </form>
        </div>
    );
}

export default SignUp
