import { useEffect, useState } from 'react'
import { saveUserAnswer } from '@services/studyApi'
import { getReadingComprehension4 } from '@services/quiz/RedaingComprehensionAPI'

import readingComprehensionCSS from '@stylesheets/reading-comprehension.module.scss'
import readingComprehensionCSSMobile from '@stylesheets/mobile/reading-comprehension.module.scss'

// Types [
import {
  IStudyData,
  IScoreBoardData as IScoreBoard,
  IUserAnswer,
  IRecordAnswerType,
} from '@interfaces/Common'
import { IReadingComprehension4Example } from '@interfaces/IReadingComprehension'
// ] Types

// utils & hooks
import useStepIntro from '@hooks/common/useStepIntro'
import { shuffle } from 'lodash'
import { useQuiz } from '@hooks/study/useQuiz'
import { useQuizTimer } from '@hooks/study/useQuizTimer'
import { useAnimation } from '@hooks/study/useAnimation'
import { useFetch } from '@hooks/study/useFetch'
import { useCurrentQuizNo } from '@hooks/study/useCurrentQuizNo'
import { useStudentAnswer } from '@hooks/study/useStudentAnswer'
import useBottomPopup from '@hooks/study/useBottomPopup'
import { useResult } from '@hooks/study/useResult'
import useDeviceDetection from '@hooks/common/useDeviceDetection'

// components - common
import StepIntro from '@components/study/common-study/StepIntro'
import QuizHeader from '@components/study/common-study/QuizHeader'
import StudySideMenu from '@components/study/common-study/StudySideMenu'
import QuizBody from '@components/study/common-study/QuizBody'
import Gap from '@components/study/common-study/Gap'
import Container from '@components/study/common-study/Container'
import StudyPopupBottom from '@components/study/common-study/StudyPopupBottom'

// components - reading comprehension 4
import WrapperAnswer from '@components/study/reading-comprehension-04/WrapperAnswer'
import TestResultRC4 from '@components/study/reading-comprehension-04/TestResultRC4'

const STEP_TYPE = 'Reading Comprehension'

const isMobile = useDeviceDetection()

const style = isMobile ? readingComprehensionCSSMobile : readingComprehensionCSS

