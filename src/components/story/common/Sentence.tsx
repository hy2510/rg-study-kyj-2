type SentenceProps = {
  pageNumber: number
  sentence: string
  sequence: number
  clickSentence: (page: number, sequence: number) => void
}

export default function Sentence({
  pageNumber,
  sentence,
  sequence,
  clickSentence,
}: SentenceProps) {
  const convertSentence = (sentence: string) => {
    const sentenceIDReg = /id=\"t/g

    let convertedSentence = sentence.replace(
      sentenceIDReg,
      `id="t_${pageNumber}_`,
    )

    if (sequence !== 999) {
      const clickStr = / id=\"t/g
      convertedSentence = convertedSentence.replace(
        clickStr,
        ` style='cursor:pointer;' id="t`,
      )
    }

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
