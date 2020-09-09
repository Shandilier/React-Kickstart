import React, { Component } from 'react';
import {fetchPost} from '../actions/index';
import {deletePost} from '../actions/index';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
class ShowPost extends Component {

    constructor(props) {
        super(props);
        this.onDeleteClick = this.onDeleteClick.bind(this);
    }
    componentDidMount()
    {
        this.props.fetchPost(this.props.match.params.id);
        // console.log(this.props.match.params.id)
    }
    onDeleteClick()
    {
        // console.log(this.props.match.params.id)
        this.props.deletePost(this.props.match.params.id,()=>{
            this.props.history.push('/');
        });
    }
    render() {
        if(!this.props.post)
        {
            return <div></div>
        }
        // console.log(this.props)
        return (
            <div >
                <h5>ID: {this.props.post.id}</h5>
                <br></br>
                <h5>Title: {this.props.post.title}</h5>
                <br></br>
                <h5>Category: {this.props.post.categories}</h5>
                <br></br>

                <h5>Content: {this.props.post.content}</h5>
                <Link className = "btn btn-secondary " to ="/">Back to main menu</Link>
                <button className = "btn btn-danger pull-xs-right" onClick = {this.onDeleteClick} >Delete</button>
            </div>
        )
    }
}

function mapStateToProps(state)
{
    // console.log("hi")
    return {post : state.post}
    // return {post : state.posts[ownProps.match.params.id]};
}
export default connect(mapStateToProps,{fetchPost,deletePost})(ShowPost);