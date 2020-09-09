import _ from 'lodash';
import fetchPosts from '../actions/index';
import {CREATE_POSTS} from '../actions/index';
import createPosts from '../actions/index';
import {FETCH_POSTS} from '../actions/index';
import {FETCH_POST} from '../actions/index';
import fetchPost from '../actions/index';
import {DELETE_POST} from '../actions/index';
import delete_post from '../actions/index';

const PostReducer = (state={},action) => {
    // console.log(state)    
    switch(action.type){
        // case FETCH_POST:
        // {
        //     // console.log(action.payload.data)
        //     const post = action.payload.data;
        //     return {...state,[action.payload.data.id]:action.payload.data}
        // }
        case FETCH_POSTS:
            return _.mapKeys(action.payload.data,'id');
        case CREATE_POSTS:
            return state;
        case DELETE_POST:
        {
            console.log(action.payload);
            return state;
        }
        default:
            return state;
    }
}
export default PostReducer;