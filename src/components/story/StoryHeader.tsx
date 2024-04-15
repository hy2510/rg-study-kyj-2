import EBCSS from '@stylesheets/e-book.module.scss'
import icon_menu from '@assets/images/ebook/icon_menu.svg'

type StoryHeaderProps = {
  toggleSideMenu: () => void
}

export default function StoryHeader({ toggleSideMenu }: StoryHeaderProps) {
  return (
    <div className={EBCSS.ebook_header}>
      <div
        className={EBCSS.menu_button}
        onClick={() => {
          toggleSideMenu()
        }}
      >
        <img src={icon_menu} width={24} height={24} alt="" />
      </div>
    </div>
  )
}
