import React from 'react'
import HomePageBanner from './HomePageBanner'
import HomePagePromo from './HomePagePromo'
import HomePageProducts from '../product/HomePageProducts'
import './homePage.css'




export default function HomePage() {



    return (

        <>

        <div>
      <HomePageBanner />


        </div>
        <div>

            <HomePagePromo />

            </div>
            <div >
            <HomePageProducts />
            </div>
            </>









    )
}
