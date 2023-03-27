import React, { Component } from 'react'
import { useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import styles from './styles/Projects.module.css'
import Baselines from './pages/Baselines'
import FacilitateTraining from './pages/FacilitateTraining'
import LearningTargets from './pages/LearningTargets'
import LifeCycle from './pages/LifeCycle'
import MeasureImpact from './pages/MeasureImpact'
import StakeholderInterview from './pages/StakeholderInterview'

interface Project {
  title: string,
  img: string,
  description: string,
  newPage: any,
}

const projectPieces: Project[] = [
  {
    title: 'The Lifecycle of a Training',
    img: 'https://images.squarespace-cdn.com/content/v1/62cdde7236417d26f3ef8659/1658103903771-9NXW71F1AYGIO86KST56/image-asset.jpeg?format=300w',
    description: 'An overview of Erin\'s end-to-end instructional design process.',
    newPage: <LifeCycle />
  },
  {
    title: 'Stakeholder Interviews',
    img: 'https://images.squarespace-cdn.com/content/v1/62cdde7236417d26f3ef8659/f328e135-52a2-4027-81b3-531658825ea2/image-asset.jpeg?format=300w',
    description: 'Examples of stakeholder interview questions, and the strategies behind them.',
    newPage: <StakeholderInterview />
  },
  {
    title: 'Establish Learning Targets',
    img: 'https://images.squarespace-cdn.com/content/v1/62cdde7236417d26f3ef8659/3344b000-d4be-44ac-85f0-90fdcc93a051/image-asset.jpeg?format=300w',
    description: 'Examples of measurable learning targets, and strategies for choosing the right ones.',
    newPage: <LearningTargets />
  },
  {
    title: 'Capture Baselines',
    img: 'https://images.squarespace-cdn.com/content/v1/62cdde7236417d26f3ef8659/e7c58edc-ed7d-40a9-b2e2-aaf41039f01b/image-asset.jpeg?format=300w',
    description: 'Examples of baseline measurements for specific learning targets.',
    newPage: <Baselines />
  },
  {
    title: 'Create and Facilitate Training',
    img: 'https://images.squarespace-cdn.com/content/v1/62cdde7236417d26f3ef8659/edca6f24-69cb-4b8c-8c28-24502063f8d9/image-asset.jpeg?format=300w',
    description: 'Examples of high-impact trainings that Erin has created and led.',
    newPage: <FacilitateTraining />
  },
  {
    title: 'Measure the Impact',
    img: 'https://images.squarespace-cdn.com/content/v1/62cdde7236417d26f3ef8659/fdadb6b3-a422-465b-9b28-ab1c9cf5aa3c/shutterstock_2145418903.jpg?format=300w',
    description: 'Examples of training impact reports, and how Erin interprets them.',
    newPage: <MeasureImpact />
  },
]

export default function Projects() {

  const [projects, setProjects] = useState(projectPieces)
  const [showModal, setShowModal] = useState<boolean[]>(projects.map(() => false));

  const handleShow = (index: number) => {
    const newShowModal = [...showModal];
    newShowModal[index] = true;
    setShowModal(newShowModal);
  };

  // Define a function to handle closing a specific modal
  const handleClose = (index: number) => {
    const newShowModal = [...showModal];
    newShowModal[index] = false;
    setShowModal(newShowModal);
  };

  return (
    <div className={styles.projectsWrapper} id="projects">
      <div className={styles.cardsContainer}>
        {projects.map((project: Project, index) => (
          <Card key={index} className={styles.div + index} style={{
            width: "300px",
            height: "max-content",
            margin: "3%"
          }}>
            <Card.Img className={styles.cardImage} variant="top" src={project.img} />
            <Card.Body className={styles.cardContainer}>
              <Card.Title>{project.title}</Card.Title>
              <Card.Text>
                {project.description}
              </Card.Text>
              <Button onClick={() => handleShow(index)} className={styles.cardsButton} variant="primary">See More</Button>
              <Modal
                show={showModal[index]}
                onHide={() => handleClose(index)}
                aria-labelledby="contained-modal-title-vcenter"
                centered>
                <Modal.Header closeButton>
                  <Modal.Title>{project.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  {project.newPage}
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={() => handleClose(index)}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  )
}