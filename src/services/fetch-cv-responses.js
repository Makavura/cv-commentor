import axios from 'axios';

export default async function fetchCVResponses(id){
    axios.get(`http://localhost:3000/responses/?candidateID=${id}`)
}