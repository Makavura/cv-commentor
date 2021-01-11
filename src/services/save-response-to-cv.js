import axios from 'axios';

export default function saveCvComment(candidateId, cvResponse) {
    axios.post(`http://localhost:3000/responses`, {
        candidateId: candidateId,
        recruiterComment: cvResponse
    })
}