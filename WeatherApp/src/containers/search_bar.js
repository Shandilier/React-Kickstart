import React, { Component } from 'react';
import {fetchWeather} from '../actions/index';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          term : ""
        }
      }
    
    onFormSubmit = (event) => {
        event.preventDefault();   
        // console.log(this.state.term);// prevents page from refreshing in the beginning and also prevents the removal of text written inside the block
        this.props.fetchWeather(this.state.term);
        this.setState({
            term : ""
        })
    }
    onInputChange = (event) => {
        // console.log(this.state.term)
        this.setState({
            term : event.target.value
        })
    }
    render () {
        return (
            <div className = "search-bar ui segment">
                <form className = "ui form" onSubmit = {this.onFormSubmit}>
                    <input type="text" style = {{backgroundColor:"white",width:"700px"}}placeholder = "Enter name of the city" onChange = {this.onInputChange} value = {this.state.term}></input>
                    <span className = "input-group-btn">
                        <br></br>
                        <button className ="btn btn-primary" type="submit">
                            Submit
                        </button>
                    </span>
                </form>
            </div>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return(
        bindActionCreators({fetchWeather},dispatch)
    )
}
export default connect(null,mapDispatchToProps)(SearchBar);