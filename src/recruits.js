import React from 'react';
import ReactDOM from 'react-dom';
import viewResponsesToCV from './view-responses-to-cv';
import { PDFViewer } from 'react-view-pdf';
import axios from 'axios';
import jane from './jane.pdf';
import makavura from './makavura.pdf'
import styles from './Recruit.module.css';


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

    RenderPDFView(props) {
        const pdfContentToBeRendered = props.pdfContent;
        const hasPdfContent = props.hasPdfContent;
        if (!hasPdfContent) {
            return (
                <PDFViewer url={pdfContentToBeRendered} />
            )
        } else {
            return (
                <div className="rc_error_no_CV">
                    Error No CV To be Displayed
                </div>
            )
        }
    }


    handleSubmit = (event) => {
        document.getElementById("rc_input").value = "";
        axios.post(`http://localhost:3000/responses`, {
            candidateID: this.state.activeID,
            recruiterComment: this.state.value
        })
            .then(res => {
                console.log("SET VALUE TO UNDEFINED")
                this.setState({ value: undefined })
                viewResponsesToCV(this.state.activeID);
            })

    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({ value: e.target.value });

    }

    viewCandidatesCV(id) {
        console.warn(id);
        axios.get(`http://localhost:3000/candidates/?id=${id}`).then(
            response => {
                const candidateInformation = response.data;
                console.warn(candidateInformation);
                const url = candidateInformation[0].linkToCV;
                let pdfContent;
                let noPDFContent = false;
                if (candidateInformation[0].id == 1) {
                    pdfContent = makavura;
                } else if (candidateInformation[0].id == 2) {
                    pdfContent = jane;
                } else {
                    noPDFContent = true;
                    pdfContent = null;
                }
                const element = <div class="rc_recruit_cv_info_view">

                    <div class="rc_recruit_cv_view">
                        <div class="rc_pdf_content">
                            <this.RenderPDFView hasPdfContent={noPDFContent} pdfContent={pdfContent}></this.RenderPDFView>
                        </div>

                        <div class="rc_comment_form_wrapper">
                            <div class="rc_comment_input">
                                <form>
                                    <input id="rc_input" onChange={this.handleChange} type="text" value={this.state.value}></input>
                                </form>
                            </div>
                            <div class="rc_btn_wrapper">
                                <button class="rc_btn" type="submit" onClick={this.handleSubmit}>Add</button>
                            </div>
                        </div>
                    </div>
                    <style>

                    </style>

                </div>
                this.setState({ activeID: id })
                ReactDOM.render(element, document.getElementById("rc_candidate_cv_view"));

            }
        )

    }

}