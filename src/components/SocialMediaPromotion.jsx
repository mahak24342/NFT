import React from 'react'
import { Card } from './Card'
import  discord from '../assets/discord2.svg';
import Youtube from '../assets/youtube2.svg';
import  paper from '../assets/paper.svg';
import  blog from '../assets/blog.svg';
const SocialMediaPromotion = () => {
  return (
    <div className='social-media-promotion-container'
    >
<Card>
    <>
    
    <div className='social-media-promtion-text'>
<h2>
    <span className='highlighted'>
        Join

    </span>Our Community
</h2>
    </div>
    <div className='social-media-promotions-icons'>
<a href="/">
    <img src={discord} alt="discord"/>
</a>
<a href="/">
    <img src={Youtube} alt="youtube"/>
</a>

<a href="/">
    <img src={paper} alt="white paper"/>
</a>
<a href="/">
    <img src={blog} alt="blog"/>
</a>

    </div>
    </>
</Card>

    </div>
  )
}

export default SocialMediaPromotion