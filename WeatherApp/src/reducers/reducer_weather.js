export default function(state = [],action)
{
    
    if(action.type==="FETCH_WEATHER")
    {
        // console.log(action.payload)
        return [action.payload.data, ...state]
    }
    return state;
}