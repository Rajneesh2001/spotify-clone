export const authEndPoint="https://accounts.spotify.com/authorize";

const redirectUri="http://localhost:3000/callback/";
const clientId="3fc818f9f80640df881b183a7aac5d3e";
const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
]
export const getDataUrl=()=>{
                     return window.location.hash
                            .substring(1)
                             .split("&")
                            .reduce((initialValue,item)=>{
                              var parts=  item.split("=")
                              initialValue[parts[0]]=decodeURIComponent(parts[1])

                              return initialValue
                            },{}); 
                        }
export const loginUrl =`${authEndPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`


