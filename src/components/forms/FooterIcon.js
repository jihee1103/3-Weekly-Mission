import React from "react";

import facebookIcon from '../../assets/icons/icons-facebook-fill.png';
import twitterIcon from '../../assets/icons/icons-twitter-fill.png';
import youtubeIcon from '../../assets/icons/icons-youtube-fill.png';
import instagramIcon from '../../assets/icons/icons-instagram-filled.png';

const snsProperties = {
  "facebook": {
    "imgSrc": facebookIcon,
    "alt": 'icon-facebook',
    "linkTo": 'https://facebook.com'
  },
  "twitter": {
    "imgSrc": twitterIcon,
    "alt": 'icon-twitter',
    "linkTo": 'https://twitter.com'
  },
  "youtube": {
    "imgSrc": youtubeIcon,
    "alt": 'icon-youtube',
    "linkTo": 'https://youtube.com'
  },
  "instagram": {
    "imgSrc": instagramIcon,
    "alt": 'icon-instagram',
    "linkTo": 'https://instagram.com'
  },
}

function FooterIcon({value}) {
  return (
      <a href={snsProperties[value].linkTo} target="_blank">
        <img className="icon" src={snsProperties[value].imgSrc}
             alt={snsProperties[value].alt}/>
      </a>
  )
}

export default FooterIcon;