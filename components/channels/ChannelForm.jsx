import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChannelForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.channel;
        const channelName = node.value;
        this.props.addChannel(channelName);
        node.value = "";
    }
    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className='form-group'>
                    <input type="text"
                        className='form-control'
                        placeholder='Add Channel'
                        ref='channel'
                    />
                </div>

            </form>
        )
    }
}

ChannelForm.prototypes = {
    addChannel: PropTypes.func.isRequired
}

export default ChannelForm