import React from 'react';

export default class CandidatesProfile extends React.Component {

    render() {
        <div>
            <div className={styles.rc_recruit_img_wrapper}>
                <img className={styles.rc_recruit_img} src={this.props.imgUrl}></img>
            </div>
            <div className={styles.rc_recruit_name}>
                <p>{this.props.name}</p>
            </div>
        </div>
    }
}
