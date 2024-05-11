import React from 'react'
import {AiOutlineSearch} from 'react-icons/ai'

import './Hero.css'

const Hero = () => {
    return (
        <div className='hero'>
            <div className='content'>
                <h1>Find your perfect Home</h1>
                <p id='hero-text' className='search-text'> Become a Wakaagent. Find your Dream home. Exclusive Properties. </p>
                <form className='search'>

                    <div>
                        <input type='text' placeholder=' Search for properties Using Address' />
                    </div>
                    <div className='radio'> 
                        {/* <input type='radio' checked /> */}
                        {/* <label>Buy</label> */}
                        {/* <input type='radio'  /> */}
                        {/* <label>Rent</label> */}
                        <button type='submit'><AiOutlineSearch className='icon'/></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero;
