import React from 'react';
import MessageInput from './messageInput';
import MessageList from './messageList';

class App extends React.Component{

	render(){
		return(
			<div className="ui container">
			<div>Hello!!</div>
			<div className="inputMessageBox">
			<div>
				<MessageList />
			</div>
			<MessageInput />
			</div>
			</div>
			)
	}
}

export default App;