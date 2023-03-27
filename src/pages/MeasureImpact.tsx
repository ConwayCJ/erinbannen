import React from 'react'
import styles from '../styles/pages/MeasureImpact.module.css'

export default function MeasureImpact() {
  return (
    <div className={styles.measureImpactWrapper}>
      <div className={styles.bgImage}>
      </div>
      <div className={styles.bgText}>
        <h1>Measuring Impact</h1>
        After the intervention has been implemented, we get to measure the impact. <br /><br /> If our qualitative measurement was tied to job performance metrics, we look to the job performance metrics to see if there has been an impact. <br /><br /> If our measurement was qualitative, we re-send the qualitative survey.
      </div>
    </div>
  )
}
