import { PageSequenceProps, PlayState } from '@interfaces/IStory'

import EBCSS from '@stylesheets/e-book.module.scss'

import StoryDropdownReadType from './StoryDropdownReadType'
import StoryDropdownPlayrate from './StoryDropdownPlayrate'
import StoryDropdownMenu from './StoryDropdownMenu'

// 좌우 화살표 이미지
import icon_chev_white_left from '@assets/images/ebook/icon_chev_white_left.svg'
import icon_chev_white_right from '@assets/images/ebook/icon_chev_white_right.svg'

// 재생버튼 관련 이미지
import img_play from '@assets/images/ebook/btn_play.svg'
import img_pause from '@assets/images/ebook/btn_pause.svg'

// 단어장 이미지
import icon_word from '@assets/images/ebook/icon_word.svg'

// 전체 화면 관련 이미지
import icon_full_screen from '@assets/images/ebook/icon_full_screen.svg'
import icon_full_screen_out from '@assets/images/ebook/icon_full_screen_out.svg'
import { useEffect } from 'react'

type StoryBottomMenuProps = {
  progressWidth: number
  pageSeq: PageSequenceProps
  playState: PlayState
  isFullScreen: boolean
  turnPageLeft: () => void
  turnPageRight: () => void
  changeTextShow: (isShow: boolean) => void
  changeMuteAudio: (isMute: boolean) => void
  changeHighlight: (isHighlight: boolean) => void
  changePlaySpeed: (speed: number) => void
  playAudio: (pageNumber: number, seq: number) => void
  pauseAudio: () => void
  resumeAudio: () => void
  toggleVocaList: () => void
}

export default function StoryBottomMenu({
  progressWidth,
  pageSeq,
  playState,
  isFullScreen,
  turnPageLeft,
  turnPageRight,
  changeTextShow,
  changeMuteAudio,
  changeHighlight,
  changePlaySpeed,
  playAudio,
  pauseAudio,
  resumeAudio,
  toggleVocaList,
}: StoryBottomMenuProps) {
  useEffect(() => {}, [isFullScreen])

  return (
    <>
      {/* 프로그레스바 */}
      <div className={EBCSS.ebook_progress_bar}>
        <div
          className={EBCSS.progress}
          style={{ width: `${progressWidth}%` }}
        ></div>
      </div>

      {/* 플레이바 */}
      <div className={EBCSS.ebook_play_bar}>
        {/* 플레이바 > 왼쪽 */}
        <div className={EBCSS.ebook_play_bar_pc_area_l}>
          {/* 읽기 모드 Dropdown 메뉴 */}
          <StoryDropdownReadType
            changeTextShow={changeTextShow}
            changeMuteAudio={changeMuteAudio}
            changeHighlight={changeHighlight}
          />

          {/* 재생 속도 Dropdown 메뉴 */}
          <StoryDropdownPlayrate changePlaySpeed={changePlaySpeed} />

          {/* 페이지 넘기기 Dropdown 메뉴 */}
          <StoryDropdownMenu
            menuName="페이지 넘기기"
            menuItems={[
              { name: 'Auto', selected: 'on' },
              { name: 'Manually', selected: '' },
            ]}
          />
        </div>

        {/* 플레이바 > 가운데 */}
        <div className={EBCSS.ebook_play_bar_pc_area_c}>
          <div
            className={EBCSS.backward}
            onClick={() => {
              turnPageLeft()
            }}
          >
            <img src={icon_chev_white_left} width={40} alt="" />
          </div>
          <div
            className={EBCSS.play}
            onClick={() => {
              switch (playState) {
                case 'play':
                case 'resume':
                  pauseAudio()
                  break
                case '':
                case 'stop':
                  playAudio(pageSeq.playPage, pageSeq.sequnce)
                  break
                case 'pause':
                  resumeAudio()
                  break
              }
            }}
          >
            {playState !== 'play' ? (
              <img src={img_play} width={40} />
            ) : (
              <img src={img_pause} width={40} />
            )}
          </div>
          <div
            className={EBCSS.forward}
            onClick={() => {
              turnPageRight()
            }}
          >
            <img src={icon_chev_white_right} width={40} alt="" />
          </div>
        </div>

        {/* 플레이바 > 오른쪽 */}
        <div className={EBCSS.ebook_play_bar_pc_area_r}>
          <div
            className={EBCSS.word_button}
            onClick={() => {
              toggleVocaList()
            }}
          >
            <img src={icon_word} width={28} height={28} alt="" />
          </div>
          <div
            className={EBCSS.full_screen_button}
            onClick={() => {
              if (!isFullScreen) {
                document.body.requestFullscreen()
              } else {
                document.exitFullscreen()
              }
            }}
          >
            {isFullScreen ? (
              <img src={icon_full_screen_out} width={20} height={20} alt="" />
            ) : (
              <img src={icon_full_screen} width={20} height={20} alt="" />
            )}
          </div>
        </div>
      </div>
    </>
  )
}
