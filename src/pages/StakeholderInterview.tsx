import React from 'react'
import styles from '../styles/pages/StakeholderInterviews.module.css'

export default function StakeholderInterview() {
  return (
    <div className={styles.stakeholderWrapper}>
      <div className={styles.bgImage}>
      </div>

      <div className={styles.bgText}>
        <p>Before I develop training materials, I ask multiple stakeholders the same question:</p>
        <h6>How would you measure the success of a training?</h6>

        <p>Examples of answers I've received:</p>
        <ul>
          <li>“We need to increase the accuracy score of our teams.”</li>
          <li>“We need our teams to actually enjoy coming to the trainings.”</li>
          <li>“A training is successful if it has materials that people reference later.”</li>
          <li>“A training is successful if it's interactive. Lecturing hasn't worked for us.”</li>
        </ul>
        <h6>It is my job to translate these answers into learning targets. </h6>
      </div>
    </div>
  )
}
