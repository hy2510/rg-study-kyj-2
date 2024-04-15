import style from '@stylesheets/e-book.module.scss'

import Label from './Label'

type PageTurningTypeProps = {
  isAutoNextPage: boolean
  changeAutoNextPage: (isAuto: boolean) => void
}

export default function PageTurningType({
  isAutoNextPage,
  changeAutoNextPage,
}: PageTurningTypeProps) {
  return (
    <>
      <Label text={'책장 넘기기'} />
      <div className={style.page_turning_mode}>
        <div
          className={
            isAutoNextPage
              ? style.choose_button
              : `${style.choose_button} ${style.on}`
          }
          onClick={() => {
            changeAutoNextPage(false)
          }}
        >
          수동으로 넘기기
        </div>
        <div
          className={
            isAutoNextPage
              ? `${style.choose_button} ${style.on}`
              : style.choose_button
          }
          onClick={() => {
            changeAutoNextPage(true)
          }}
        >
          자동으로 넘기기
        </div>
      </div>
    </>
  )
}
