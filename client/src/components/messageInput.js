import React from 'react';
import { connect } from 'react-redux';

import messageInput from '../css/messageInput.css';
import {MessageSent} from '../actions';

class MessageInput extends React.Component{

	onSubmit =(e) =>{
		e.preventDefault()
		// alert('submitted');
		console.log(MessageSent);
		this.props.MessageSent({message:"jello"})
	}

	render(){
		return(
			<div className="ui form">
			<form onSubmit={this.onSubmit}>
				<label>Type your message here:</label>
				<input className="ui input">
				</input>
			</form>
			</div>
			)
	}

}

export default connect(null, {
	MessageSent
})(MessageInput);