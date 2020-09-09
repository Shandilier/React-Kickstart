import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import {reducer as formReducer} from 'redux-form';
import SinglePost from './single_post';

const rootReducer = combineReducers({
    post : SinglePost,
    posts : PostReducer,
    form : formReducer
});

export default rootReducer;
