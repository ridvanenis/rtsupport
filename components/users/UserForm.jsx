import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName);
        node.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit.bind(this)}>
                <div className="form-group">
                    <input
                        ref='userName'
                        className='form-control'
                        type="text"
                        placeholder='Set Your User Name' />
                </div>
            </form>
        )
    }
}

UserForm.propTypes = {
    setUserName: PropTypes.func.isRequired
}

export default UserForm;