import PDFViewer from 'react-view-pdf';
import React from 'react';

export default class RenderCVPdf extends React.Component {
   
    pdfContent = this.props.pdfContent;
    pdfComponentToBeRendered = undefined;
    componentDidMount() {
        
        if (PdfContent) {
            pdfContentToBeRendered =  (
                <PDFViewer url={pdfContentToBeRendered} />
            )
        } else {
            pdfContentToBeRendered =  (
                <div className="rc_error_no_CV">
                    Error No CV To be Displayed
                </div>
            )
        }
    }

    render() {
        pdfContentToBeRendered
    }
}