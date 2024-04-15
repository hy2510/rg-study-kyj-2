import { useContext, useEffect, useState } from 'react'
import { AppContext, AppContextProps } from '@contexts/AppContext'
import EBookContainer from './EBookContainer'
import PBookContainer from './PBookContainer'

type ViewName = 'ebook' | 'pbook' | 'error'

const StudyContainer: React.FC<{}> = () => {
  const { studyInfo, handler } = useContext(AppContext) as AppContextProps

  // 초기 Conatainer 설정 (EB / PB / error)
  let initViewName: ViewName = 'error'

  if (studyInfo.bookType === 'EB') {
    initViewName = 'ebook'
  } else if (studyInfo.bookType === 'PB') {
    initViewName = 'pbook'
  }

  const viewName = initViewName

  // 리뷰모드 알림 팝업
  const [reviewInformSee, setReviewInformSee] = useState<boolean>(false)

  // 리뷰 팝업 닫기
  const onCloseReviewInform = () => {
    setReviewInformSee(true)
  }

  // 학습 종료
  // useEffect(() => {
  //   if (handler.finishStudy.id > 0) {
  //     alert(`FINISH STUDY : ${handler.finishStudy.cause}, average:`)
  //     handler.clearFinishStudyState()
  //   }

  //   console.log(
  //     'BOOKINFO, ',
  //     handler.isShowBookInfo,
  //     ': Finish BI',
  //     handler.finishStudy,
  //     ':, GOSTORY',
  //     handler.story,
  //   )
  // }, [handler.finishStudy.id])

  // EBook / PBook 분기처리
  let component: React.ReactElement | undefined = undefined

  if (viewName === 'ebook') {
    component = <EBookContainer />
  } else if (viewName === 'pbook') {
    component = <PBookContainer />
  }

  return (
    <div>
      {!studyInfo.isSuper && studyInfo.isReview && !reviewInformSee ? (
        <ReviewPopup onUpdateReviewInform={onCloseReviewInform} />
      ) : (
        component
      )}
    </div>
  )
}
export default StudyContainer

function ReviewPopup({
  onUpdateReviewInform,
}: {
  onUpdateReviewInform: () => void
}) {
  return (
    <div
      style={{
        backgroundColor: 'skyblue',
        height: '40vh',
        textAlign: 'center',
        paddingTop: '45vh',
      }}
    >
      <span>리뷰 모드 팝업</span>
      <div>
        <button onClick={() => onUpdateReviewInform()}>확인</button>
      </div>
    </div>
  )
}
