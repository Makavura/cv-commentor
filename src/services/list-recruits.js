import axios from 'axios';

export default async function listCandidates() {
    axios.post(`http://localhost:3000/candidates`)
}