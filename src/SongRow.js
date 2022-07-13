import React from 'react'
import "./songRow.css"

function SongRow({track}) {
    
  return (
    
    <div className="song__row">
        <img className="song__row__album" src={track.album.images[0].url} alt="" />
        <div className="song__row__info">
        {console.log("yeah")}
        <h1>{track.name}</h1>
        <p>{track.artists.map((artist)=>artist.name).join(", ")} -{" "}
        {track.album.name}</p>
        </div>
        
    </div>
   

  )
} 

export default SongRow