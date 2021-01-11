import axios from 'axios';

export default async function fetchCandidateInfo(id) {
    axios.get(`http://localhost:3000/candidates/?id=${id}`)
}
