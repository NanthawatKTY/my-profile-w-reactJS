import React, {useState} from 'react'
import './Footer.scss'
import { images } from '../../constants'
import { AppWrap, MotionWrap } from '../../wrapper'
import { client } from '../../client'

const Footer = () => {

  const [formData, setFormData] = useState({name: '', email: '', message: ''})
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const  {name, email, message} = formData;

  const handleChangeInput = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]: value})
  }

  const handleSubmit = (e) => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact).then(() => {
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }

  return (
    <>
      <h2 className='head-text'>Take a cup of tea & chat with me</h2>

      <div className='app__footer-cards'>
          <div className='app__footer-card'>
            <img src={images.email} alt="email" />
            <a href="mailto:nanthawatkty.work@gmail.com" className='p-text'>nanthawatkty.work@gmail.com</a>
          </div>
          <div className='app__footer-card'>
            <img src={images.mobile} alt="mobile" />
            <a href="tel: (+66)65-659-2845" className='p-text'>(+66)65-659-2845</a>
          </div>
      </div>

      {!isFormSubmitted ?
        <div className="app__footer-form app__flex">
          <div className='app__flex'>
            <input 
              type="text" 
              className='p-text' 
              placeholder='Your name'
              name='name' 
              value={name} 
              onChange={handleChangeInput}
            />
          </div>
          <div className='app__flex'>
            <input 
              type="email" 
              className='p-text' 
              placeholder='Your email'
              name='email' 
              value={email} 
              onChange={handleChangeInput}
            />
          </div>
          <div>
            <textarea 
              className='p-text' 
              placeholder='Your message'
              value={message}
              name='message'
              onChange={handleChangeInput}
            />
          </div>
          <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending...' : 'Send Message'}</button>
        </div>
        
        : 
        
        <div>
          <h3 className='head-text'>Thank you for getting in touch.</h3>
        </div>
      }
    </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
)