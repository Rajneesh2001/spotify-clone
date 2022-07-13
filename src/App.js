import Login from "./Login"
import './App.css';
import React,{useEffect,useState} from "react";
import {getDataUrl} from "./spotify"
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayer } from "./DataLayer";
import Player from "./Player";

const spotify = new SpotifyWebApi();
function App() {
  
  const[{user,token},dispatch]=useDataLayer();
  
   useEffect(()=>{
  const hash=getDataUrl();
  window.location.hash="";
  const _token=hash.access_token;
  if(_token){
    dispatch({
      type:'SET_TOKEN',
      token:_token
    })
    spotify.setAccessToken(_token);
    spotify.getMe().then((user)=>{
      dispatch({
        type:'SET_USER',
        user:user
      })
      
    })
    spotify.getUserPlaylists().then((playlists)=>{
    dispatch({
      type:'SET_PLAYLISTS',
      playlists:playlists
    })
    })
  }
  spotify.getPlaylist("37i9dQZEVXcUa0LSUX6lSg").then(response=>{
    dispatch({
      type:'SET_DISCOVER_WEEKLY',
      discover_weekly:response,
    })
  })
  
 
  
}, [])

  return (
    <div className="App">
     
     {
      token?(<Player spotify={spotify}/>):<Login />
     }
    </div>
  );
}

export default App;
