import React from 'react'
import Search from '../assets/search.svg'
import {ReactComponent as Telegram} from '../assets/telegram.svg'
import { ReactComponent as Twitter} from '../assets/twitter.svg'
import {ReactComponent as Youtube} from '../assets/youtube.svg'
//import {ReactComponent as Search} from '../assets/search.svg'
import {ReactComponent as Discard} from '../assets/discord.svg'
import hero from "../assets/hero.svg"

const HeroSection = () => {
  return (
    <div className="hero-section-container">
        <div className="hero-info-wrapper">
            <div className="hero-info-text">
                <h1>
                    The <span className="highlighted"> Decentralized </span>Cross-Chain Exchange
                </h1>
           
        <p className="hero-info-description">
It is established a fact that it is based on the fact of the decetralization
the readable content on it

        </p>
        <div className='search-container'>
            <div className="search-input-wrapper">
                <img className="Search" src={Search}  alt="serach"/>
<input className='search-input' placeholder="Search forTokens"></input>
            </div>
            <button className="search-btn primay">
                <span className="start-swapping">Start Swapping</span>
            </button>

        </div>
<div className="social-links-container">
    <div className="social-links">
       
    <a href="/">
            <Telegram/>
        </a>
        <a href="/">
            <Twitter/>
        </a>
        <a href="/">
            <Youtube/>
        </a>
        <a href="/">
            <Discard/>
        </a>
    </div>
</div>
    </div>
  </div>
  <div className="hero-image-container">
<div>
    <img className='hero-img' src={hero} alt="blockchain"/>
</div>
    </div>
    </div>
  )
}

export default HeroSection