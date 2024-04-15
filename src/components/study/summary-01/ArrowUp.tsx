import summaryCSS from '@stylesheets/summary.module.scss'
import summaryCSSMobile from '@stylesheets/mobile/summary.module.scss'

import useDeviceDetection from '@hooks/common/useDeviceDetection'

import { IcoArrowUp } from '@components/common/Icons'

const isMobile = useDeviceDetection()

const style = isMobile ? summaryCSSMobile : summaryCSS

export default function ArrowUp() {
  return (
    <div className={style.correctDirection}>
      {/* <IcoArrowUp isColor width={24} height={24} /> */}
      <div className={style.iconArrowUp}></div>
    </div>
  )
}
