type HLSentenceProps = {
  pageNumber: number
  sentence: string
  sequence: number
  clickSentence: (page: number, sequence: number) => void
}

export default function HighlightSentence({
  pageNumber,
  sentence,
  sequence,
  clickSentence,
}: HLSentenceProps) {
  const convertSentence = (sentence: string) => {
    const sentenceIDReg = /id=\"t/g

    let convertedSentence = sentence.replace(
      sentenceIDReg,
      `style='cursor:pointer; background-color:#ffff00' id="t_${pageNumber}_`,
    )

    return convertedSentence
  }

  const onClickHandler = () => {
    if (sequence !== 999) clickSentence(pageNumber, sequence)
  }

  return (
    <div
      dangerouslySetInnerHTML={{ __html: convertSentence(sentence) }}
      onClick={() => onClickHandler()}
    ></div>
  )
}
