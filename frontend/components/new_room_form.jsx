import React from 'react'
import { connect } from 'react-redux'
import { createRoom } from '../actions/room_actions'
import { closeModal } from '../actions/modal_actions'

class NewRoomForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      is_private: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange (e) {
    this.setState({ title: e.target.value })
  };

  handleSubmit (e) {
    e.preventDefault()
    this.props.createRoom(this.state)
    this.props.closeModal()
    this.setState({title: ''})
  }

  handleClick () {
    this.setState({is_private: !this.state.is_private})
  }

  render () {
    return (
      <div className="newRoomsForm">
        <h1 className='newroom-title'>Create a channel</h1>
        <p className='newroom-body'>Channels are where your members communicate. They’re best when organized around a topic — #leads, for example.</p>
        <form onSubmit={this.handleSubmit}>
          <div className='switch' onClick={this.handleClick}>
            <input type="checkbox" readOnly checked={this.state.is_private}/>
            <span className="slider round"></span>
          </div>
          <label id='text-label' >Anyone in your workspace can view and join this channel.</label>
          <label id='title-label'>Name</label>
          <input
            id='newroom-input'
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <input type="submit" value="Create Channel" />
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  createRoom: (room) => dispatch(createRoom(room)),
  closeModal: () => dispatch(closeModal())
})

export default connect(null, mapDispatchToProps)(NewRoomForm)
