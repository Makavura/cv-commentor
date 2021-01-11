import React from 'react';

export default class SaveCVCommentResponse extends React.Component {
    
    handleSubmit = (event) => {
        console.log(event.target.value);
    }

    render() {
        <div>
            <button type="submit" onClick={this.handleSubmit}>Add</button>
        </div>
    }

}