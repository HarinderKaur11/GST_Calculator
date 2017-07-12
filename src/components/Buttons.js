import React, { Component } from 'react';
import {Search} from './Search.js';

 export class Buttons extends Component{

 	constructor(props){
 		super(props);
 		this.Input=this.Input.bind(this);
 	}

 	Input(){
 		return (alert("hello"));
 			
 	}

	render(){

	const styleButton={
		backgroundColor:"green",
		margin:20,
		padding:12,
		fontSize:20,
	};

		return(
			<div>
			<button style={styleButton} onClick={this.Input}>GST rates on Goods</button>
        	 <button style={styleButton}>GST rates on Services</button>
        	 <button style={styleButton}>GST rates by % tax </button>
        	 <button style={styleButton}>GST rates for all products</button>
        	 <Search />
			</div>
			);
	
	}
}

export default Buttons;