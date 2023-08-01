'use client'

// React
import React, { ChangeEvent, useState } from 'react'; 

// components
import Input from '@/components/Input/Input';
import Button from '@/components/Button/Button';
import Link from 'next/link';

// utils
import { isEmailValid } from '@/utils/utils';
import { API } from '@/utils/constants';

// hooks
import { useApi } from '@/hooks/useApi';

// style
import './signUp.scss';

type SignUpFormData = {
    email: string;
    full_name: string;
    password: string;
  };

const SignUp = () => {
    const emptyFormData: SignUpFormData = {
        email: '',
        full_name: '',
        password: ''
      };

    const [formData, setFormData] = useState<SignUpFormData>(emptyFormData);
    const [errors, setErrors] = useState<SignUpFormData>(emptyFormData);
    const [callErrors, setCallErrors] = useState('')

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        event.preventDefault();

        setCallErrors('')
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
      };

    const validateForm = (formData: SignUpFormData) => {
        const newErrors: SignUpFormData = emptyFormData;

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
                password1: formData.password,
                password2: formData.password
            })

            doPost({
                endpoint:
                    API.signUp,
                withToken: false,
                body: newBody,
                callbacks: {
                  success: () => {
                    alert("User Registered successfully!")
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

    const formIsComplete = !!formData.email && !!formData.full_name && !!formData.password

    return (        
        <div className="signBackground">
            <div className="signUpBox">
                <img src='/assets/blackmarket-logo.png' className="logoSign" alt="logo" ></img>
                <form onSubmit={handleSubmit}>
                    <Input className='signInputBox emailDiv' labelText='Email' name="email" typeText='text' placeholderText='Type your email' onChange={handleInputChange} errors={errors.email} />
                    <Input className='signInputBox fullNameDiv' labelText='Full Name' name="full_name" typeText='text' placeholderText='Type your full name' onChange={handleInputChange} errors={errors.full_name}/>
                    <Input className='signInputBox passwordDiv' labelText='Password' name="password" typeText='password' placeholderText='Type your password' onChange={handleInputChange} errors={errors.password}/>
                    <Button className={`signUpButton ${formIsComplete ? 'buttonEnable' : 'buttonDisable'}`} children='Sign Up' disabled={!formIsComplete} />
                    {callErrors && (
                        <span className="signError text-red-500">Error: {callErrors}</span>
                    )}
                    <div className='signInfoText policyText'>
                        By signing up, you accept the
                        <Link className='signLink' href='/'> Data Policy</Link> and the
                        <Link className='signLink' href='/'> Cookies Policy</Link>.
                    </div>
                    <div className='signInfoText logInText'>
                        Already have an account? <Link className='signLink' href='/'>Log in</Link>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp;
