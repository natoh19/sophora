import React from 'react'
import {Link} from 'react-router-dom'



export default function HomePageBanner(){
    return (
        <div className="banner-flex-container">

        <div className="banner-img">
        <Link to="/categories/1">
             <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1623352642/Copy_of_Untitled_gvhyfz.png" alt="makeup" />

             </Link>
        </div>

        <div className="banner-img">
        <Link to="/categories/4">
         <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1623352641/makeup_jtv2vu.png" alt="haircare"/>
         </Link>

        </div>

        <div className="banner-img">
        <Link to="/categories/2">
            <img src="https://res.cloudinary.com/dse6ebwba/image/upload/v1623352641/haircare_etzwfa.png" alt="skincare"/>
            </Link>
        </div>

        </div>
    )
}
