import React, {Component} from 'react';
import Channel from './Channel.jsx';
import PropTypes from 'prop-types';

class ChannelList extends Component{
    render(){
        return (
            <ul>{
                this.props.channels.map(chan => {
                   return <Channel 
                    channel = {chan}
                    key = {chan.id}
                    setChannel = {this.props.setChannel}
                    />
                })
            }
            </ul>
        )
    }
}

ChannelList.propTypes = {
    channels:  PropTypes.array.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default ChannelList
