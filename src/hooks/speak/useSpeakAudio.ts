import { useEffect, useRef, useState } from 'react'
import { PageProps, PageSequenceProps, PlayState } from '@interfaces/IStory'

export default function useSpeakAudio(pageData: PageProps[]) {
  const [pageNumber, setPageNumber] = useState<number>(3)
  const [pageSeq, setPageSeq] = useState<PageSequenceProps>({
    playPage: 1,
    sequnce: 0,
  })

  const [readCnt, setReadCnt] = useState<number>(0)

  // 오디오 상태
  const [playState, setPlayState] = useState<PlayState>('')

  // 오디오
  const audioRef = useRef(new Audio())
  const player = audioRef.current

  const [currentTime, setCurrentTime] = useState(0)
  const [playbackRate, setPlaybackRate] = useState<number>(1) // 배속

  // 페이지가 바뀌면
  useEffect(() => {
    console.log('change page number', pageNumber)

    setPageSeq({ playPage: pageNumber, sequnce: 0 })
  }, [pageNumber])

  // 이벤트 핸들러 부여
  useEffect(() => {
    console.log('ue ps', player)

    // 오디오가 재생 가능할 때
    const handlerCanPlayThrough = () => {
      console.log('audio canplaythrough')
      player.play()

      setPlayState('play')
    }

    player.addEventListener('canplaythrough', handlerCanPlayThrough)
    // 오디오가 재생 가능할 때 end

    // 오디오가 재생 중
    const handlerTimeupdate = () => {
      setCurrentTime(player.currentTime)
    }

    player.addEventListener('timeupdate', handlerTimeupdate)
    // 오디오가 재생 중 end

    // 오디오가 일시 중지
    const handlerPause = () => {
      console.log('audio pause')

      setPlayState('pause')
    }

    player.addEventListener('pause', handlerPause)
    // 오디오가 일시 중지 end

    // 오디오가 재생 완료
    const handlerEnded = () => {
      console.log('audio ended')

      console.log(pageSeq.playPage)

      if (pageData[pageData.length - 1].Page >= pageNumber + 2) {
        // 다음 페이지가 있는 경우
        if (pageSeq.playPage % 2 === 0) {
          setPageNumber(pageNumber + 2)
        } else {
          console.log('pp', pageSeq.playPage)
          setPageSeq({
            playPage: pageSeq.playPage + 1,
            sequnce: 0,
          })
        }
      } else {
        // 다음 페이지가 없는 경우
        if (readCnt === 0) {
          setReadCnt(1)
        } else if (readCnt <= 1) {
          setReadCnt(2)
        }

        setPlayState('')
      }
    }

    player.addEventListener('ended', handlerEnded)
    // 오디오가 재생 완료 end

    // 오디오 재생
    playAudio(pageSeq.playPage, pageSeq.sequnce)

    return () => {
      console.log('return handler')
      player.removeEventListener('canplaythrough', handlerCanPlayThrough)
      player.removeEventListener('timeupdate', handlerTimeupdate)
      player.removeEventListener('pause', handlerPause)
      player.removeEventListener('ended', handlerEnded)
    }
  }, [pageSeq])

  // 음원 재생 속도 변경
  useEffect(() => {
    player.playbackRate = playbackRate
  }, [playbackRate])

  // 읽은 횟수가 변경되는 경우
  useEffect(() => {
    if (readCnt === 1) {
      setPageNumber(1)
    } else if (readCnt > 1) {
    }
  }, [readCnt])

  /**
   * 오디오 재생
   * @param pageNumber: 페이지 번호
   * @param seq: 문장 번호
   */
  const playAudio = (pageNumber: number, seq: number) => {
    const sentenceData = pageData.filter(
      (data) => data.Page === pageNumber && data.Sequence !== 999,
    )

    if (sentenceData.length > 0 && sentenceData.length > seq - 1) {
      console.log('play audio')
      player.src = sentenceData[0].SoundPath
      player.playbackRate = playbackRate

      if (seq > 0) {
        // seq가 0이 아니면 문장을 클릭했거나 다음 문장으로 하이라이트가 옮긴 경우로 판단
        player.currentTime = sentenceData[seq - 1].StartTime / 1000
      }
    } else {
      player.src = ''
      player.currentTime = 0
    }
  }

  /**
   * 오디오 중지
   */
  const stopAudio = () => {
    player.pause()
    player.src = ''
    player.currentTime = 0
  }

  /**
   * 오디오 일시 정지
   */
  const pauseAudio = () => {
    player.pause()
  }

  /**
   * 오디오 일시 정지 해제
   */
  const resumeAudio = () => {
    setPlayState('play')
    player.play()
  }

  /**
   * 오디오 배속
   */
  const changePlaySpeed = (speed: number) => {
    setPlaybackRate(speed)
  }

  /**
   * 오디오 재생 시간 변경
   */
  const changeDuration = (pageNumber: number, seq: number) => {
    setPageSeq({
      playPage: pageNumber,
      sequnce: seq,
    })
  }

  const changePageNumber = (pageNumber: number) => {
    if (pageNumber === 1) {
      setPlayState('')
    }

    setPageNumber(pageNumber)
  }

  return {
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
    changePageNumber,
  }
}

export { useSpeakAudio }
