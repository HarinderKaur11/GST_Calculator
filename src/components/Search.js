import React, { Component } from 'react';

export class Search extends Component{
	render(){

		const styleInput={
		margin:20,
		padding:12,
		fontSize:20,
		left: 20,
	};

		return (
			<div><input style={styleInput} type="text" placeholder="Enter the type of product..."/>
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
			</div>);
	}
}

export default Search;