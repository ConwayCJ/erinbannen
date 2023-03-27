import React from 'react'
import styles from './styles/LandingPage.module.css'
import headShot from './images/erin_bannen_headshot.jpg'
import NavBar from './NavBar'
import Image from 'react-bootstrap/Image'

export default function LandingPage() {



  return (
    <section className={styles.pageWrapper} id="home">
      <NavBar />
      <div className={styles.hero}>
        <h1>ERIN BANNEN</h1>
        <br></br>
        <br></br>
        <h2>Instructional Designer</h2>
      </div>


      <div className={styles.headShotContainer}>
        <Image
          fluid
          className={styles.headShotImg}
          src={headShot}
          alt="Erin Bannen Headshot"
          width="400px"
          height="auto" />
      </div>

    </section>
  )
}
