import React, {Component} from 'react';
//bring in ActionCreator fetchWeather
import {fetchWeather} from '../actions/index.js'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

export class SearchBar extends Component{
	//set  up the components state
	constructor(props){
		super(props);

		this.state = {term: ''};
//take the existing function onInputChange bind it to
//this (of SearchBar) and set the function back to this.onInputChange
		this.onInputChange = this.onInputChange.bind(this);
		//this is a callback which needs to be binded
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

//event handler
	onInputChange(event){
		//passed in term is equal to component's state of term
		this.setState({term: event.target.value});
	}

//need tp bind context of onFormSubmit
	onFormSubmit(event){
		//dont submit the form
		event.preventDefault();
		//call to fetch the weather
		this.props.fetchWeather(this.state.term);
		//on submit it will clear the search term
		this.setState({term: ''});
	}

	render(){
		return(
			<form onSubmit={this.onFormSubmit} className="input-group">
				<input 
					placeholder="Get a five day forecast in your favorite cities"
					className = "form-control"
					value ={this.state.term}
					onChange={this.onInputChange}
				/>
				<span className = "input-group-btn">
					<button type="submit" className="btn btn-secondary">Submit</button>
				</span>
			</form>
		);
	}
}

//anything return from this function will return as props on the SearchBar container
function matchDispatchToProps(dispatch){
	//key of fetchWeather: with a value of fetchWeather we passed in
	//fetchWeather is set up to flow through the dispatch action to middleware and to the reducers
	return bindActionCreators({fetchWeather}, dispatch)
}

//the null takes the place of possible mapStateToProps
//matchDispatchToProps has to be the 2nd argument
export default connect(null, matchDispatchToProps)(SearchBar);
