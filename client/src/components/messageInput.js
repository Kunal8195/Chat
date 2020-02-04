import React from 'react';
import { connect } from 'react-redux';

import messageInput from '../css/messageInput.css';
import {MessageSent} from '../actions';

class MessageInput extends React.Component{

	state={newMessage:''};

	onSubmit =(e) =>{
		e.preventDefault()
		// alert('submitted');
		console.log(MessageSent);
		this.props.MessageSent({message:"jello"})
	}

	onInputChange = (e) => {
		this.setState({
			newMessage:e.target.value
		})

		console.log('state', this.state)
	}

	render(){
		return(
			<div className="ui form">
			<form onSubmit={this.onSubmit}>
				<label>Type your message here:</label>
				<input
				 className="ui input"
				 value={this.state.newMessage}
				 onChange={this.onInputChange}
				 >
				</input>
			</form>
			</div>
			)
	}

}

export default connect(null, {
	MessageSent
})(MessageInput);