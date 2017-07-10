import React, { Component } from 'react';



 export class Logic extends Component{

	render(){

	const styleButton={
		backgroundColor:"green",
		margin:20,
		padding:12,
		fontSize:20,
	};

		return(
			<div>
			<button style={styleButton} >GST rates on Goods</button>
        	<button style={styleButton}>GST rates on Services</button>
			</div>
			);
	
	}
}

export default Logic;