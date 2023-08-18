'use client'

import { useState } from 'react';

// components
import Button from '../Button/Button'

// styles
import './Dropdown.scss'

const Dropdown = () => {
    const [isOpen, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!isOpen);
    };

    const myAccount = <div className='fontStyle accountText'>My Account</div>

    return(
        <div className='dropdown'>
            <Button className='dropdownButton' onClick={handleOpen} logo='/assets/blackmarket-arrow.png' logoClassName='logoButton'>
                {myAccount}
            </Button>
            {isOpen ? (
                <ul className='dropdownContent'>
                    <li className='dropdownItem'>
                        <Button className='dropdownItemButton' children='Profile' />
                    </li>
                    <li className='dropdownItem'>
                        <Button className='fontStyle dropdownItemButton' children='Sign Out' />
                    </li>
                </ul>
            ) : null}
        </div>
    )
}

export default Dropdown;
