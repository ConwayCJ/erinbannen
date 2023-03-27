import React from 'react'
import styles from './styles/TrainingExamples.module.css'
import { useState } from 'react';
import YouTubeEmbed from './pages/YouTubeEmbed'
import { ButtonGroup, ToggleButton } from 'react-bootstrap';
import { Transition } from '@headlessui/react';

export default function TrainingExamples() {
  const [radioValue, setRadioValue] = useState('1');

  const radios = [
    { name: 'Video 1', value: '1' },
    { name: 'Video 2', value: '2' },
    { name: 'Video 3', value: '3' },
  ];

  return (
    <div className={styles.trainingWrapper} id="examples">

      <h1>Training Examples</h1>

      <div>
        <ButtonGroup>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              style={{
                marginRight: "10px",
              }}
              id={`radio-${idx}`}
              type="radio"
              size="lg"
              variant={idx % 2 ? 'outline-primary' : 'outline-danger'}
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>


      </div>

      <div className={styles.videoContainer}>

        {radioValue === "1" ? (
          <>
            <h1>Canvas Course Tour</h1>
            <section>
              This <a target="_blank" href="https://www.youtube.com/watch?v=_daDy1166Ik">video</a> is a guided walk-through for a Canvas course
              I’ve taught for other instructional designers.
              I am the sole course designer.
            </section>
            <YouTubeEmbed embedId='_daDy1166Ik' />
          </>
        ) : radioValue === "2" ? (
          <>

            <h1>Rise Course Design Tour:</h1>
            <h2>Responding to Customer Feedback</h2>
            <section>
              This <a target="_blank" href="https://www.youtube.com/watch?v=oPXhp_FIBnk"></a> is a guided walk-through for a Rise course
              I’ve taught for other instructional designers and corporate clients.
              I am the sole course designer.
            </section>
            <YouTubeEmbed embedId='oPXhp_FIBnk' />
          </>
        ) : radioValue === "3" ? (
          <div className={styles.presentationContainer}>

            <h1>Leading Stakeholder Interviews</h1>
            <section>
              This <a target="_blank" href="https://docs.google.com/presentation/d/1gn5RFKfMs0vT-UB1DPldJg-YtBbl5fqj/edit#slide=id.p1">Powerpoint Presentation</a> is an example of a training
              I would lead when there is not LMS available.
              I am the sole training designer.
            </section>
            <a target="_blank" href="https://docs.google.com/presentation/d/1gn5RFKfMs0vT-UB1DPldJg-YtBbl5fqj/edit#slide=id.p1">
              <img
                src="https://images.squarespace-cdn.com/content/v1/62cdde7236417d26f3ef8659/29ee1891-dfff-4726-b1df-5ed14b053a01/image-asset.png?format=500w"
                alt="Powerpoint Presentation: Google Classroom Leading Stakeholder Interviews">
              </img>
            </a>
          </div>

        ) : <></>}
      </div>



    </div >
  )
}
