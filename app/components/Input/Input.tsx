'use client'

import { ChangeEvent } from 'react';

import './Input.scss'

interface InputProps {
    className: string,
    labelText: string,
    name: string,
    typeText: string,
    placeholderText: string,
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    errors?: string
}

const Input = ({className, labelText, name, typeText, placeholderText, onChange, errors}: InputProps) => {
    return(
        <div className={className}>
            <label className="label">{labelText}</label>
            <input className="input" type={typeText} name={name} placeholder={placeholderText} onChange={onChange} />
            {errors && (
              <span className="error text-red-500">{errors}</span>
            )}
        </div>
    )
}

export default Input;