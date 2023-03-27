import React from 'react'
import styles from '../styles/pages/Baselines.module.css'

export default function Baselines() {
  return (
    <div className={styles.baselinesWrapper}>
      <div className={styles.bgImage}>
      </div>

      <div className={styles.bgText}>
        <h4>Capturing Baselines</h4>
        <p>If we've determined that we want to increase the organization's accuracy score by x%, the first thing we need to know is what the organization’s current accuracy score is. That's where capturing baselines comes in.  </p>
        <div className={styles.descriptions}>
          <div>
            <h4>Quantitative Baselines</h4>
            <p>Capturing a quantitative baseline can be easy, because things like accuracy and efficiency scores are already being tracked. Quantitative metrics are often tied to performance metrics, and performance metrics are often being already tracked. </p>
          </div>
          <div>
            <h4>Qualitative Baselines</h4>
            <p>Capturing a qualitative baseline usually involves surveys. If the target is increased training satisfaction, I need to know what the current satisfaction is. If we need to increase use of online resources, there is usually a way to track how many views/clicks a resource has gotten. </p>
          </div>
        </div>
      </div>
    </div>
  )
}
