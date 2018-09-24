import * as MessageAPIUtil from '../util/message_api_util'
export const RECEIVE_ALL_MESSAGES = 'RECEIVE_ALL_MESSAGES'
export const RECEIVE_MESSAGE = 'RECEIVE_MESSAGE'

const receiveAllMessages = (messages) => {
  return {
    type: RECEIVE_ALL_MESSAGES,
    messages
  }
}

export const createMessage = (message) => dispatch => {
  return (
    MessageAPIUtil.createMessage(message))
}

export const fetchMessages = (roomId) => dispatch => {
  return MessageAPIUtil.fetchMessages(roomId).then(messages => dispatch(receiveAllMessages(messages)))
}
