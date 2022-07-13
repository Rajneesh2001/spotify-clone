import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import "./header.css"
import {useDataLayer} from "./DataLayer";
function Header() {
    const[{user},dispatch]=useDataLayer();
  return (
    <div className="header">
    <div className="header-left">
        <SearchIcon />
        <input
        placeholder="search for artist,song"
        type="text"
        />
    </div>
    <div className="header-right">
    <Avatar alt={user?.images[0]?.url} src={user?.display_name} />
      <h4>{user?.display_name}</h4>
      </div>
    </div>
  )
}

export default Header