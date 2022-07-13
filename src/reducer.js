export const initialState={
  user:null,
  playlist:[],
  playing:null,
  item:null,
//   token:'BQDCB9VZX0nh3kACllGaXtiZQhbUYn7aIn8Ic6haQa5AVmJDDHLqpFFrmfevKCQPiExChBic9018rrug5UTTnE5rJewr2FTk96FlNcM4-94JNxNSz5VBVyhV4TJYGXmg1IreETfZ8vvhY6JQKHtIKKzAVylifHLGQHcIvlx8VjBMhJ3RFQ6edabuAVQNBGNNcYMCGrT6lCtDmW74jZVN',
}


const reducer=(state,action)=>{
    console.log(action)
    switch(action.type){
        case 'SET_USER':
        return {
            ...state,
            user:action.user
        }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }
        case 'SET_PLAYLISTS':
        return {
            ...state,
            playlists:action.playlists
        }
        case 'SET_DISCOVER_WEEKLY': 
            return{
                ...state,
                discover_weekly:action.discover_weekly

            }
        default :
        return state
    }
}


export default reducer