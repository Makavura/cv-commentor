import React from 'react';

export default class CommentOnCV extends React.Component {
    state = {}

    handleChange = (e) => {
        this.setState({ value: e.target.value });
    }
    
    render() {
        <form >
            <input onChange={this.handleChange} type="text" value={this.state.value}></input>
        </form>
    }
}