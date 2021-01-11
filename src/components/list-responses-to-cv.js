import React from "react";
import axios from 'axios';
import ReactDOM from 'react-dom';

export default function listResponsesToCV(id) {

    axios.get(`http://localhost:3000/responses/?candidateID=${id}`)
        .then(res => {
            let _ = JSON.parse(JSON.stringify(res.data))
            console.log(_);
            const listItems = _.map((commentEntry) =>
                <li key={commentEntry.id}>{commentEntry.recruiterComment}</li>
            );
            ReactDOM.render(
                <ul>{listItems}</ul>,
                document.getElementById('rc_comments_view')
              );
        })
}