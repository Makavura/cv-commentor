import React from 'react';
import ReactDOM from 'react-dom';
import jane from '../jane.pdf';
import makavura from '../makavura.pdf'
import PDFViewer from 'react-view-pdf';
import axios from 'axios';
import styles from '../cv-commentor.module.css';
export default class ListCandidates extends React.Component {
    state = {
        recruits: []
    }
    /* 
    Fetch Candidate information from backend
    */
    componentDidMount() {
        axios.get('http://localhost:3000/candidates').then(
            response => {
                const recruits = response.data;
                this.setState({ recruits });
            }
        )
    }

    viewCandidatesCV(id) {

        console.warn(id);
        axios.get(`http://localhost:3000/candidates/?id=${id}`).then(
            response => {
                const candidateInformation = response.data;
                console.warn(candidateInformation);
                const url = candidateInformation[0].linkToCV;

                if (candidateInformation[0].id == 1) {
                    
                    const _ =  <PDFViewer url={makavura} />
                    ReactDOM.render(_, document.getElementById("rc_candidate_cv_view"));
                    
                } else if (candidateInformation[0].id == 2) {

                } else {

                }
              
            }
        )

    }

    render() {

        return <ul>
            {
                this.state.recruits.map(recruit => <li key={recruit.id} onClick={() => { this.viewCandidatesCV(recruit.id) }}>{recruit.name}</li>)
            }
        </ul>
    }
}
