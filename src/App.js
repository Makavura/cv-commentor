import Recruits from './recruits';
import styles from './Recruit.module.css';


function App() {
  return (
    <div className="rc_main">

      <header className={styles.rc_header}>
        <div className={styles.rc_banner_wrapper}>

        </div>
        <div className={styles.rc_banner_txt}>
          <p> Recruit Commentor</p>
        </div>
      </header>

      <div className="rc-responsive">
        <div className="rc-candidates_list">
          <Recruits></Recruits>
        </div>
        <div id="rc_candidate_cv_view">

        </div>
        <div id="rc_candidate_cv">

        </div>
        <div id="rc_comments_view">
          
        </div>
      </div>
    </div>
  );
}

export default App;
