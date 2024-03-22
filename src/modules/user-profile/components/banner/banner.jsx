import { memo } from 'react'
import "./banner.css"
import Img from '../../../../assets/banner-img.png'

const Banner = memo(function Banner({ img = Img, heading, content }) {
    return (
        <div className='banner'>
            <img className='banner-img' src={img} alt="banner image" />
            <div >
                <h3 className='banner-heading'>{heading}</h3>
                <p className='banner-content'>{content}</p>
            </div>
        </div>
    )
})

export default Banner