import React, { Component } from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {fetchPosts} from '../actions/index';

import { Link } from 'react-router-dom';
class PostIndex extends Component {
    constructor(props)
    {
        super(props);
    }
    componentDidMount() {
        // console.log("Sup")   
        this.props.fetchPosts();
    }
    // submit = (post) => {
    //     console.log(post)
    // }
    renderPost() {
        // console.log(this.props.posts)
        
        return _.map(this.props.posts, post => {    // since this.props.posts is an object so map cannot be used
            if(post.title===null)
                return null;
            const url = `/post/${post.id}`;
            // const id = post.id
            return (
                
                // <li key = {post.id} className ="list-group-item">
                    <tr key = {post.id}>
                        <td>{post.title}</td>
                        <td>
                        <Link className = "btn btn-primary" to ={url} id= {post.id}>Expand</Link>
                        </td>
                    </tr>
                    
                // </li>
            )        
        })
    }
    render() {
        // console.log(this.props)

        return (
            <div>
                <br></br>
                <div className = "text-xs-right">
                    <Link className = "btn btn-primary" to="/post/new">
                        Add a post
                    </Link>
                </div>
                {/* <ul className ="list-group"> */}
                <h3>POSTS</h3>
                <table className = "table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Link to full post</th>
                            {/* <th>Remove Post </th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderPost()}
                    </tbody>                    
                </table>

                {/* </ul> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
// console.log(state.posts)
    return {
        posts : state.posts
    }
    // return null;
}
export default connect(mapStateToProps,{fetchPosts})(PostIndex) ;