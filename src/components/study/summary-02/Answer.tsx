import { useEffect, useRef } from 'react'

import summaryCSS from '@stylesheets/summary.module.scss'
import summaryCSSMobile from '@stylesheets/mobile/summary.module.scss'

import useDeviceDetection from '@hooks/common/useDeviceDetection'

import { WordDataProp } from '@pages/study/Summary2'

type AnswerProps = {
  isComplete: boolean
  wordData: WordDataProp
  questionNo: number
}

const isMobile = useDeviceDetection()

const style = isMobile ? summaryCSSMobile : summaryCSS

export default function Answer({
  isComplete,
  wordData,
  questionNo,
}: AnswerProps) {
  const answerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (wordData.QuestionIndex === questionNo && answerRef.current !== null) {
      answerRef.current.scrollIntoView()
    }
  }, [questionNo])

  return (
    <span
      ref={answerRef}
      className={`
        ${style.answerBox}
        ${
          wordData.QuestionIndex === questionNo && !isComplete
            ? style.currentOrder
            : ''
        }
        ${wordData.State === 'correct' ? style.correctAnswer : ''}        
        ${wordData.State === 'incorrect' ? style.incorrectAnswer : ''}
      `}
    >
      {wordData.State === 'none' && wordData.QuestionIndex > 0 ? (
        wordData.QuestionIndex === questionNo ? (
          '?'
        ) : (
          ''
        )
      ) : (
        <>{wordData.Word}</>
      )}
    </span>
  )
}
