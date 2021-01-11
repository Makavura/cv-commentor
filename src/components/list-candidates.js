import React from 'react';
import listCandidates from '../services/list-recruits';

export default class ListCandidates extends React.Component {
    state = {
        recruits
    }
    /* 
    Fetch Candidate information from backend
    */
    componentDidMount() {
        const response = await listCandidates();
        console.log(response);
        this.setState({ recruits: response })
    }

    render() {
        <ul>
            {
                this.state.recruits.map(recruit => <li key={recruit.id}>{recruit.name}</li>)
            }
        </ul>
    }
}
