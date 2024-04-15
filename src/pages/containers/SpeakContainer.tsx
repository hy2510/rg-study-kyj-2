import { useState, useEffect } from 'react'

import { PageProps } from '@interfaces/IStory'

import '@stylesheets/fonts/font.scss'

import icon_home from '@assets/images/ebook/icon_home.svg'
import icon_setting from '@assets/images/ebook/icon_setting.svg'
import img_movie from '@assets/images/ebook/img_movie.svg'
import img_rec from '@assets/images/ebook/img_rec.svg'
import img_story from '@assets/images/ebook/img_story.svg'
import img_study from '@assets/images/ebook/img_study.svg'
import img_word from '@assets/images/ebook/img_word.svg'
import icon_menu from '@assets/images/ebook/icon_menu.svg'

export default function SpeakContainer() {
  const [pageData, setPageData] = useState<PageProps[]>()
  const [pageWidth, setPageWidth] = useState<number>(0)
  const [pageHeight, setPageHeight] = useState<number>(0)
  const [pageScale, setPageScale] = useState<number>(1)

  // 모바일 기기 감지
  function IsMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent,
    )
  }

  useEffect(() => {
    if (IsMobile()) {
      console.log('모바일이네')
    } else {
      console.log('모바일이 아니네')
    }

    if (window.matchMedia('(orientation: portrait)').matches) {
      console.log('세로네')
    } else {
      console.log('가로네')
    }
  })

  // useEffect(() => {
  //   if (ebPageData) {
  //     // eBook 사이즈 계산하기
  //     let windowHeight = window.innerHeight
  //     const eBookPageImg = new Image()

  //     eBookPageImg.onload = () => {
  //       windowHeight = window.innerHeight
  //       setPageWidth(eBookPageImg.width)
  //       setPageHeight(eBookPageImg.height)
  //       setPageScale((windowHeight / eBookPageImg.height) * 0.8)
  //     }

  //     eBookPageImg.src = ebPageData[0].ImagePath

  //     // resize시 넓이 / 높이 조절
  //     window.addEventListener('resize', () => {
  //       windowHeight = window.innerHeight
  //       if (pageHeight) setPageScale((windowHeight / pageHeight) * 0.8)
  //     })
  //   }
  // }, [ebPageData])

  // if (!ebPageData) return <>Loading...</>

  // 디폴트 화면
  return (
    // 배경 이미지는 해당 eBook의 추천 도서에서 사용되는 배경 이미지가 나와야 함
    <div
      id="ebook"
      style={{
        backgroundImage: `url("https://wcfresource.a1edu.com/newsystem/image/br/bgebook/yard-2.jpg")`,
      }}
    >
      <div className="ebook-header">
        <div className="ebook-header-s1">
          <div className="home-button">
            <img src={icon_home} width={20} alt="" />
          </div>

          <div className="book-title">Jane's Book (1st)</div>
        </div>

        <div className="ebook-header-s2">
          <div className="menu-button">
            <img src={icon_menu} width={24} alt="" />
          </div>
        </div>
      </div>

      <div className="ebook-body" style={{ width: pageWidth * pageScale * 2 }}>
        {/* <SpeakPC
          pageData={ebPageData}
          pageWidth={pageWidth}
          pageHeight={pageHeight}
          pageScale={pageScale}
        /> */}

        <iframe
          sandbox="allow-scripts allow-same-origin allow-popups allow-modals"
          width={940}
          height={640}
          src="./src/utils/selvy/speaking.html"
        ></iframe>
      </div>
    </div>
  )
}
