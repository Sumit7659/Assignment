import React from 'react'
import './Section04.css'
import GET from '../images/GET.png'
import Button from '../images/Button.png'
import {Link} from 'react-router-dom'
function Section04() {
  return (
    <>
    <div className='section04'>
    <div className='section04-top'>
            <div className='section04-left'>
                <b>Newsletter</b> <br/>
                <p>Get news about articles and updates in your inbox.</p>
            </div>
            <div className='section04-right'>
            <div class="message-box">
            <form>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Name</label>
    </div>
    <div class="user-box">
      <input type="email" name="" required=""/>
      <label>Email</label>
    </div>
    <div class="user-box">
      <input type="text" name="" required=""/>
      <label>Message</label>
    </div>
  </form>
</div>
            </div>
        </div>
        <div className='section04-bottom'>
            <img className='Get' src={GET} alt=''></img>
            <Link to='/'><img className='Send' src={Button} alt=''/></Link>
        </div>
    </div>
    </>
  )
}

export default Section04
