import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Channel extends Component{
    onClick(e){
        e.preventDefault();
        const {setChannel, channel} = this.props;
        setChannel(channel);
    }
    
    render(){
        const {channel} = this.props;
        return (
            <li>
                <a>
                    {channel.name}
                </a>
            </li>
        )
    }
}

ChannelMergerNode.proTypes = {
    channel: PropTypes.object.isRequired,
    setChannel: PropTypes.func.isRequired
}

export default Channel;