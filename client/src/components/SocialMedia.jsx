import React from 'react'
import { BsInstagram} from 'react-icons/bs'
import {FaFacebookF, FaGithub} from 'react-icons/fa'


const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
          <a href="https://www.instagram.com/tae.kty25/" ><BsInstagram /></a>
       </div>
       <div>
          <a href='https://www.facebook.com/profile.php?id=100003283834428' ><FaFacebookF /></a>
       </div>
       <div>
          <a href='https://github.com/NanthawatKTY' ><FaGithub /></a>
       </div>
    </div>
  )
}

export default SocialMedia