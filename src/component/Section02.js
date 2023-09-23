import React from 'react'
import Fresh from '../images/Fresh.png'
import year from '../images/2022.png'
import Look from '../images/Look.png'
import Man from '../images/Man.png'
import Orange from '../images/Orange.png'
import Star from '../images/Star.png'
import './Section02.css'
import {Link} from 'react-router-dom'
function Section02() {
  return (
    <>
        <div className='Section02'>
            <div className='Section02-top'>
                <img src={Fresh} alt='' className='Fresh'></img>
                <img src={Star} alt='' className='Star'></img>
                <img src={Man} alt='' className='Man'></img>
                <img src={year} alt='' className='year'></img> 
                <img src={Orange} alt='' className='Orange'></img>
                <p className='Jacket'>OREGON JACKET <br/>$124 </p>
                <img src={Look} alt='' className='Look'></img>
                 <br/>
                
                <Link to='/' className='button'>See more <i className="fa-solid fa-location-arrow"></i></Link>
            </div>
        </div>
    </>
  )
}

export default Section02
