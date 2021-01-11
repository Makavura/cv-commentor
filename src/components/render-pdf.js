import PDFViewer from 'react-view-pdf';
import React from 'react';
export default class RenderCVPdf extends React.Component {
   state = {

   }
    componentDidMount() {
        let pdfContent = this.props.pdfContent;
        let pdfContentToBeRendered = undefined;
        
        if (pdfContent) {
            pdfContentToBeRendered =  (
                <PDFViewer url={pdfContent} />
            )

        } else {
            pdfContentToBeRendered =  (
                <div className="rc_error_no_CV">
                    Error No CV To be Displayed
                </div>
            )
            this.setState({pdfContentToRender: pdfContentToBeRendered})
        }

    }

    render() {
        return  this.state.pdfContentToBeRendered
    }

    renderCVComments(){
        
    }
}