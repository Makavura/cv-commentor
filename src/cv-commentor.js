import  ListCandidates from './components/list-candidates';
import styles from './cv-commentor.module.css';

function CVCommentor() {
  return (
    <div className="rc_main">

      <header className={styles.rc_header}>

        <div className={styles.rc_banner_txt}>
          <p> Recruit Commentor</p>
        </div>

      </header>

      <div className="rc-responsive">

        <div className="rc-candidates_list">
          <ListCandidates></ListCandidates>
        </div>

        <div id="rc_candidate_cv_view">

        </div>

        <div id="rc_candidate_cv">

        </div>

        <div id="rc_comments_view">
          
        </div>

        <div id="rc-comments-response">

        </div>
        
      </div>
    </div>
  );
}

export default CVCommentor;
