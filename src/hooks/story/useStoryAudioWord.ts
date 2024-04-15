import { useEffect, useRef, useState } from 'react'

type useStoryAudioWordProps = {
  pauseStoryAudio: () => void
  resumeStoryAudio: () => void
}

export default function useStoryAudioWord({
  pauseStoryAudio,
  resumeStoryAudio,
}: useStoryAudioWordProps) {
  // 오디오
  const audioRef = useRef(new Audio())
  audioRef.current.autoplay = true
  const player = audioRef.current

  useEffect(() => {
    console.log('ue ps', player)
    // 오디오가 재생 가능할 때
    const handlerCanPlayThrough = () => {
      console.log('audio canplaythrough')

      pauseStoryAudio()
      player.play()
    }

    player.addEventListener('canplaythrough', handlerCanPlayThrough)
    // 오디오가 재생 가능할 때 end

    // 오디오가 재생 완료
    const handlerEnded = () => {
      console.log('audio ended')

      resumeStoryAudio()
    }

    player.addEventListener('ended', handlerEnded)
    // 오디오가 재생 완료 end

    // 오디오 재생

    return () => {
      console.log('return handler')
      player.removeEventListener('canplaythrough', handlerCanPlayThrough)
      player.removeEventListener('ended', handlerEnded)
    }
  }, [])

  const playAudio = (src: string) => {
    player.src = src
  }

  return {
    playAudio,
  }
}

export { useStoryAudioWord }
