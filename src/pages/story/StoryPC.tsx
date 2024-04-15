import { useEffect, useState } from 'react'

import { StoryProps, PageState } from '@interfaces/IStory'

import { useStoryAudioPC } from '@hooks/story/useStoryAudioPC'

import StoryHeader from '@components/story/StoryHeader'
import StoryBody from '@components/story/StoryBody'
import StoryPage from '@components/story/common/StoryPage'
import StoryPageController from '@components/story/StoryPageController'
import StoryBottomMenu from '@components/story/StoryBottomMenu'
import StorySideMenu from '@components/story/common/StorySideMenu'
import EBookVocaNote from '@components/story/EBookVocaNote'

export default function StoryPC({
  isRatingShow,
  isMovieShow,
  storyData,
  imgSize,
  pageScale,
  toggleRatingShow,
  toggleMovieShow,
}: StoryProps) {
  // audio
  const {
    pageNumber,
    playState,
    pageSeq,
    currentTime,
    playAudio,
    stopAudio,
    pauseAudio,
    resumeAudio,
    changePlaySpeed,
    changeDuration,
    changeVolume,
    changePageNumber,
  } = useStoryAudioPC(storyData)

  const [pageState, setPageState] = useState<PageState>('')

  // 우상단 3줄 메뉴
  const [isSideOpen, setSideOpen] = useState<boolean>(false)

  // 좌측 하단 드랍다운 메뉴
  const [isTextShow, setIsText] = useState<boolean>(true)
  const [isMute, setIsMute] = useState<boolean>(false)
  const [isHighlight, setIsHighlight] = useState<boolean>(true)

  // 우측 하단 전체 화면 메뉴
  const [isVocaOpen, setVocaOpen] = useState<boolean>(false)
  const [isFullScreen, setFullScreen] = useState<boolean>(false)

  const progressWidth =
    ((pageNumber + 1) / storyData[storyData.length - 1].Page) * 100

  useEffect(() => {
    if (isRatingShow || isMovieShow) stopAudio()
  }, [isRatingShow, isMovieShow])

  // 페이지 넘버가 바뀌면
  useEffect(() => {
    setPageState('')
  }, [pageNumber])

  // 좌우 화살표 클릭시
  useEffect(() => {
    if (storyData) {
      switch (pageState) {
        case 'play':
          break

        case 'left':
          changePageNumber(pageNumber - 2)
          break

        case 'right':
          changePageNumber(pageNumber + 2)
          break
      }
    }
  }, [pageState])

  // 오디오 음소거
  useEffect(() => {
    changeVolume(isMute ? 0 : 1)
  }, [isMute])

  // 전체 화면
  useEffect(() => {
    const onFullscreenHandler = () => {
      if (document.fullscreenElement) {
        setFullScreen(true)
      } else {
        setFullScreen(false)
      }
    }

    document.body.addEventListener('fullscreenchange', onFullscreenHandler)

    return () => {
      document.body.removeEventListener('fullscreenchange', onFullscreenHandler)
    }
  }, [document.fullscreenElement])

  /**
   * 헤더 메뉴 클릭하는 기능
   */
  const toggleSideMenu = () => {
    setSideOpen(!isSideOpen)
  }

  // eBook 페이지 넘기기 기능
  const turnPageLeft = () => {
    if (pageNumber > 1 && pageState === '') {
      setPageState('left')
    }
  }

  const turnPageRight = () => {
    if (
      pageNumber + 2 <= storyData[storyData.length - 1].Page &&
      pageState === ''
    ) {
      setPageState('right')
    }
  }
  // eBook 페이지 넘기기 기능 end

  /**
   * 문장 클릭한 경우
   * @param pageNumber 페이지 번호
   * @param sequence  재생 중인 문장
   */
  const clickSentence = (pageNumber: number, sequence: number) => {
    changeDuration(pageNumber, sequence)
  }

  // 좌측 하단 읽기 모드
  const changeTextShow = (isShow: boolean) => {
    setIsText(isShow)
  }

  const changeMuteAudio = (isMute: boolean) => {
    setIsMute(isMute)
  }

  const changeHighlight = (isHighlight: boolean) => {
    setIsHighlight(isHighlight)
  }
  // 좌측 하단 읽기 모드 메뉴 end

  /**
   * 전체 화면
   */
  const toggleFullScreen = () => {
    setFullScreen(!isFullScreen)
  }

  /**
   * 단어장
   */
  const toggleVocaList = () => {
    setVocaOpen(!isVocaOpen)
  }

  return (
    <>
      {/* header */}
      <StoryHeader toggleSideMenu={toggleSideMenu} />

      {/* body */}
      <StoryBody>
        {/* 좌측 페이지 */}
        <StoryPage
          key={'page-1'}
          isTextShow={isTextShow}
          pageSeq={pageSeq}
          pageNumber={pageNumber}
          storyData={storyData}
          currentTime={currentTime}
          isHighlight={isHighlight}
          clickSentence={clickSentence}
        />

        {/* 우측 페이지 */}
        <StoryPage
          key={'page-2'}
          isTextShow={isTextShow}
          pageSeq={pageSeq}
          pageNumber={pageNumber + 1}
          storyData={storyData}
          currentTime={currentTime}
          isHighlight={isHighlight}
          clickSentence={clickSentence}
        />
      </StoryBody>

      {/* 화살표 */}
      <StoryPageController
        pageWidth={imgSize.width}
        pageScale={pageScale}
        turnPageLeft={turnPageLeft}
        turnPageRight={turnPageRight}
      />

      {/* 하단 메뉴바 */}
      <StoryBottomMenu
        progressWidth={progressWidth}
        pageSeq={pageSeq}
        playState={playState}
        isFullScreen={isFullScreen}
        turnPageLeft={turnPageLeft}
        turnPageRight={turnPageRight}
        changeTextShow={changeTextShow}
        changeMuteAudio={changeMuteAudio}
        changeHighlight={changeHighlight}
        changePlaySpeed={changePlaySpeed}
        playAudio={playAudio}
        pauseAudio={pauseAudio}
        resumeAudio={resumeAudio}
        toggleVocaList={toggleVocaList}
      />

      {/* 사이드 메뉴 */}
      <StorySideMenu
        isSideOpen={isSideOpen}
        toggleSideMenu={toggleSideMenu}
        toggleRatingShow={toggleRatingShow}
        toggleMovieShow={toggleMovieShow}
      />

      <EBookVocaNote
        isVocaOpen={isVocaOpen}
        toggleVocaList={toggleVocaList}
        pauseStoryAudio={pauseAudio}
        resumeStoryAudio={resumeAudio}
      />
    </>
  )
}
