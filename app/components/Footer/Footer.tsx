'use client'

// components
import Table from '../Table/Table';
import Input from '../Input/Input';
import Button from '../Button/Button';

// style
import './Footer.scss'

const Footer = () => {
    return(
        <div className='footerBanner'>
            <Table />
            <div className='footerLogoLinks'>
                <img src='/assets/blackmarket-white-logo.png' alt="logo" ></img>
                <div className='footerLinks'>
                    <a href='www.instagram.com' className='socialMediaLink instagramLink'><img src='/assets/blackmarket-instagram.png'></img></a>
                    <a href='www.facebook.com' className='socialMediaLink facebookLink'><img src='/assets/blackmarket-facebook.png'></img></a>
                    <a href='www.twitter.com' className='socialMediaLink twitterLink'><img src='/assets/blackmarket-twitter.png'></img></a>
                    <a href='www.linkedin.com' className='socialMediaLink linkedinLink'><img src='/assets/blackmarket-linkedin.png'></img></a>
                </div>
            </div>
            <div className='subscribeContent'>
                <strong className='fontStyle subscribeTitle'> Subscribe to our weekly newsletter! </strong>
                <form className='subscribeForm'>
                    <Input classInput='subscribeInput' classLabel='fontStyle subscribeLabel' labelText='Email' name="email" typeText='text' placeholderText='Type your email' />
                    <Button className='subscribeButton' children='Subscribe' />
                </form>
                <text className='subscribeBox fontStyle subscribeText'>By subscribing you agree to receive weekly emails with our latest news and updates.</text>
            </div>
        </div>
    )
}

export default Footer;
