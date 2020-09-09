import React, { Component } from 'react';
import {Field,reduxForm, getFormSyncWarnings} from 'redux-form';
import {Link} from 'react-router-dom';
import {createPosts} from '../actions/index';
import { connect } from 'react-redux';
class NewPost extends Component {

    constructor(props) {
        super(props);
        this.printError = this.printError.bind(this);
        this.renderField = this.renderField.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    printError(field) {
        // console.log(field);
        if(field.meta.touched)
        { 
            return(
                <React.Fragment>
                    {field.meta.error}
                </React.Fragment>
            )
       }
       return (
           <React.Fragment></React.Fragment>
       )
    }
    renderField(field)
    {
        // console.log(field.meta.touched);
        return (
            <div className = "form-group has-danger">
                <h3>
                    {field.label}
                </h3>
                <input style = {{height:field.height, width : field.width}} type="text" autoComplete="off"
                    {...field.input}>
                </input>
                <div className="text-help">
                {this.printError(field)}
                </div>
                {/* {field.meta.error} */}

            </div>
        ); 
    }
    onSubmit(values) // contains all the values filled inside the form as an object (here as values)
    {
        
        this.props.createPosts(values,()=>{
            this.props.history.push("/");
            });
    }
    render() {
        // console.log(this.props)
        const {handleSubmit} = this.props;   //this is executed only after the form is valid
        return(
            <form className = "ui form" onSubmit = {handleSubmit(this.onSubmit)}>
                <Field name="title" component = {this.renderField} label = "Title" height="40px" width="500px"></Field>
                <Field name="categories" component = {this.renderField} label = "Category" height="40px" width="500px"></Field>
                <Field name = "content" component = {this.renderField} label = "Body" height="200px" width="500px"></Field>
                <button className = "btn btn-secondary">Submit</button>
                <Link className = "btn btn-primary" to = "/" >Cancel</Link>
            </form>
        )
    }
}

function validate(values) {
    const err = {};
    // console.log(values)
    if(!values.title)
    {
        err.title = "Enter a valid title"
    }
    else if(values.title.length<3)
    {
        err.title = "Too small title"
    }
    if(!values.categories)
    {
        err.categories = "Enter a valid category"
    }
    if(!values.content)
    {
        err.content = "Enter the body"
    }
    // if err is empty, there are no errors
    //else the form is invalid
    return err;
}

export default reduxForm({
    validate: validate,
    form : 'PostsNewForm'
})(connect(null,{createPosts})
    (NewPost));

