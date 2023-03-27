import React from 'react'
import styles from '../styles/pages/LifeCycle.module.css'

export default function LifeCycle() {
  return (
    <div className={styles.lifeCycleWrapper}>
      <div className={styles.bgImage}>
      </div>
      <div className={styles.bgText}>

        <p>If I am creating a training from scratch, I use a 5 step process.</p>
        <ul>
          <li>Stakeholder Interviews</li>
          <li>Establish Learning Targets</li>
          <li>Capture Baselines</li>
          <li>Create and Facilitate Training</li>
          <li>Measure Impact</li>
        </ul>
      </div>
    </div>
  )
}
