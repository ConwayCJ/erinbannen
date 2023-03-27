import React from 'react'
import styles from '../styles/pages/FacilitateTraining.module.css'

export default function FacilitateTraining() {
  return (
    <div className={styles.facilitateTrainingWrapper}>
      <div className={styles.bgImage}>
      </div>

      <div className={styles.bgText}>
        <p>
          Once we have baselines for the learning targets, we’re ready to make targeted training interventions.<br></br><br></br>
          The type of intervention is often informed by bandwidth and resources: if we have the resources for live trainings in a learning management system, excellent! <br></br><br></br> If we need to create an on-demand asynchronous training that requires no live trainers, excellent! <br></br><br></br> Below you’ll find examples of both types of trainings and more.  Regardless of the format, the trainings will reliably have two things:</p>
        <ul>
          <li>A demonstration of the target skill:</li><br></br>
          <li>An opportunity for the learner to practice the target skill.</li>
        </ul>

        <p></p>
        <p>
          Close and see below for training examples
        </p>
      </div>
    </div >
  )
}
