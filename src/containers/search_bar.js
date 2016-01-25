import React, {Component} from 'react';

export default class SearchBar extends Component{
	//set  up the components state
	constructor(props){
		super(props);

		this.state = {term: ''};
//take the existing function onInputChange bind it to
//this (of SearchBar) and set the function back to this.onInputChange
		this.onInputChange = this.onInputChange.bind(this);
	}

//event handler
	onInputChange(event){
		//passed in term is equal to component's state of term
		this.setState({term: event.target.value});
	}

	onFormSubmit(event){
		//dont submit the form
		event.preventDefault();
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
