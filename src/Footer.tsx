import React from 'react'
import styles from './styles/Footer.module.css'
import Nav from 'react-bootstrap/Nav'
import { Form, Button, Container, Navbar } from 'react-bootstrap'
import { useState } from 'react'

export default function Footer() {
  const initialState = { name: "", email: "", message: "" }

  const [eachEntry, setEachEntry] = useState(initialState)
  const { name, email, message } = eachEntry

  const handleOnChange = (e: any) => {
    setEachEntry({ ...eachEntry, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: any) => {
    e.preventDefault()
  }

  return (
    <div className={styles.footerWrapper} id="contact">
      <section className={styles.footerNav}>
        <Navbar expand="lg" variant="dark">
          <Container >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#examples">Examples</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

      </section>
    </div >
  )
}
