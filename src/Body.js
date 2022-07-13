import React from 'react'
import Header from "./Header";
import "./body.css"
import {useDataLayer} from "./DataLayer";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import SongRow from "./SongRow";
function Body({spotify}) {
  const[{discover_weekly},dispatch]=useDataLayer();
  return (
    <div className="body">
      <Header spotify={spotify}/>
      <div className="body__info">
      <img src={discover_weekly?.images[0]?.url} />
      <div className="body__infoText">
        <strong>PlayList</strong>
        <h2>Discover Week</h2>
        <p>{discover_weekly?.description}</p>
      </div>
      </div>
      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle"/>
          <FavoriteIcon fontSize="large"/>
          <MoreHorizIcon />
        </div>
        {discover_weekly?.tracks.items.map(item=>(
          <SongRow track={item.track}/>
        ))}
        {/* <SongRow track={tracks.items.map(item=>)}
       */}
      </div>
      </div>
  )
}

export default Body