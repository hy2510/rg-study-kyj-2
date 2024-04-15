// import { useEffect, useState } from 'react'
// import { SpeakPageProps, PageProps } from '@interfaces/IStory'

// import Sentence from '../story/Common/Sentence'
// import HighlightSentence from '../story/HighlightSentence'

// export default function SpeakPage({
//   pageSeq,
//   pageNumber,
//   pageScale,
//   pageData,
//   currentTime,
//   clickSentence,
// }: SpeakPageProps) {
//   const [css, setCss] = useState<string>('')
//   const [sentencesData, setSentenceData] = useState<PageProps[]>()
//   const [image, setImage] = useState<string>()

//   useEffect(() => {
//     if (pageData) {
//       // css
//       const pageCss = pageData.find(
//         (data) => data.page === pageNumber && data.sequence === 999,
//       )?.pageStyle

//       if (pageCss) {
//         // style css
//         const cssIDReg = /\#t/g
//         const convertedCss = pageCss.replace(cssIDReg, `#t_${pageNumber}_`)

//         setCss(convertedCss)
//       }
//       // css end

//       // image
//       const imagePath = pageData.find(
//         (data) => data.page === pageNumber && data.sequence === 999,
//       )?.imagePath

//       // sentence
//       const sentences = pageData.filter((data) => data.page === pageNumber)

//       setSentenceData(sentences)
//       setImage(imagePath)
//     }
//   }, [pageNumber])

//   return (
//     <>
//       <div
//         style={{
//           transform: `scale(${pageScale})`,
//           transformOrigin: 'top left',
//         }}
//       >
//         <div className="text-wrapper">
//           <div dangerouslySetInnerHTML={{ __html: css }}></div>

//           {sentencesData &&
//             sentencesData.map((data) => {
//               if (
//                 pageSeq.playPage === pageNumber &&
//                 data.sequence !== 999 &&
//                 currentTime >= data.startTime / 1000 &&
//                 currentTime <= data.endTime / 1000
//               ) {
//                 return (
//                   <HighlightSentence
//                     pageNumber={pageNumber}
//                     sequence={data.sequence}
//                     sentence={data.pageContents}
//                     clickSentence={clickSentence}
//                   />
//                 )
//               } else {
//                 return (
//                   <Sentence
//                     pageNumber={pageNumber}
//                     sequence={data.sequence}
//                     sentence={data.pageContents}
//                     clickSentence={clickSentence}
//                   />
//                 )
//               }
//             })}
//         </div>
//       </div>
//       <img src={image} alt="" />
//     </>
//   )
// }
