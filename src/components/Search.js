import React, { Component } from 'react';
import {FilterSearch} from './FilterSearch.js';
import {SuggestionComponent} from './SuggestionComponent.js';

const productsArray=[
	{
		id: 1,
		name: 'mobile',
		gst: '12%'
	},
	{
		id: 2,
		name: 'laptop',
		gst: '28%'
	},
	{
		id: 3,
		name: 'toys',
		gst: '2%'
	}
	]


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
			<input style={styleInput} type="text" placeholder="Enter the type of product..."/>
			<input  style={styleInput} type="text" placeholder="Enter the type of service..."/>
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
			<SuggestionComponent />
			</div>);
			
	}
}

export default Search;