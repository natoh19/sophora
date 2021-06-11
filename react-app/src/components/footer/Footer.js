import './footer.css'
import React from 'react'




export default function Footer() {
    return (

        <div className="outerBox" style={{ backgroundColor: '#201c1c', marginTop: '1em', height: '4em', position: 'fixed', bottom: 0, width: '100%' }}>
            <div maxWidth="lg" className="container">
                <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '1em' }}>

                    <div>
                        <a href='https://github.com/natoh19' target="_blank" style={{ textDecoration: 'none', color: 'white', marginRight: '.75em' }}>GitHub</a>
                    </div>

                    <div>
                        <a href='https://www.linkedin.com/in/natalie-oldroyd/' target="_blank" style={{ textDecoration: 'none', color: 'white', marginLeft: '.75em' }}>LinkedIn</a>
                    </div>

                </div>

            </div>
        </div>)
}
