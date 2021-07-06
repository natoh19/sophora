import './footer.css'
import React from 'react'
import {Link} from 'react-router-dom'




export default function Footer() {
    return (

        <div className="outerBox" style={{ backgroundColor: '#201c1c', marginTop: '1em', height: '4em', position: 'fixed', bottom: 0, width: '100%' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>

                    <div>
                        <a href='https://github.com/natoh19' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginRight: '1em' }}>GitHub</a>
                    </div>

                    <div>
                        <a href='https://www.linkedin.com/in/natalie-oldroyd/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginRight: '1em', marginLeft: '1em' }}>LinkedIn</a>
                    </div>
                    <div>
                        <a href='https://natoh19.github.io/' target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'white', marginRight: '1em', marginLeft: '1em' }}>Portfolio</a>
                    </div>

                    <div>
                        <Link to='/about' style={{ textDecoration: 'none', color: 'white', marginLeft: '1em' }}>About The Dev</Link>
                    </div>


                </div>

            </div>
        </div>)
}
