import axios from 'axios';

export default async function listCandidates() {
    axios.get(`http://localhost:3000/candidates`)
}