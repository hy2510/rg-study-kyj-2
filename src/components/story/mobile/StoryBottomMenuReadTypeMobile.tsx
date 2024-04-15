import { StoryMenuItemProps } from '@interfaces/IStory'

import style from '@stylesheets/e-book.module.scss'

import Label from './Label'
import SelectBox from './SelectBox'

type StoryBottomMenuReadTypeMobileProps = {
  readTypeList: StoryMenuItemProps[]
  changeReadTypeList: (newReadTypeList: StoryMenuItemProps[]) => void
  changeTextShow: (isShow: boolean) => void
  changeMuteAudio: (isMute: boolean) => void
  changeHighlight: (isHighlight: boolean) => void
}

export default function StoryBottomMenuReadTypeMobile({
  readTypeList,
  changeReadTypeList,
  changeTextShow,
  changeMuteAudio,
  changeHighlight,
}: StoryBottomMenuReadTypeMobileProps) {
  const changeReadType = (readTypeIndex: number) => {
    const newList = [...readTypeList]

    newList.map((list) => {
      list.selected = ''
    })

    newList[readTypeIndex].selected = 'on'

    switch (readTypeIndex) {
      case 0:
        // basic
        changeTextShow(true)
        changeMuteAudio(false)
        changeHighlight(true)
        break

      case 1:
        // no text
        changeTextShow(false)
        changeMuteAudio(false)
        changeHighlight(true)
        break

      case 2:
        // no audio
        changeTextShow(true)
        changeMuteAudio(true)
        changeHighlight(true)
        break

      case 3:
        // no highlight
        changeTextShow(true)
        changeMuteAudio(false)
        changeHighlight(false)
        break
    }

    changeReadTypeList(newList)
  }

  return (
    <>
      <Label text={'읽기 모드'} />
      <SelectBox>
        {readTypeList.map((menu, i) => {
          return (
            <div
              className={`${style.select_button} ${
                menu.selected === 'on' ? style.on : ''
              }`}
              onClick={() => changeReadType(i)}
            >
              <div className={style.radio}></div>
              {menu.name}
            </div>
          )
        })}
      </SelectBox>
    </>
  )
}
