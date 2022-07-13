import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import './sidebar.css'
import SidebarOption from "./SidebarOption"
import {useDataLayer} from "./DataLayer"
function Sidebar() {
  const[{playlists},dispatch]=useDataLayer();
  return (
    <div className="sidebar">

        <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="none" />
        <SidebarOption Icon={HomeIcon} title="Home"   />
        <SidebarOption Icon={SearchIcon} title="Search"   />
        <SidebarOption Icon={LibraryMusicIcon} title="YourLibrary"   />
        <br />
      
        <strong className="sidebar-playlist">PLAYLISTS</strong>
       
        <hr />
        {playlists?.items?.map(playlist=>(
        <SidebarOption title={playlist.name} />
        ))}
        
        
    </div>
  )
}

export default Sidebar