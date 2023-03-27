import React from 'react'
import styles from '../styles/pages/LearningTargets.module.css'


export default function LearningTargets() {
  return (
    <div className={styles.learningTargetsWrapper}>
      <div className={styles.bgImage}>
      </div>

      <div className={styles.bgText}>
        <h4>Establishing Learning Targets</h4>
        <p>In a “made from scratch” curriculum, stakeholder interviews provide the foundation for learning targets. The members of a training ecosystem have vital insight into is and is not working.<br /><br />

          It is my job to translate “what's not working” into measurable learning targets.<br /><br />

          Examples of learning targets I've used in the past:</p>
        <div className={styles.descriptions}>
          <div>
            <h4>Quantitative Learning Targets:</h4>
            <p>Increase accuracy score by x%<br /><br />

              Increase efficiency score by x%<br /><br />

              Increase the use of training resources by x%</p>
          </div>
          <div>
            <h4>Qualitative Learning Targets:</h4>
            <p>Increase overall training satisfaction by x%<br /><br />

              Increase confidence in performing job duties by x%<br /><br />

              Increase interdepartmental communication score by x%</p>
          </div>
        </div>
      </div>
    </div>
  )
}
