import { useContext } from 'react'
import { AppContext, AppContextProps } from '@contexts/AppContext'

import EBCSS from '@stylesheets/e-book.module.scss'

type MovieBookProps = {
  toggleMovieShow: (isShow: boolean) => void
}

export default function MovieBook({ toggleMovieShow }: MovieBookProps) {
  const { bookInfo } = useContext(AppContext) as AppContextProps

  return (
    <div className={EBCSS.movieContents}>
      <div className={EBCSS.container}>
        {JSON.parse(JSON.stringify(bookInfo.AnimationPath)) === '' ||
        !bookInfo.AnimationPath ? (
          'No Movie Book'
        ) : (
          <video width="100%" height="100%" controls>
            <source
              src={JSON.parse(JSON.stringify(bookInfo.AnimationPath))}
              type="video/mp4"
            />
          </video>
        )}

        <div
          className={EBCSS.btnDelete}
          onClick={() => toggleMovieShow(false)}
        ></div>
      </div>
    </div>
  )
}
