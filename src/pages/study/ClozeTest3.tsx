import { useEffect, useState } from 'react'
import { getQuizPath } from '@services/studyPath'
import { getClozeTest3 } from '@services/quiz/ClozeTestAPI'
import { saveUserAnswer } from '@services/studyApi'

// Types [
import { ACTIVITY } from '@constants/constant'
import {
  IStudyData,
  IScoreBoardData as IScoreBoard,
  IUserAnswer,
} from '@interfaces/Common'
// ] Types

// utils & hooks
import { useQuizTimer } from '@hooks/study/useQuizTimer'
import { useFetch } from '@hooks/study/useFetch'
import { useCurrentQuizNo } from '@hooks/study/useCurrentQuizNo'
import { useStudentAnswer } from '@hooks/study/useStudentAnswer'
import { useResult } from '@hooks/study/useResult'

// components

const DIV_ID = 'cloze-test-3'
const STEP_TYPE = 'Cloze Test'
const COUNTDOWN_TIME = 3

export default function ClozeTest3(props: IStudyData) {
  const STEP = props.currentStep

  const timer = useQuizTimer(() => {
    // timer가 0에 도달하면 호출되는 콜백함수 구현
  })

  const [isShowStepIntro, setShowStepIntro] = useState(true) // 데이터 가져오기
  const { isResultShow, changeResultShow } = useResult()

  // 퀴즈 데이터 세팅
  const [quizData, recordedData] = useFetch(getClozeTest3, props, STEP) // 퀴즈 데이터 / 저장된 데이터
  // 과거 기록
  const { scoreBoardData, setStudentAnswers, addStudentAnswers } =
    useStudentAnswer()
  const [quizNo, setQuizNo] = useState<number>(1) // 퀴즈 번호
  const [tryCount, setTryCount] = useState(0) // 시도 횟수
  const [incorrectCount, setIncorrectCount] = useState<number>(0) // 문제 틀린 횟수

  useEffect(() => {
    if (quizData) {
      // 현재 퀴즈 번호
      const [currentQuizNo, tryCnt] = useCurrentQuizNo(
        recordedData,
        quizData.QuizAnswerCount,
      )

      timer.setup(quizData.QuizTime, false)

      setStudentAnswers(recordedData, quizData.QuizAnswerCount) // 기존 데이터를 채점판에 넣어주기
      setQuizNo(currentQuizNo) // 현재 퀴즈 번호
    }
  }, [quizData])

  // 로딩
  if (!quizData) return <>Loading...</>

  return (
    <>
      {/* {isShowStepIntro && (
        <StepIntro
          step={STEP}
          title={STEP_TYPE}
          countdown={COUNTDOWN_TIME}
          onCountdownFinish={() => {
            setShowStepIntro(false)
          }}
        />
      )}

      <QuizHeader
        step={STEP}
        stepType={STEP_TYPE}
        quizNumber={quizNo}
        quizCount={Object.keys(quizData.Quiz).length}
        life={quizData.QuizAnswerCount - incorrectCount}
        lifeCount={quizData.QuizAnswerCount}
        timeMin={timer.time.timeMin}
        timeSec={timer.time.timeSec}
        studentAnswers={scoreBoardData}
      />

      <QuizBody
        id={DIV_ID}
        step={STEP}
        stepType={STEP_TYPE}
        topContents={<div className="question"></div>}
        bottomContents={
          <div className="sentence-box">
            <div className="sentence-item">Big</div>
            <div className="sentence-item">
              <div className="typing">
                <input id={`box-1`} type="text" onChange={(e) => {}} />
              </div>
            </div>
            <div className="sentence-item"> has </div>
            <div className="sentence-item">
              <div className="typing">
                <input id={`box-3`} type="text" onChange={(e) => {}} />
              </div>
            </div>
            <div className="sentence-item"> City. </div>
          </div>
        }
      /> */}
    </>
  )
}
