import React from 'react'
import { BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

const SocialMedia = () => {
  return (
    <div className='app__social'>
       <div>
        <BsInstagram />
       </div>
       <div>
        <FaFacebookF />
       </div>
       <div>
        <AiOutlineMail />
       </div>
    </div>
  )
}

export default SocialMedia