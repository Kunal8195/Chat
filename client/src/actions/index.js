import server from '../api/server';

export const MessageSent = (message) => async (dispatch) => {

	console.log("cam here 1")
	const response = await server.post('/addMessage', {...message});
	dispatch({
		type:'MESSAGE_HIT',
		payload: response.data
	})
}

// export const MessageSent = (message) => {
// 	return {
// 		type:'MESSAGE_HIT',
// 		payload:'Hi Kunal'
// 	}
// }