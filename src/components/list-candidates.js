import React from 'react';
import RenderCVPdf from './render-pdf';
import jane from '../sample-pdfs/jane.pdf';
import makavura from '../sample-pdfs/makavura.pdf'
import listCandidates from '../services/list-recruits';
import fetchCandidateInfo from '../services/fetch-candidate-info';
import listResponsesToCV from './list-responses-to-cv';

export default class ListCandidates extends React.Component {
    state = {
        recruits
    }
    /* 
    Fetch Candidate information from backend
    */
    componentDidMount() {
        const response = await listCandidates();
        this.setState({ recruits: response })
    }

    viewCandidatesCV(id) {
        const response = await fetchCandidateInfo(id);
        console.log(response);

        const candidateId;
        if (candidateId == 1) {
            pdfContent = makavura;
        } else if (candidateId == 2) {
            pdfContent = jane;
        } else {
            noPDFContent = true;
            pdfContent = null;
        }

        const element = <div>
            <RenderCVPdf pdfContent={pdfContent}></RenderCVPdf>
        </div>

        ReactDOM.render(element, document.getElementById("rc_candidate_cv_view"));
        listResponsesToCV(id);
    }

    render() {
        <ul>
            {
                this.state.recruits.map(recruit => <li key={recruit.id} onClick={() => { this.viewCandidatesCV(recruit.id) }}>{recruit.name}</li>)
            }
        </ul>
    }
}
