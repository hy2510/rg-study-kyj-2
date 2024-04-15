import { useState } from 'react'

import EBCSS from '@stylesheets/e-book.module.scss'

type StoryDropDownMenuProps = {
  menuName: string
  menuItems: { name: string; selected: '' | 'on' }[]
}

import icon_chev_down from '@assets/images/ebook/icon_chev_down.svg'

export default function StoryDropdownMenu({
  menuName,
  menuItems,
}: StoryDropDownMenuProps) {
  // 기능: 메뉴 팝업 띄우기 및 버튼 선택시 이벤트
  const [viewMenu, setViewMenu] = useState(false)
  const [menuList, setMenuList] =
    useState<StoryDropDownMenuProps['menuItems']>(menuItems)

  const selectedMode = menuList.filter((menu) => {
    return menu.selected === 'on'
  })

  return (
    <div className={EBCSS.ebook_play_bar_drop_down_menu}>
      <div
        className={EBCSS.read_mode_option}
        onClick={() => {
          viewMenu ? setViewMenu(false) : setViewMenu(true)
        }}
      >
        <span>{selectedMode[0].name}</span>
        <img src={icon_chev_down} width={15} alt="" />
      </div>
      {viewMenu && (
        <>
          <div className={EBCSS.read_mode_option_menu}>
            <div className={EBCSS.menu_name}>{menuName}</div>
            {menuList.map((menu, i) => {
              return (
                <div
                  className={`menu-item ${menu.selected}`}
                  onClick={() => {
                    const newList = [...menuList]

                    newList.map((b) => {
                      b.selected = ''
                    })
                    newList[i].selected = 'on'

                    setMenuList(newList)
                    setViewMenu(false)
                  }}
                >
                  {menu.name}
                </div>
              )
            })}
          </div>
          <div
            className={EBCSS.light_box}
            onClick={() => {
              setViewMenu(false)
            }}
          ></div>
        </>
      )}
    </div>
  )
}
