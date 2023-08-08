'use client'

import { ChangeEvent, useState } from 'react';

// components
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Link from 'next/link';

// utils
import { API, paths } from '@/utils/constants';
import { isEmailValid } from '@/utils/utils';

// hooks
import { useApi } from '@/hooks/useApi';

// styles
import '@/auth/layout.scss'
import './signIn.scss'

type SignInFormData = {
    email: string;
    password: string;
  };

const SignIn = () => {
    const emptyFormData: SignInFormData = {
        email: '',
        password: ''
      };

    const [formData, setFormData] = useState<SignInFormData>(emptyFormData);
    const [errors, setErrors] = useState<SignInFormData>(emptyFormData);
    const [callErrors, setCallErrors] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setCallErrors('')
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    const validateForm = (formData: SignInFormData) => {
        const newErrors: SignInFormData = emptyFormData;

        if (!isEmailValid(formData.email)) {
          newErrors.email = 'Email address is invalid';
        }

        return newErrors;
      };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newErrors = validateForm(formData);
        if (Object.values(newErrors).some((error) => error !== "")) {
            setErrors(newErrors);
        } else {
            setErrors(emptyFormData);
            const { doPost } = useApi({ session: null })

            var newBody = JSON.stringify({
                email: formData.email,
                password: formData.password
            })

            doPost({
                endpoint:
                    API.signIn,
                withToken: false,
                body: newBody,
                callbacks: {
                  success: () => {
                    alert("User logged in successfully!")
                  },
                  error: response => {
                    let result = "";
                    Object.keys(response).forEach((i) => {
                      result += `${response[i]}\n`;
                    });
                    setCallErrors(result)
                  }
                }
              })
        }
      };

    return(
        <div className="signBackground">
            <div className="signBox signInBox">
                <img src='/assets/blackmarket-logo.png' className="logoSign" alt="logo" ></img>
                <form onSubmit={handleSubmit}>
                    <Input className='signInputBox emailDiv' labelText='Email' name="email" typeText='text' placeholderText='Type your email' onChange={handleInputChange} errors={errors.email} />
                    <Input className='signInputBox passwordDiv' labelText='Password' name="password" typeText='password' placeholderText='Type your password' onChange={handleInputChange}/>
                    <Button className='signButton signInButton buttonEnable' children='Sign In' />
                    {callErrors && (
                        <span className="signError signInError text-red-500">Error: {callErrors}</span>
                    )}
                    <div className='signInfoText forgotPasswordText'>
                        <Link className='signLink' href='/'> I forgot my password.</Link>
                    </div>
                </form>
            </div>
            <div className= "signBox signUpLittleBox">
                <div className='signInfoText accountText'>
                    Don’t have an account?
                </div>
                <form action={paths.signUp}>
                    <Button className='signButton signUpButton buttonLink' children='Sign Up' />
                </form>
            </div>
        </div>
    )
}

export default SignIn;
