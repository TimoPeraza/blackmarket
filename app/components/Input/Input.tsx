'use client'

import { ChangeEvent } from 'react';

import './Input.scss'

interface InputProps {
    className?: string,
    labelText: string,
    name: string,
    typeText: string,
    placeholderText: string,
    onChange?: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    errors?: string,
    classInput?: string,
    classLabel?: string
}

var classNames = require('classnames');

const Input = ({
    className,
    labelText,
    name,
    typeText,
    placeholderText,
    onChange,
    errors,
    classInput,
    classLabel
    }: InputProps) => {

    var inputClass = classNames('input', classInput)

    return(
        <div className={className}>
            <label className={`label ${classLabel}`}>{labelText}</label>
            <input className={inputClass} type={typeText} name={name} placeholder={placeholderText} onChange={onChange}></input>
            {errors && (
              <span className="error text-red-500">{errors}</span>
            )}
        </div>
    )
}

export default Input;