import React, { Component } from 'react';
import {FilterSearch} from './FilterSearch.js';
import {SuggestionScrollbar} from './SuggestionScrollbar.js';
import {ServicesArrayComponent} from './ServicesArrayComponent.js';


export class Search extends Component{
	
	render(){

		const styleInput={
		margin:20,
		padding:12,
		fontSize:20,
		left: 20,
	};

	return (
			<div>
				<SuggestionScrollbar />
				<ServicesArrayComponent />
				<select style={styleInput} >
					<option>No GST</option>
					<option>0.25%</option>
					<option>3%</option>
					<option>5%</option>
					<option>12%</option>
					<option>18%</option>
					<option>28%</option>
				</select>
			{/*<FilterSearch products={this.props.productsArray}/> */}
			
			</div>
			);
			
	}
}

export default Search;