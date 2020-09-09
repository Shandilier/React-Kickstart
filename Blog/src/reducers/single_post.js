import _ from 'lodash';
import fetchPosts from '../actions/index';
import {CREATE_POSTS} from '../actions/index';
import createPosts from '../actions/index';
import {FETCH_POSTS} from '../actions/index';
import {FETCH_POST} from '../actions/index';
import fetchPost from '../actions/index';
import {DELETE_POST} from '../actions/index';
import delete_post from '../actions/index';

const SinglePost = (state={},action) => {
    // console.log(state)    
    switch(action.type){
        case FETCH_POST:
        {
            // console.log(action.payload.data)
            return action.payload.data;
        }
        default:
            return state;
    }
}
export default SinglePost;