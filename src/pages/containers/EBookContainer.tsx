import { ReactElement, useContext, useEffect } from 'react'
import { AppContext, AppContextProps } from '@contexts/AppContext'
import QuizContainer from './QuizContainer'
import StoryContainer from './StoryContainer'
import SpeakContainer from './SpeakContainer'

const EBookContainer: React.FC<{}> = () => {
  const { studyInfo, handler } = useContext(AppContext) as AppContextProps

  useEffect(() => {
    console.log(handler.story)
    //window.location.reload()
  }, [handler.story])

  // 컴포넌트 생성
  let component: ReactElement

  if (studyInfo.isStartSpeak) {
    component = <SpeakContainer />
  } else if (handler.isPreference || studyInfo.isSubmitPreference) {
    if (handler.story === 0) {
      component = <QuizContainer />
    } else {
      component = <StoryContainer />
    }
  } else {
    component = <StoryContainer />
  }

  return component
}
export default EBookContainer
