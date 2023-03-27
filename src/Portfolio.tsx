import React from 'react'
import styles from './styles/Portfolio.module.css'
import Image from 'react-bootstrap/Image'
import { Button } from 'react-bootstrap'


export default function Portfolio() {


  return (
    <section className={styles.portfolioWrapper} id="about">



      <div className={styles.imageAndText}>
        <Image
          fluid
          src="https://images.theconversation.com/files/45159/original/rptgtpxd-1396254731.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1356&h=668&fit=crop"
          className={styles.aboutMeImage}></Image>

        <div className={styles.aboutAbilityText}>
          <h1>Ability</h1>
          <p>
            I spent 5 years teaching at Austin Community College and doing instructional design for Varsity Tutors. The academic space informed my instructional design, and my instructional design enriched my classroom. I became fluent in the language of both learning ecosystems, and I took the best practices from both.
            In my second year of teaching, I won a research grant from Austin Community College. The grant allowed me to conduct a year of research on instructional design. I studied multiple strategies, piloted the strategies in my classroom, and presented my results to other teachers. My cohort of researchers and I led a 5-day conference where we reported our research and provided training for our peers.
            This is where I learned that in most cases, active-learning is the most effective training tool we've got. We offer learners the best chance at success when we give them many chances to practice.
          </p>
          <Button size="lg" className={styles.aboutMeButton} href="#projects">Portfolio</Button>
        </div>
      </div>


      <div className={styles.aboutAbility}>
        <Image fluid className={styles.aboutAbilityImage} src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg"></Image>
        <div className={styles.aboutAbilityText}>
          <h1>Experience</h1>
          <p>Erin is a high impact instructional designer who specializes
            in evidence-based strategies. Her portfolio includes an
            overview of her end-to-end instructional design process
            (from stakeholder interviews to measuring the success of the
            training) as well as examples of trainings she has led in the
            past.
          </p>
          <Button size="lg" href="#examples">Examples</Button>
        </div>
      </div>
    </section>
  )
}
