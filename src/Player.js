import React from 'react'
import "./player.css"
import Sidebar from './sidebar'
import Body from './Body'
import Footer from './Footer'

function Player({spotify}) {
  return (
    <div className="player">
       <div className="player-body"> 
    <Sidebar />
       <Body spotify={spotify} />
        </div>
       <Footer />
    </div>
  )
}

export default Player