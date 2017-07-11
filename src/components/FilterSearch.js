import React, { Component } from 'react';

let productsArray=[
	{
		id: 1,
		name: 'mobile',
		gst: '12%',
	},
	{
		id: 2,
		name: 'laptop',
		gst: '28%',
	},
	{
		id: 3,
		name: 'toys',
		gst: '2%',
	}
	]

export class FilterSearch extends Component{
	constructor(props){
		super(props);
		this.state={
			search: '';
		}
	}

	updateSearch(event){
		this.setState({
			search: event.target.value
		});
	}

	render(){
		let filteredProducts=this.props.productsArray.filter(
			(product)=>{
				return product.name.indexOf(this.state.search) !== -1;
			}
			);


		return(
			<div>
				<input type="text" value={this.state} onChange={this.updateSearch.bind(this)} />
			</div>
			);
	}
}

export default FilterSearch;