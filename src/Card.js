import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Card({ title, question, answer }) {
  const [isAnswerVisible, setIsAnswerVisible] = useState(false)

  function toggleAnswer() {
    setIsAnswerVisible(!isAnswerVisible)
  }

  return (
    <section onClick={toggleAnswer} className="Card">
      <h2>{title}</h2>
      <p>{question}</p>
      {isAnswerVisible && <Answer text={answer} />}
    </section>
  )

  function Answer({ text }) {
    return (
      <AnswerStyled>
        <hr />
        <p>{text}</p>
      </AnswerStyled>
    )
  }
}

const AnswerStyled = styled.div`
  color: hotpink;
`
