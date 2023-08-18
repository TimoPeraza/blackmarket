'use client'

// components
import Button from '@/components/Button/Button'
import Dropdown from '../Dropdown/Dropdown'
import SearchBar from '../SearchBar/SearchBar'

// style
import './Header.scss'

const Header = () => {
    const shoppingCart = <div className='fontStyle cartText'>Shopping Cart</div>

    return(
        <div className='headerBanner'>
            <img src='/assets/blackmarket-white-logo.png' className="logoHeader" alt="logo" ></img>
            <SearchBar />
            <Dropdown />
            <Button className='headerButton cartButton' logo='/assets/blackmarket-cart.png' logoClassName='logoButton'>
                {shoppingCart}
            </Button>
        </div>
    )
}

export default Header
