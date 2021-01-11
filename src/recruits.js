import React from 'react';
import axios from 'axios';



export default class Recruits extends React.Component {
    
    state = {
        recruits: [],
        activeID: '',
        value: undefined,
        responses: []
    }

    componentDidMount() {

        axios.get('http://localhost:3000/candidates').then(
            response => {
                const recruits = response.data;
                this.setState({ recruits });
            }
        )
    }

    render() {

        return (
            <ul>
                {
                    this.state.recruits.map(recruit => <li key={recruit.id} onClick={() => { this.viewCandidatesCV(recruit.id) }}>{recruit.name}</li>)
                }
            </ul>

        )

    }

   
    
}