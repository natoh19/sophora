import React from 'react'
import {Link} from 'react-router-dom'
import './homePage.css'



export default function HomePageBanner(){
    return (
        <div className="banner-flex-container">

        <div className="banner-img">
        <Link to="/categories/1">
             <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1628371513/1_w6beba.png" alt="makeup" />

             </Link>
        </div>

        <div className="banner-img">
        <Link to="/categories/4">
         <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1628371511/3_gaujgj.png" alt="haircare"/>
         </Link>

        </div>

        <div className="banner-img">
        <Link to="/categories/2">
            <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1628371513/2_ylgqak.png" alt="skincare"/>
            </Link>
        </div>

        </div>
    )
}