export default function ReadingComprehension4(props: IStudyData) {
  const STEP = props.isReTestYn ? 'R' : props.currentStep

  // 애니메이션 hook
  const animationManager = useAnimation()

  const timer = useQuizTimer(() => {
    checkAnswer('quiz time out')
  })

  // 인트로 및 결과창
  const [introAnim, setIntroAnim] = useState<
    'animate__bounceInRight' | 'animate__bounceOutLeft'
  >('animate__bounceInRight')
  const { isStepIntro, closeStepIntro } = useStepIntro()
  const { isResultShow, changeResultShow } = useResult()

  // 사이드 메뉴
  const [isSideOpen, setSideOpen] = useState(false)

  // 퀴즈 데이터 세팅
  const { quizState, changeQuizState } = useQuiz()
  const [quizData, recordedData] = useFetch(
    getReadingComprehension4,
    props,
    STEP,
    props.isReTestYn,
  )
  const [failedExample, setFailedExample] = useState([...recordedData])

  // 퀴즈 데이터 / 저장된 데이터
  const {
    scoreBoardData,
    setStudentAnswers,
    addStudentAnswers,
    makeUserAnswerData,
    resetStudentAnswer,
    getScore,
  } = useStudentAnswer() // 과거 기록
  const [quizNo, setQuizNo] = useState<number>(1) // 퀴즈 번호
  const [exampleData, setExamples] = useState<IReadingComprehension4Example[]>(
    [],
  )
  const [tryCount, setTryCount] = useState(0) // 시도 횟수
  const [incorrectCount, setIncorrectCount] = useState<number>(0) // 문제 틀린 횟수

  // 정 / 오답시 하단에 나오는 correct / incorrect
  const { bottomPopupState, changeBottomPopupState } = useBottomPopup()

  // re-test
  const [isReTest, setReTest] = useState(false)

  useEffect(() => {
    if (!isStepIntro && quizData) {
      timer.setup(quizData.QuizTime, true)

      changeQuizState('studying')
    }
  }, [isStepIntro])

  // 데이터를 받아온 후
  useEffect(() => {
    if (quizData) {
      // 현재 퀴즈 번호
      const [currentQuizNo, tryCnt] = useCurrentQuizNo(
        recordedData,
        quizData.QuizAnswerCount,
      )
      console.log(quizData)
      const wrongAnswer = recordedData.filter((record) => record.OX === '2')

      setFailedExample([...wrongAnswer])
      setTryCount(tryCnt)
      setIncorrectCount(tryCnt)
      setExamples(shuffle(quizData.Quiz[currentQuizNo - 1].Examples))
      setStudentAnswers(recordedData, quizData.QuizAnswerCount) // 기존 데이터를 채점판에 넣어주기
      setQuizNo(currentQuizNo)
    }
  }, [quizData])

  useEffect(() => {
    if (quizData) {
      setExamples(shuffle(quizData.Quiz[quizNo - 1].Examples))

      setIncorrectCount(0)
      setTryCount(0)

      changeQuizState('studying')
    }
  }, [quizNo])

  // 로딩
  if (!quizData) return <>Loading...</>

  /** [ 정답 체크 ]
   * @param e 클릭한 보기
   * @param i 보기 인덱스
   */
  const checkAnswer = async (
    selectedAnswer: string = '',
    target?: EventTarget & HTMLDivElement,
  ) => {
    try {
      changeQuizState('checking')

      const correctAnswer = quizData.Quiz[quizNo - 1].Examples[0].Text
      const isCorrect = correctAnswer === selectedAnswer

      // 채점판
      const answerData: IScoreBoard = {
        quizNo: quizNo,
        maxCount: quizData.QuizAnswerCount,
        answerCount: tryCount + 1,
        ox: isCorrect,
      }

      const step = isReTest || props.isReTestYn ? 'R' : props.currentStep

      // 유저 답 데이터 생성
      const userAnswer: IUserAnswer = makeUserAnswerData(
        '',
        props.studyId,
        props.studentHistoryId,
        props.bookType,
        step,
        quizData.Quiz[quizNo - 1].QuizId,
        quizData.Quiz[quizNo - 1].QuizNo,
        quizNo,
        correctAnswer,
        selectedAnswer,
        tryCount + 1,
        quizData.QuizAnswerCount,
        quizData.Quiz.length,
        isCorrect,
        answerData,
        undefined,
        props.lastStep === STEP ? true : false,
      )

      let score = 0

      if (quizNo + 1 > Object.keys(quizData.Quiz).length) {
        score = getScore(
          answerData,
          Object.keys(quizData.Quiz).length,
          quizData.QuizAnswerCount,
        )
      }

      // 서버에 유저 답안 전송
      if (quizState === 'studying') {
        const res = await saveUserAnswer(userAnswer)

        if (Number(res.result) === 0) {
          addStudentAnswers(answerData)

          if (!target || selectedAnswer === '') {
            // 유저가 답안을 고르지 않은 경우 - 시간 초과
            changeBottomPopupState({
              isActive: true,
              isCorrect: false,
            })

            const newFailAnswer: IRecordAnswerType = {
              QuizId: quizData.Quiz[quizNo - 1].QuizId,
              QuizNo: quizData.Quiz[quizNo - 1].QuizNo,
              CurrentQuizNo: quizNo,
              OX: '2',
              TempText: '',
              PenaltyWord: '',
              Correct: correctAnswer,
              StudentAnswer: 'quiz time out',
              AnswerCount: tryCount,
            }

            setFailedExample([...failedExample, newFailAnswer])
            afterCheckAnswer(score, undefined)
          } else {
            // 유저가 답안을 고른 경우
            if (isCorrect) {
              if (target) {
                animationManager.play(target, [
                  'animate__fadeIn',
                  style.correct,
                ])
              }
            } else {
              if (target) {
                animationManager.play(target, [
                  'animate__headShake',
                  style.incorrect,
                ])
              }

              const newFailAnswer: IRecordAnswerType = {
                QuizId: quizData.Quiz[quizNo - 1].QuizId,
                QuizNo: quizData.Quiz[quizNo - 1].QuizNo,
                CurrentQuizNo: quizNo,
                OX: '2',
                TempText: '',
                PenaltyWord: '',
                Correct: correctAnswer,
                StudentAnswer: selectedAnswer,
                AnswerCount: tryCount,
              }

              setFailedExample([...failedExample, newFailAnswer])
              setIncorrectCount(incorrectCount + 1)
            }

            changeBottomPopupState({
              isActive: true,
              isCorrect: isCorrect,
            })

            setTryCount(tryCount + 1)

            afterCheckAnswer(score, target)
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }

  const afterCheckAnswer = (
    score: number,
    target?: EventTarget & HTMLDivElement,
  ) => {
    setTimeout(() => {
      changeBottomPopupState({
        isActive: false,
        isCorrect: false,
      })

      if (target) {
        animationManager.remove(target, [
          'animate__headShake',
          'animate__fadeIn',
          style.correct,
          style.incorrect,
        ])
      }

      if (quizNo + 1 > Object.keys(quizData.Quiz).length) {
        if (score < quizData.PassMark) {
          // 점수 미달인 경우 re-test
          // re-test를 했는데도 다시 미달인 경우 당일 학습 불가
          if (props.isReTestYn) {
            // re test인데도 실패한 경우
            alert('go home')
          } else {
            if (isReTest) {
              // 학습 진행 중에 re test가 됬는데 다시 실패한 경우
              alert('go home')
            } else {
              // 첫 학습인데 실패한 경우
              setReTest(true)
              changeResultShow(true)
            }
          }
        } else {
          setReTest(false)
          viewIncorrectQuestion()
        }
      } else {
        setQuizNo(quizNo + 1)
      }
    }, 2000)
  }

  // 점수 미달일 경우 re-test로 진입
  const doReTest = () => {
    setFailedExample([])
    resetStudentAnswer()
    setQuizNo(1)

    changeResultShow(false)
  }

  // 통과할 점수인 경우 유저가 고른 답안 중 틀린 답안의 정답을 보여줌
  const viewIncorrectQuestion = () => {
    changeResultShow(true)
  }

  const toggleSideMenu = () => {
    setSideOpen(!isSideOpen)
  }

  return (
    <>
      {isStepIntro ? (
        <div
          className={`animate__animated ${introAnim}`}
          onAnimationEnd={() => {
            if (introAnim === 'animate__bounceOutLeft') {
              closeStepIntro()
            }
          }}
        >
          <StepIntro
            step={STEP}
            quizType={STEP_TYPE}
            comment={'질문을 보고 알맞은 대답을 고르세요.'}
            onStepIntroClozeHandler={() => {
              setIntroAnim('animate__bounceOutLeft')
            }}
          />
        </div>
      ) : (
        <>
          {isResultShow ? (
            <>
              <TestResultRC4
                isReTest={isReTest}
                step={STEP}
                quizType={STEP_TYPE}
                quizAnswerCount={quizData.QuizAnswerCount}
                studentAnswer={scoreBoardData}
                quizData={quizData}
                failedExample={failedExample}
                passMark={quizData.PassMark}
                doReTest={doReTest}
                onFinishActivity={props.onFinishActivity}
              />
            </>
          ) : (
            <>
              <QuizHeader
                quizNumber={quizNo}
                totalQuizCnt={Object.keys(quizData.Quiz).length}
                life={quizData.QuizAnswerCount - incorrectCount}
                timeMin={timer.time.timeMin}
                timeSec={timer.time.timeSec}
                toggleSideMenu={toggleSideMenu}
              />

              <div
                className={`${style.comment} animate__animated animate__fadeInLeft`}
              >
                {!isReTest ? STEP_TYPE : 'Re Test'}
              </div>

              <QuizBody>
                {isMobile ? <Gap height={0} /> : <Gap height={15} />}

                <Container
                  typeCSS={style.readingComprehension4}
                  containerCSS={style.container}
                >
                  <WrapperAnswer
                    isHideQuestion={quizData.IsHideQuestionText}
                    question={quizData.Quiz[quizNo - 1].Question.Text}
                    exampleData={exampleData}
                    checkAnswer={checkAnswer}
                  />
                </Container>

                {isMobile ? <Gap height={5} /> : <Gap height={15} />}
              </QuizBody>

              <StudySideMenu
                isSideOpen={isSideOpen}
                currentStep={STEP}
                currentStepType={STEP_TYPE}
                quizLength={quizData.Quiz.length}
                maxAnswerCount={quizData.QuizAnswerCount}
                toggleSideMenu={toggleSideMenu}
                scoreBoardData={scoreBoardData}
              />

              <StudyPopupBottom bottomPopupState={bottomPopupState} />
            </>
          )}
        </>
      )}
    </>
  )
}
