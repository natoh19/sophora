import './footer.css'
import React from 'react'
import {Link} from 'react-router-dom'




export default function Footer() {
    return (

        <div className="footer-outer-box" >

                <div className="footer-container">


                        <a href='https://github.com/natoh19' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginRight: '1em' }}>GitHub</a>



                        <a href='https://www.linkedin.com/in/natalie-oldroyd/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginRight: '1em', marginLeft: '1em' }}>LinkedIn</a>


                        <a href='https://natoh19.github.io/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginRight: '1em', marginLeft: '1em' }}>Portfolio</a>



                        <Link to='/about' style={{ textDecoration: 'none', color: 'white', marginLeft: '1em' }}>About</Link>



                </div>


        </div>)
}
