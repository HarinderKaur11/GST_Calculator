import React, { Component } from 'react';

export class FilterSearch extends Component{
	constructor(props){
		super(props);
		this.state={
			search: ''
		};
	}

	updateSearch(event){
		this.setState({
			search: event.target.value
		});
	}

	render(){
		let filteredProducts=this.props.products.filter(
			(product)=>{
				return product.name.indexOf(this.state.search) !== -1;
			}
			);


		return(
			<div>
			<h1>Search here</h1>
			<input type="text" value={this.state} onChange={this.updateSearch.bind(this)} />
				 <ul>
					{filteredProducts.map((product)=>{
						return <li>{product}</li>
					})}
				</ul>	
			</div>
			);
	}
}

export default FilterSearch;