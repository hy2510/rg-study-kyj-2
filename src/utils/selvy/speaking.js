const crStep = 'LR'
var crSkin = ''
const DOMAINS = '/src/utils/selvy'

const fileList = [
  '/STT_EDU_ENG_DB/SELVY_STT_ENG2014_01.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG2014_02.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG2014_03.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M0.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M1.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M2.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M3.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M4.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M5.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M6.bin',
  '/STT_EDU_ENG_DB/SELVY_STT_ENG_M7.bin',
  '/STT_EDU_ENG_DB/PEF_DB.bin',
  '/STT_EDU_ENG_DB/g2p.dat',
  '/STT_EDU_ENG_DB/selvy_grade.dat',
]

let skinPathOrg
const levelKSkinPathOrg =
  'https://wcfresource.a1edu.com/newsystem/AppMobile/eBookSkin/K/Cover' // K 레벨 스킨
const level1SkinPathOrg =
  'https://wcfresource.a1edu.com/newsystem/AppMobile/eBookSkin/K/Cover' // 1레벨 스킨

const mTime = new Date().getTime()

const sndCorrect =
  'https://wcfresource.a1edu.com/newsystem/sound/dodoabc/sightword/effect/correct.mp3'
const sndIncorrect =
  'https://wcfresource.a1edu.com/newsystem/sound/dodoabc/sightword/effect/incorrect.mp3'
const sndExcellent =
  'https://wcfresource.a1edu.com/newsystem/sound/dodoabc/sightword2/effect/aud_pass.mp3'
const sndGoodEffort =
  'https://wcfresource.a1edu.com/newsystem/sound/dodoabc/sightword2/effect/aud_fail.mp3'

const passScore = 70

let isWorking = true
let sound
let quizData = '' // EbLAndR Quiz 데이타 저장
let soundPath = '' // 문제 음원 경로 EbLAndR..SoundPath
let dataPath = '' // 문제 dat 경로 EbLAndR..DataPath
let imgPath = '' // 현재 페이지 이미지 경로
let resultData = '' // 평가 결과 저장 데이타
let quizNo = 0 // 현재 문항 번호
let sequence = 1 // 현재 페이지의 문제 시퀀스(매 페이지마다 1, 2, ...)
let sentence = '' // 현재 문장
let currentPage = 0 // 현재 페이지 번호(현재 quizNo에 의해 정해짐)
let highlightColor = ''

// 점수
let scoreOverall = ''
let scoreWord = ''
let scorePronunciation = ''
let scoreProsody = ''
let scoreIntonation = ''
let scoreTiming = ''
let scoreLoudness = ''

const chanceCnt = 3
let remainCnt = chanceCnt

let isCorrect = false

let soundDuration = 0

let pervPage
let refrcg
let userrcg
let recordBuffer
let userBuffer
let userRcg = ''
let progressInterval
let passState = ''

let timerWord

let challengeNum = 1
let isYoutube

let isSoundData

// "더 크게 말해주세요!" 출력 횟수
let cntSpeakLouder = 0

const doStart = () => {
  try {
    if (gvLanguage == 'KOR') {
      $('#btGuideSpeak').addClass('d-none')
      $('#btGuideSpeakKR').removeClass('d-none')
    } else {
      $('#btGuideSpeak').removeClass('d-none')
      $('#btGuideSpeakKR').addClass('d-none')
    }

    if (gvLanguage == 'VTN') {
      $('#btGuideSpeak').addClass('d-none')
    }

    if (gvStudyInfo.AnimationPath.indexOf('youtube') > 0) {
      isYoutube = true
    }

    if (
      gvStudyInfo.AnimationPath == '' ||
      gvStudyInfo.AnimationPath == undefined
    ) {
      $('.btn-movie').addClass('d-none')
    } else {
      $('.btn-movie').removeClass('d-none')
    }

    $('#btnReadBook').on('click', function () {
      setSessionDefault()

      location.href = './EBK.aspx'
    })

    // 도움말 버튼 클릭
    $('#btGuideSpeak').on('click touchstart', function () {
      if ($('#popGuideSpeak').css('display') == 'block') {
        $('#popGuideSpeak').css('display', 'none')
      } else {
        $('#popGuideSpeak').css('display', 'block')
      }
    })
    $('#btGuideSpeakKR').on('click touchstart', function () {
      if ($('#popGuideSpeak').css('display') == 'block') {
        $('#popGuideSpeak').css('display', 'none')
      } else {
        $('#popGuideSpeak').css('display', 'block')
      }
    })

    // 1. 퀴즈 데이터 가져오기
    wsBREB.getSpeakQuiz(getQuizOnSucc, getQuizOnFail)
  } catch (er) {
    alert('LoadResultData error : ' + er)
  }

  if (gvMode == 3) {
    $('#btGoNextPage').removeClass('d-none')
    $('#btGoNextQuiz').removeClass('d-none')
  }
}

const getQuizOnSucc = (p1, p2, p3) => {
  /*** EX :
    Page	Sequence	QuizNo	Sentence	            SoundPath	                    DataPath	                EvaluationLevel     EvaluationModel	ImagePath	            FontColor	Contents	        Css
    3	    1	        1	    Dad gives Ben a bat.	.../dadgivesbenabat.mp3	        .../dadgivesbenabat.dat	    1	                7	            .../eb-kb-001-3.jpg	    #ffff00	    <div id="stn_1">...  #t1_3{left:...
    3	    2	        2	    Dad gives Ben a look.	.../dangivesbenalook.mp3	    .../dangivesbenalook.dat	1	                7	            .../eb-kb-001-3.jpg	    #ffff00	    <div id="stn_1">...  #t1_3{left:...
    4	    1	        3	    Ben has the Big bat.	.../benhasthebigbat.mp3	        .../benhasthebigbat.dat	    1	                7	            .../eb-kb-001-4.jpg	    #ffff00	    <div id="stn_1">...  #t1_3{left:...
    4	    2	        4	    Ben hits the big goat.	.../benhitsthebiggoat.mp3	    .../benhitsthebiggoat.dat	1	                7	            .../eb-kb-001-4.jpg	    #ffff00	    <div id="stn_1">...  #t1_3{left:...
    5	    1	        5	    A ball falls out.	    .../aballfallsout.mp3	        .../aballfallsout.dat	    1	                7	            .../eb-kb-001-5.jpg	    #ffff00	    <div id="stn_1">...  #t1_3{left:...
    5	    2	        6	    A doll falls out.	    .../adollfallsout.mp3	        .../adollfallsout.dat	    1	                7	            .../eb-kb-001-5.jpg	    #ffff00	    <div id="stn_1">...  #t1_3{left:...
    6	    1	        7	    Look at their dog ...	.../lookattheirdog....mp3	    .../lookattheirdog....dat	1	                7	            .../eb-kb-001-6.jpg	    #ffff00	    <div id="stn_1">...  #t1_3{left:...
    ***/

  if (p1 == '[]') {
    alert('문제 데이터가 없습니다.')

    return
  }

  quizData = $.parseJSON(p1)

  const challengeNumber = quizData[0].ChallengeNumber

  if (challengeNumber) {
    challengeNum = quizData[0].ChallengeNumber
  }

  getWord()

  // 2. 기록 존재 유무 파악
  wsBREB.getSpeakResult(getResultOnSucc, getResultOnFail)
}

const getResultOnSucc = (p1, p2, p3) => {
  resultData = $.parseJSON(p1)

  if (resultData.length < 0) {
    alert('get result error')

    return
  }

  // 3. 기록에 따라서 책 생성
  // 감탄사같이 하나의 단어로 이루어진 문장은 그냥 넘김.
  if (resultData.length > 0) {
    // 가장 최근까지 푼 문제의 번호 확인. 단, 0보다 커야함.
    const lastQuizNo = resultData[resultData.length - 1].QuizNo
    const startQuizNo = quizData.findIndex((el) => el.QuizNo == lastQuizNo)
    quizNo = startQuizNo + 1

    if (quizData[quizNo].StnNo == 0) {
      quizNo++

      while (quizData[quizNo].StnNo == 0) {
        quizNo++
      }
    }

    createBook(quizData)
  } else {
    if (quizData[quizNo].StnNo == 0) {
      quizNo++

      while (quizData[quizNo].StnNo == 0) {
        quizNo++
      }
    }

    createBook(quizData)
  }
}

const getResultOnFail = (p1, p2, p3) => {
  alert('getResultOnFail')
}

const createBook = (bookInfo) => {
  changeBookSkin(gvStudyInfo.EBKSkinNum.toString())

  $('#elBookTitle').html(
    gvStudyInfo.LevelName +
      '-' +
      gvStudyInfo.Round +
      '&nbsp&nbsp&nbsp' +
      gvStudyInfo.Title,
  )

  while ($('#elBookTitle')[0].offsetHeight > 32) {
    $('#elBookTitle').css('font-size', (titleFontSize -= 0.01) + 'em')
  }

  for (let i = 0; i < bookInfo.length; i++) {
    if (bookInfo[i].Sequence == 1) {
      let htmlText = `<div id="page-${bookInfo[i].Page}" style="background-color:white; background-image:url(${bookInfo[i].ImagePath}); background-size:480px 750px; background-repeat:no-repeat;">`
      htmlText += `<div class="textWrapper" style="position:relative;">`
      htmlText += bookInfo[i].Css.replace(/#t/g, '#t_' + (i + 1) + '_')
      htmlText += bookInfo[i].Contents.replace(
        /stn_/g,
        'stn_' + bookInfo[i].Page + '_',
      )
        .replace(/id=\"t/g, 'id="t_' + (i + 1) + '_')
        .replace('margin-top:14px;', '')
        .replace('margin-top:13px;', '')
        .replace('margin-top:5px;', '')
      htmlText += '</div></div>'

      $('#flipbook').append(htmlText)
    }
  }

  $('#flipbook').turn({
    width: 960,
    height: 750,
    page: 2,
    duration: 900,
    acceleration: false,
    gradients: false,
    autoCenter: false,

    when: {
      start: function (event, pageObject, corner) {
        if (pageObject.next == 1) {
          return event.preventDefault()
        }

        if (
          corner == 'tl' ||
          corner == 'tr' ||
          corner == 'bl' ||
          corner == 'br' ||
          corner == 'l' ||
          corner == 'r'
        ) {
          return event.preventDefault()
        }
      },

      turning: function (event, page, view) {
        if (page == 1) {
          return event.preventDefault()
        }
      },

      turned: function (event, page, view) {},
    },
  })

  $(window).keydown(function (e) {
    if (e.keyCode == 37) {
      $('#flipbook').turn('previous')
    }

    if (e.keyCode == 39) {
      $('#flipbook').turn('next')
    }
  })

  // preventing click page for turning
  //$('#flipbook').turn('disable', true);

  yepnope({
    test: Modernizr.csstransforms,
    yep: ['/HP/assets/js/turnjs4/turn.min.js'],
    nope: ['/HP/assets/js/turnjs4/turn.html4.js'],
    both: ['/HP/assets/js/turnjs4/basic.css'],
  })

  // Selvas 라이브러리 초기화 : 초기화가 끝나면 setupQuiz 호출됨
  if (localStorage.getItem('install') == 1) {
    SelvySTT_Edu_ENG_Init()
    selvySetting()

    // initAudio 성공 시 setupQuiz 호출
    initAudio(setupQuiz)
  } else {
    installDB()
  }
}

const changeBookSkin = (numSkin) => {
  // 특정 날짜에 포함 안됐는데 6번인 경우.
  if (
    !isTodayBetweenDate(gvStudyInfo.SkinBegin, gvStudyInfo.SkinEnd) &&
    numSkin == 5
  ) {
    skinNumber = 0
  } else {
    skinNumber = numSkin
  }

  skinPath = `${levelKSkinPathOrg}${skinNumber.toString()}/`

  $('body').css(
    'background-image',
    `url(${skinPath}main_color.png?ver=${mTime}`,
  )

  const dw = document.body.clientWidth
  const dh = document.body.clientHeight

  // 책 테두리
  $('.js-book-bg').css(
    'background',
    'url(' + skinPath + 'bg_book.png?ver=' + mTime + ')',
  )

  // 배경
  $('#bgSkin').css('width', dw)
  $('#bgSkin').css('height', dh)
  $('#bgSkin').attr('src', `${skinPath}main_photo.png?ver=${mTime}`)
  $('#bgSkin').attr('src', skinPath + 'main_photo.png?ver=' + mTime)

  // 스토리
  $('.js-btn-story').attr('src', skinPath + 'main_story.png?ver=' + mTime)
  $('.js-btn-story').mouseover(function () {
    $('.js-btn-story').attr('src', skinPath + 'main_story2.png?ver=' + mTime)
  })
  $('.js-btn-story').mouseout(function () {
    $('.js-btn-story').attr('src', skinPath + 'main_story.png?ver=' + mTime)
  })

  $('.js-btn-speak').attr('src', skinPath + 'main_speak2.png?ver=' + mTime)

  // 스터디
  if (
    gvStudyInfo.ListenAndRepeatYn == 'Y' &&
    gvStudyInfo.ReadingCompletedEB == 'N'
  ) {
    $('.js-btn-study').attr('src', skinPath + 'main_study3.png?ver=' + mTime)
  } else {
    $('.js-btn-study').attr('src', skinPath + 'main_study.png?ver=' + mTime)
    $('.js-btn-study').mouseover(function () {
      $('.js-btn-study').attr('src', skinPath + 'main_study2.png?ver=' + mTime)
    })
    $('.js-btn-study').mouseout(function () {
      $('.js-btn-study').attr('src', skinPath + 'main_study.png?ver=' + mTime)
    })
  }

  // 단어
  $('.js-btn-word').attr('src', skinPath + 'main_word.png?ver=' + mTime)
  $('.js-btn-word').mouseover(function () {
    $('.js-btn-word').attr('src', skinPath + 'main_word2.png?ver=' + mTime)
  })
  $('.js-btn-word').mouseout(function () {
    $('.js-btn-word').attr('src', skinPath + 'main_word.png?ver=' + mTime)
  })

  // 무비
  $('.js-btn-movie').attr('src', skinPath + 'main_ani.png?ver=' + mTime)
  $('.js-btn-movie').mouseover(function () {
    $('.js-btn-movie').attr('src', skinPath + 'main_ani2.png?ver=' + mTime)
  })
  $('.js-btn-movie').mouseout(function () {
    $('.js-btn-movie').attr('src', skinPath + 'main_ani.png?ver=' + mTime)
  })

  // 단어장 배경 이미지 삭제
  //$("#imgBgWord").attr("src", `${skinPath}main_word${gvStudyInfo.LevelName.toLowerCase()}.png?ver=${mTime}`);
  $('#imgBgWord').css('display', 'none')
  $('#boxWords').css('background-color', 'white')

  $('#imgSkin').attr(
    'src',
    `${skinPath}main_skin${skinNumber}.png?ver=${mTime}`,
  )
  $('#imgHome').attr('src', `${skinPath}main_home.png?ver=${mTime}`)

  $('#imgHome').on('click', () => {
    goHome()
  })
}

// 퀴즈 세팅 시작
const setupQuiz = () => {
  // "더 크게 말해주세요!" 출력 횟수 초기화
  cntSpeakLouder = 0

  setCurrentValue()

  $('.t').parent().css('cursor', 'default')
  $('.t').off('click')

  $('.js-btn-play').addClass('disabled')

  $('#flipbook').turn('disable', false)
  $('#flipbook').turn(
    'page',
    currentPage % 2 == 0 ? currentPage - 1 : currentPage,
  )
  $('#flipbook').turn('disable', true)

  $('.textWrapper').find('*').css('background-color', 'transparent')
  $(`#stn_${currentPage}_${sequence}`)
    .find('*')
    .css('background-color', highlightColor)
  $(`#stn_${currentPage}_${sequence}`).css('cursor', 'pointer')

  $(`#stn_${currentPage}_${sequence}`).on('click', function () {
    if (isWorking) return false

    $('.js-btn-sound').removeClass('d-none')
    $('.js-btn-replay').addClass('d-none')
    $('.js-btn-record').addClass('disabled')

    playSound(soundPath, afterPlaySentence)
  })

  //StudyV20\HP\Study\DodoABC\Studys\SightWord\ListenAndRepeat\readme.txt 참조
  $('.js-ipt1').val(quizData[quizNo].EvaluationLevel) // 1~4
  $('.js-ipt2').val(quizData[quizNo].EvaluationModel) // 1~7

  // 문제 평가 레퍼런스 세팅
  loadReference(dataPath)

  // 음원 재생
  playSound(soundPath, afterPlaySentence)
}

const playSound = (pSrc, pEndFun) => {
  setWorking(true)

  if (pSrc != sndCorrect && pSrc != sndIncorrect) {
    isSoundData = true
  } else {
    isSoundData = false
  }

  if (isSoundData) {
    $('.js-btn-sound').removeClass('disabled')
    $('.js-btn-sound').removeClass('d-none')
    $('.js-btn-replay').addClass('d-none')
  } else {
    $('.js-btn-sound').addClass('disabled')
  }

  if (sound != undefined && sound != NaN) {
    sound.Stop()
  }

  if (pEndFun) {
    sound = Sound(
      {
        src: pSrc,
        repeat: 1,
      },
      undefined,
      pEndFun,
    )
  } else {
    sound = Sound(
      {
        src: pSrc,
        repeat: 1,
      },
      undefined,
      () => {
        setWorking(false)

        $('.js-btn-record').removeClass('disabled')
        $('.js-btn-replay').removeClass('active')
      },
    )
  }

  sound.Play()
}

const afterPlaySentence = () => {
  if (isSoundData) {
    $('.js-btn-sound').addClass('d-none')
    $('.js-btn-replay').removeClass('d-none disabled')

    $('.js-btn-replay').on('click', function () {
      if (isWorking) return false

      $('.js-btn-record').addClass('disabled')
      $('.js-btn-sound').removeClass('d-none')
      $('.js-btn-replay').addClass('d-none')

      // 음원 재생
      playSound(soundPath, () => {
        $('.js-btn-replay').removeClass('d-none')
        $('.js-btn-sound').addClass('d-none')
        $('.js-btn-record').removeClass('disabled')

        setWorking(false)
      })
    })
  }

  $('.js-btn-record').removeClass('disabled')

  setWorking(false)
}

const loadNext = () => {
  setWorking(true)

  quizNo++

  while (quizData[quizNo].StnNo == 0) {
    quizNo++
  }

  remainCnt = chanceCnt

  setupQuiz()
}

const setCurrentValue = () => {
  $('.js-btn-replay').off('click')
  $('.js-btn-replay').addClass('d-none').removeClass('disabled')

  $('.js-btn-record').removeClass('recording').addClass('disabled')

  $('.js-btn-sound').removeClass('disabled d-none')

  isCorrect = false
  isSoundData = false

  currentPage = quizData[quizNo].Page
  sequence = quizData[quizNo].Sequence
  soundPath = quizData[quizNo].SoundPath
  dataPath = quizData[quizNo].DataPath
  imgPath = quizData[quizNo].ImagePath
  highlightColor = quizData[quizNo].FontColor
  sentence = quizData[quizNo].Sentence
}

const saveResult = () => {
  try {
    let lastQuizYn = quizNo === quizData.length - 1 ? 'Y' : 'N'

    if (lastQuizYn == 'N') {
      let tempQuizNo = quizNo + 1

      while (quizData[tempQuizNo].StnNo == 0) {
        tempQuizNo++

        if (!quizData[tempQuizNo]) {
          lastQuizYn = 'Y'
          break
        }
      }
    }

    // sql로 넘기는 경우 홑따옴표 처리, 문장에 쌍따옴표가 들어있는 경우 처리
    const sentenceAfterReplace = sentence
      .replace(/'/g, "''")
      .replace(/"/g, '\\"')

    let jsonStr = '{'
    jsonStr += 'challenge_no: "' + challengeNum + '" '
    jsonStr += ', page :"' + currentPage + '" '
    jsonStr += ', sequence : "' + sequence + '"'
    jsonStr += ', quiz_no :"' + quizData[quizNo].QuizNo + '" '
    jsonStr += ', sentence :"' + sentenceAfterReplace + '" '
    jsonStr += ', score_overall :"' + scoreOverall + '" '
    jsonStr += ', score_word :"' + scoreWord + '" '
    jsonStr += ', score_pronunciation :"' + scorePronunciation + '" '
    jsonStr += ', score_prosody :"' + scoreProsody + '" '
    jsonStr += ', score_intonation :"' + scoreIntonation + '" '
    jsonStr += ', score_timing :"' + scoreTiming + '" '
    jsonStr += ', score_loudness :"' + scoreLoudness + '" '
    jsonStr += ', last_quiz_yn :"' + lastQuizYn + '" '
    jsonStr += '}'

    wsBREB.saveSpeakResult(jsonStr, saveResultOnSucc, saveResultOnFail)
  } catch (er) {
    alert('SaveResult error : ' + er)
  }

  return false
}

const saveResultOnSucc = (p1, p2, p3) => {
  if (isCorrect) {
    $('.js-btn-record').removeClass('recording')
  }

  passState = $.parseJSON(p1)[0].Column2

  confirmResult()
}

const saveResultOnFail = (p1, p2, p3) => {
  alert('saveResultOnFail')
}

const startRecord = () => {
  if (isWorking) {
    return false
  } else {
    setWorking(true)

    startProgress()

    $('.js-btn-replay').off('click')
    $('.js-btn-replay').addClass('disabled')
    $('.js-btn-record').addClass('recording')

    startRecording()

    setTimeout(function () {
      stopRecord()
    }, soundDuration)
  }
}

function stopRecord() {
  var practiceStart = function (buffer) {
    let inputText = sentence.split(' ').join(';') + ';'
    recordBuffer = buffer

    //Practice mode must settext with Chunk mode.
    var ret = SelvySTT_Edu_ENG_SetText(F_ENG_CHUNK, inputText)

    if (ret == R_ENG_SUCCESS) {
      ret = SelvySTT_Edu_ENG_Recognition_Batch(buffer)

      if (ret == R_ENG_SUCCESS) {
        if (userrcg != null) {
          userrcg.delete()
          userrcg = null
        }

        userrcg = Recognition_Result_ENG()
        SelvySTT_Edu_ENG_Get_Score(userrcg)

        var userEPD = SelvySTT_Edu_ENG_Get_Score_EPD_Buffer(userrcg)
        ret = SelvySTT_Edu_ENG_Assessment(
          refrcg,
          window.m_rec_buffer_ref,
          userrcg,
          userEPD,
        )

        if (ret == R_ENG_SUCCESS) {
          v = Assessment_Result_ENG()
          SelvySTT_Edu_ENG_Get_Assessment_Result(v)

          // 점수 디버깅
          let txtresult = ''

          txtresult += 'Spoken Word: ' + $('#userinputtext').val() + '<br />'
          txtresult += 'Overall Score : ' + v.overall + '<br/>'

          let wordTotal = 0

          for (let i = 0; i < userrcg.word_score.length; ++i) {
            wordTotal += userrcg.word_score[i]
          }

          txtresult +=
            'Word : ' +
            Math.round(wordTotal / userrcg.word_score.length) +
            '<br/>'

          txtresult += 'Pronunciation : ' + v.pronunciation_score + '<br/>'
          txtresult += 'Prosody : ' + v.prosody_score + '<br />'
          txtresult += 'Intonation : ' + v.intonation_score + '<br />'
          txtresult += 'Timing : ' + v.timing_score + '<br />'
          txtresult += 'Loudness : ' + v.loudness_score + '<br />'

          scoreOverall = v.overall
          scoreWord = Math.round(wordTotal / userrcg.word_score.length)
          scorePronunciation = v.pronunciation_score
          scoreProsody = v.prosody_score
          scoreIntonation = v.intonation_score
          scoreTiming = v.timing_score
          scoreLoudness = v.loudness_score

          // 점수 확인 후 동작
          if (scoreOverall >= passScore) {
            correctAction()
          } else {
            incorrectAction()
          }
        } else {
          if (ret == R_ENG_ERROR_INIT) {
            // 초기화 되지 않았거나 실패
            swal({
              text: getLanguage('고객센터에 문의해 주세요.'),
              icon: '/HP/Study/BookReading/EB/img/common/dodo3.jpg',
            }).then(() => {
              afterPlaySentence()
              $('.js-btn-record').removeClass('recording disabled')

              setWorking(false)
            })
          } else {
            cntSpeakLouder++

            if (cntSpeakLouder < 3) {
              if (gvLanguage == 'KOR') {
                swal({
                  text: '',
                  icon: '/HP/Study/BookReading/EB/img/common/speak_louder_popup_KR.png',
                }).then(() => {
                  afterPlaySentence()
                  $('.js-btn-record').removeClass('recording disabled')

                  setWorking(false)
                })
              } else {
                swal({
                  text: getLanguage('더 크게 말해주세요!'),
                  icon: '/HP/Study/BookReading/EB/img/common/speaklouder.png',
                }).then(() => {
                  afterPlaySentence()
                  $('.js-btn-record').removeClass('recording disabled')

                  setWorking(false)
                })
              }
            } else {
              // 3번 실패시 50점(총점)
              scoreOverall = '50'

              correctAction()
            }
          }
        }
      } else {
        if (ret == R_ENG_ERROR_INIT) {
          // 초기화 되지 않았거나 실패
          swal({
            text: getLanguage('고객센터에 문의해 주세요.'),
            icon: '/HP/Study/BookReading/EB/img/common/dodo3.jpg',
          }).then(() => {
            afterPlaySentence()
            $('.js-btn-record').removeClass('recording disabled')

            setWorking(false)
          })
        } else {
          cntSpeakLouder++

          if (cntSpeakLouder < 3) {
            if (gvLanguage == 'KOR') {
              swal({
                text: '',
                icon: '/HP/Study/BookReading/EB/img/common/speak_louder_popup_KR.png',
              }).then(() => {
                afterPlaySentence()
                $('.js-btn-record').removeClass('recording disabled')

                setWorking(false)
              })
            } else {
              swal({
                text: getLanguage('더 크게 말해주세요!'),
                icon: '/HP/Study/BookReading/EB/img/common/speaklouder.png',
              }).then(() => {
                afterPlaySentence()
                $('.js-btn-record').removeClass('recording disabled')

                setWorking(false)
              })
            }
          } else {
            // 3번 실패시 50점(총점)
            scoreOverall = '50'

            correctAction()
          }
        }
      }
    } else {
      if (ret == R_ENG_ERROR_INIT) {
        // 초기화 되지 않았거나 실패
        swal({
          text: getLanguage('고객센터에 문의해 주세요.'),
          icon: '/HP/Study/BookReading/EB/img/common/dodo3.jpg',
        }).then(() => {
          afterPlaySentence()
          $('.js-btn-record').removeClass('recording disabled')

          setWorking(false)
        })
      } else {
        cntSpeakLouder++

        if (cntSpeakLouder < 3) {
          if (gvLanguage == 'KOR') {
            swal({
              text: '',
              icon: '/HP/Study/BookReading/EB/img/common/speak_louder_popup_KR.png',
            }).then(() => {
              afterPlaySentence()
              $('.js-btn-record').removeClass('recording disabled')

              setWorking(false)
            })
          } else {
            swal({
              text: getLanguage('더 크게 말해주세요!'),
              icon: '/HP/Study/BookReading/EB/img/common/speaklouder.png',
            }).then(() => {
              afterPlaySentence()
              $('.js-btn-record').removeClass('recording disabled')

              setWorking(false)
            })
          }
        } else {
          // 3번 실패시 50점(총점)
          scoreOverall = '50'

          correctAction()
        }
      }
    }
  }

  stopProgress()
  stopRecording(practiceStart)
}

const playRecord = () => {
  // 음원 파일이 존재하는 경우
  if (recordBuffer) {
    if (isCorrect) {
      userBuffer = playBuffer(recordBuffer, () => {
        showCorrectMessage(true, true)

        setTimeout(() => {
          showCorrectMessage(false, '')
        }, 1000)

        if (passState == '') {
          playSound(sndCorrect, () => {
            loadNext()
          })
        } else {
          playSound(sndCorrect, () => {
            showMessage(passState)
          })
        }
      })
    } else {
      userBuffer = playBuffer(recordBuffer, () => {
        showCorrectMessage(true, false)

        setTimeout(() => {
          showCorrectMessage(false, '')
        }, 1000)

        playSound(sndIncorrect, () => {
          if (remainCnt > 0) {
            playSound(soundPath, () => {
              afterPlaySentence()
            })
          } else {
            if (passState == '') {
              loadNext()
            } else {
              showMessage(passState)
            }
          }
        })
      })
    }
  }
  // 음원 파일이 존재하지 않는 경우.
  else {
    $('.js-bg-error').removeClass('d-none')

    playSound(sndIncorrect, () => {
      $('.js-bg-error').addClass('d-none')

      if (remainCnt > 0) {
        playSound(soundPath, () => {
          afterPlaySentence()
        })
      } else {
        if (passState == '') {
          loadNext()
        } else {
          showMessage(passState)
        }
      }
    })
  }
}

const playRecord2 = () => {
  // "더 크게 말해주세요!" 3번 나왔을 경우
  showCorrectMessage(true, true)

  setTimeout(() => {
    showCorrectMessage(false, '')
  }, 1000)

  playSound(sndCorrect, () => {
    loadNext()
  })
}

const correctAction = () => {
  isCorrect = true

  $('.js-btn-record').removeClass('recording').addClass('disabled')

  saveResult()
}

const incorrectAction = () => {
  isCorrect = false

  $('.js-btn-record').removeClass('recording').addClass('disabled')

  scoreOverall = 0
  scoreWord = 0
  scorePronunciation = 0
  scoreProsody = 0
  scoreIntonation = 0
  scoreTiming = 0
  scoreLoudness = 0

  remainCnt--

  if (remainCnt <= 0) {
    saveResult()
  } else {
    confirmResult()
  }
}

const showCorrectMessage = (showState, correctState) => {
  if (showState) {
    if (correctState) {
      $('.js-bg-correct').addClass('correct')
      $('.js-text-ox').html('Good Job!')
    } else {
      $('.js-bg-correct').addClass('incorrect')
      $('.js-text-ox').html(`Try Again! ( ${3 - remainCnt} / 3)`)
    }

    $('.js-bg-correct').removeClass('d-none')
  } else {
    $('.js-bg-correct').addClass('d-none')
    $('.js-text-ox').html('')
    $('.js-bg-correct').removeClass('correct incorrect')
  }
}

const confirmResult = () => {
  if (cntSpeakLouder > 2) {
    playRecord2()
  } else {
    playRecord()
  }
}

// for Selvas [[
const installDB = () => {
  let DBDeleteRequest = window.indexedDB.deleteDatabase('/STT_EDU_ENG_DB')

  DBDeleteRequest.onsuccess = function (event) {
    localStorage.removeItem('install')
    installDatabase()
  }
}

const installDatabase = () => {
  var idx = 0
  var fileblob = []

  var addData = function () {
    var db
    var tstamp = new Date()
    var request = window.indexedDB.open('/STT_EDU_ENG_DB', 21)

    request.onerror = function (event) {}

    request.onsuccess = function (event) {
      db = request.result
      db.close()
    }

    request.onupgradeneeded = function (event) {
      var db = event.target.result
      var objectStore = db.createObjectStore('FILE_DATA')
      objectStore.createIndex('timestamp', 'timestamp', { unique: false })
      var transaction = event.target.transaction

      for (var i = 0; i < fileList.length; ++i) {
        transaction
          .objectStore('FILE_DATA')
          .put(
            { timestamp: tstamp, mode: 33206, contents: fileblob[i] },
            fileList[i],
          )
      }

      localStorage.setItem('install', 1)

      SelvySTT_Edu_ENG_Init()

      selvySetting()

      initAudio()
    }
  }

  var get_bin_fromFile = function (index) {
    var bin_data
    var xhr = new XMLHttpRequest()
    var addr = DOMAINS.concat(fileList[index])
    xhr.open('GET', addr, true)
    xhr.responseType = 'arraybuffer'

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status == 404) {
        }

        if (xhr.status === 200 || xhr.status == 0) {
          fileblob.push(new Uint8Array(xhr.response))
          index++

          if (index < fileList.length) {
            get_bin_fromFile(index)
          } else {
            addData()
          }
        }
      }
    }
    xhr.send(null)
  }

  get_bin_fromFile(idx)
}

const selvySetting = () => {
  SelvySTT_Edu_ENG_Check_IndexedDB()
}

const selvySetGrade = () => {
  // 난이도 : 0: Reference Data, 1:Beginner, 2: Intermediate, 3: Advanced, 4: Expert
  SelvySTT_Edu_ENG_Set_Level(Number(quizData[quizNo].EvaluationLevel))

  //North American English: 0(Male), 1(Female), 2(Child), 3(All voice)
  //Korean English: 4(Male), 5(Female), 6(Child), 7(All voice)
  SelvySTT_Edu_ENG_Set_VoiceProfile(Number(quizData[quizNo].EvaluationModel))
}

const loadReference = (dataPath) => {
  // 문제별 평가 기준 세팅
  selvySetGrade()

  if (refrcg) {
    refrcg.delete()
    refrcg = null
  }

  refrcg = Recognition_Result_ENG()

  let xhr = new XMLHttpRequest()

  xhr.open('GET', dataPath)
  xhr.responseType = 'blob'

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200 || xhr.status == 0) {
        let fileBlob = xhr.response
        let reader = new FileReader()

        reader.onloadend = function () {
          SelvySTT_Edu_ENG_Load_From_Bytes(reader.result, refrcg, function () {
            if (refrcg.word_cnt > 0) {
              $('#userinputtext').val(refrcg.result_string[0])
            }
          })
        }

        reader.readAsArrayBuffer(fileBlob)
      }
    }
  }

  xhr.send(null)
}
// for Selvas ]]

var Sound = function (pObj, pFunStartPlay, pFunEndPlay) {
  this.isplay = false
  this.infinity = false

  try {
    if (pObj != undefined) {
      this.audAtt = pObj
      this.StartFun = pFunStartPlay
      this.EndFun = pFunStartPlay
      this.repeat = audAtt.repeat
      this.audio = new Audio(audAtt.src)

      if (repeat < 0) {
        alert('repeat must be bigger than 0')

        return undefined
      } else if (this.repeat == 0) {
        this.infinity = true
      }

      this.Play = function () {
        audio.addEventListener('ended', function () {
          repeat -= 1

          if (repeat > 0 || infinity) {
            audio.play()
          } else {
            // Stop Sound
            isplay = false

            if (pFunEndPlay != undefined) {
              pFunEndPlay()
            }
          }
        })

        audio.addEventListener('timeupdate', function () {
          const additionSec = audio.duration >= 5 ? 1.4 : 1.2

          soundDuration = Math.ceil(audio.duration * 1000 * additionSec)

          if (isplay == false) {
            // Play Sound
            isplay = true

            if (pFunStartPlay != undefined) {
              pFunStartPlay()
            }
          }
        })

        audio.volume = 1
        audio.load()
        audio.play()
      }

      this.Stop = function () {
        audio.setAttribute('src', '')
        audio.addEventListener('timeupdate', null)
        audio.pause()

        if (audio.duration) {
          audio.currentTime = 0
        }

        isplay = false
      }

      this.Pause = function () {
        alert('Pause')
      }
    }
  } catch (e) {
    alert(e)
  }

  return this
}

const setWorking = (state) => {
  isWorking = state
}

const startProgress = () => {
  if (!progressInterval) {
    let nowSec = 0
    progressInterval = setInterval(
      function () {
        nowSec += 0.1

        progressWidth = Math.ceil(
          (nowSec / sound.audio.currentTime > 1
            ? 1
            : nowSec / sound.audio.currentTime) * 100,
        )

        $('.progress-bar').css('width', `${progressWidth}%`)
        $('.progress-bar').html(`${progressWidth}%`)
      },
      100,
      nowSec,
    )
  }
}

const stopProgress = () => {
  clearInterval(progressInterval)

  resetProgress()
}

const resetProgress = () => {
  $('.progress-bar').css('width', 0)
  $('.progress-bar').html('')

  progressInterval = null
}

const showMessage = (state) => {
  switch (state) {
    case 'PASS':
      $('.js-bg-message').addClass('pass').removeClass('d-none')
      playSound(sndExcellent, null)
      break

    case 'FAIL':
      $('.js-bg-message').addClass('fail').removeClass('d-none')
      playSound(sndGoodEffort, null)
      break
  }

  setTimeout(() => {
    hideMessage()
  }, 3000)
}

const hideMessage = () => {
  $('.js-bg-message').addClass('d-none')

  setSessionDefault()

  setTimeout(() => {
    location.href = './ebk.aspx'
  }, 300)
}

const openMovie = () => {
  if (isWorking) return false

  setWorking(true)

  if (userBuffer) userBuffer.stop()

  setMovie('1')

  $('.js-bg-movie').removeClass('d-none')
}

const setMovie = (autoState) => {
  if (isYoutube) {
    $('#frAni').css('display', 'block')
    $('#vdAni').css('display', 'none')

    $('#frAni').each(function (index) {
      $(this).attr(
        'src',
        gvStudyInfo.AnimationPath + '&player_id=frAni&autoplay=' + autoState,
      )
      return false
    })
  } else {
    $('#frAni').css('display', 'none')
    $('#vdAni').css('display', 'block')

    let video = document.getElementById('vdAni')
    let source = document.createElement('source')

    source.setAttribute('src', gvStudyInfo.AnimationPath)
    video.appendChild(source)

    if (autoState == '1') {
      video.play()
    }
  }
}

const closeMovie = () => {
  if (isYoutube == true) {
    $('#frAni').attr('src', gvStudyInfo.AnimationPath + '&autoplay=0')

    $('.video-iframe').each(function (index) {
      $(this).attr('src', $(this).attr('src'))
      return false
    })
  } else {
    $('#vdAni')[0].pause()
  }

  setWorking(false)

  $('.js-bg-movie').addClass('d-none')
}

function getWord() {
  try {
    wsBREB.GetQuizData(
      gvStudyId,
      gvStudentHistoryId,
      '2P',
      getWordOnSucc,
      getWordOnFail,
    )
  } catch (er) {
    alert('getWord Error : ' + er)
  }
}

function getWordOnSucc(p1, p2, p3) {
  try {
    if (p1 == '') {
      return
    }

    var bag = $.parseJSON(p1)

    if (bag.length == 0) {
      return
    }

    for (var i = 0; i < bag.length; i++) {
      if (
        gvStudyInfo.Step2Definition == 2 ||
        gvStudyInfo.Step2Definition == 4
      ) {
        if (bag[i].Chinese != null && bag[i].Chinese != '') {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th>' +
                bag[i].CorrectText +
                '</th><td style="font-family:YG230; lang="zh-CN;">' +
                bag[i].Chinese +
                '</td></tr>',
            )
        } else {
          if (bag[i].Britannica != null && bag[i].Britannica != '') {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].Britannica +
                  '</td></tr>',
              )
          } else {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].English +
                  '</td></tr>',
              )
          }
        }
      } else if (
        gvStudyInfo.Step2Definition == 5 ||
        gvStudyInfo.Step2Definition == 8
      ) {
        if (bag[i].Japanese != null && bag[i].Japanese != '') {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th>' +
                bag[i].CorrectText +
                '</th><td>' +
                bag[i].Japanese +
                '</td></tr>',
            )
        } else {
          if (bag[i].Britannica != null && bag[i].Britannica != '') {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].Britannica +
                  '</td></tr>',
              )
          } else {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].English +
                  '</td></tr>',
              )
          }
        }
      } else if (
        gvStudyInfo.Step2Definition == 6 ||
        gvStudyInfo.Step2Definition == 9
      ) {
        if (bag[i].Vietnamese != null && bag[i].Vietnamese != '') {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th>' +
                bag[i].CorrectText +
                '</th><td>' +
                bag[i].Vietnamese +
                '</td></tr>',
            )
        } else {
          if (bag[i].Britannica != null && bag[i].Britannica != '') {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].Britannica +
                  '</td></tr>',
              )
          } else {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].English +
                  '</td></tr>',
              )
          }
        }
      } else if (
        gvStudyInfo.Step2Definition == 7 ||
        gvStudyInfo.Step2Definition == 10
      ) {
        if (bag[i].Indonesian != null && bag[i].Indonesian != '') {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th>' +
                bag[i].CorrectText +
                '</th><td>' +
                bag[i].Indonesian +
                '</td></tr>',
            )
        } else {
          if (bag[i].Britannica != null && bag[i].Britannica != '') {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].Britannica +
                  '</td></tr>',
              )
          } else {
            $('#elWords table>tbody')
              .eq(0)
              .append(
                '<tr><th>' +
                  bag[i].CorrectText +
                  '</th><td>' +
                  bag[i].English +
                  '</td></tr>',
              )
          }
        }
      } else if (gvStudyInfo.Step2Definition == 0) {
        if (bag[i].Britannica != null && bag[i].Britannica != '') {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th>' +
                bag[i].CorrectText +
                '</th><td>' +
                bag[i].Britannica +
                '</td></tr>',
            )
        } else {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th>' +
                bag[i].CorrectText +
                '</th><td>' +
                bag[i].English +
                '</td></tr>',
            )
        }
      } else {
        if (bag[i].CorrectText.length < 11) {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th class="normal">' +
                bag[i].CorrectText +
                '</th><td>' +
                bag[i].Korean +
                '</td></tr>',
            )
        } else {
          $('#elWords table>tbody')
            .eq(0)
            .append(
              '<tr><th class="small">' +
                bag[i].CorrectText +
                '</th><td>' +
                bag[i].Korean +
                '</td></tr>',
            )
        }
      }
    }

    $('#boxWords .close')
      .eq(0)
      .on('click touchstart', function () {
        $('#boxWords').css('display', 'none')
      })

    $('#boxWords .print')
      .eq(0)
      .on('click touchstart', function () {
        gvStudentId = gvStudyInfo.StudentId
        var db_ip = ''
        db_ip = $('#db_ip').val()
        //alert(db_ip);

        var db_ip_03 = 'stu'

        switch (db_ip.split('.')[3]) {
          case '101':
            db_ip_03 = 'idv'
            break
          case '103':
            db_ip_03 = 'sch'
            break
          case '104':
            db_ip_03 = 'aca'
            break
          case '114':
            db_ip_03 = 'sch2'
            break
          case '121':
            db_ip_03 = 'dev'
            break
          default:
            db_ip_03 = 'stu'
            break
        }

        if (gvStudyInfo.Step2Definition == 0) {
          window.open(
            'http://ozreport.a1edu.com/OZ/Vocabulary.aspx?args1=' +
              gvStudyInfo.LevelRoundId +
              '&args2=' +
              gvCustId +
              '&args3=&args4=Y&args5=eng&args6=Y&args7=Y&args8=N&args9=' +
              gvStudentId +
              '&args10=' +
              db_ip_03,
            'POP_REPORT',
            'width=800,height=880,top=30,left=100',
          )
        } else if (
          gvStudyInfo.Step2Definition == 1 ||
          gvStudyInfo.Step2Definition == 3
        ) {
          window.open(
            'http://ozreport.a1edu.com/OZ/Vocabulary.aspx?args1=' +
              gvStudyInfo.LevelRoundId +
              '&args2=' +
              gvCustId +
              '&args3=&args4=Y&args5=kor&args6=Y&args7=Y&args8=N&args9=' +
              gvStudentId +
              '&args10=' +
              db_ip_03,
            'POP_REPORT',
            'width=800,height=880,top=30,left=100',
          )
        } else if (
          gvStudyInfo.Step2Definition == 2 ||
          gvStudyInfo.Step2Definition == 4
        ) {
          window.open(
            'http://ozreport.a1edu.com/OZ/Vocabulary.aspx?args1=' +
              gvStudyInfo.LevelRoundId +
              '&args2=' +
              gvCustId +
              '&args3=&args4=Y&args5=chi&args6=Y&args7=Y&args8=N&args9=' +
              gvStudentId +
              '&args10=' +
              db_ip_03,
            'POP_REPORT',
            'width=800,height=880,top=30,left=100',
          )
        } else if (
          gvStudyInfo.Step2Definition == 5 ||
          gvStudyInfo.Step2Definition == 8
        ) {
          window.open(
            'http://ozreport.a1edu.com/OZ/Vocabulary.aspx?args1=' +
              gvStudyInfo.LevelRoundId +
              '&args2=' +
              gvCustId +
              '&args3=&args4=Y&args5=jap&args6=Y&args7=Y&args8=N&args9=' +
              gvStudentId +
              '&args10=' +
              db_ip_03,
            'POP_REPORT',
            'width=800,height=880,top=30,left=100',
          )
        } else if (
          gvStudyInfo.Step2Definition == 6 ||
          gvStudyInfo.Step2Definition == 9
        ) {
          window.open(
            'http://ozreport.a1edu.com/OZ/Vocabulary.aspx?args1=' +
              gvStudyInfo.LevelRoundId +
              '&args2=' +
              gvCustId +
              '&args3=&args4=Y&args5=vtn&args6=Y&args7=Y&args8=N&args9=' +
              gvStudentId +
              '&args10=' +
              db_ip_03,
            'POP_REPORT',
            'width=800,height=880,top=30,left=100',
          )
        } else if (
          gvStudyInfo.Step2Definition == 7 ||
          gvStudyInfo.Step2Definition == 10
        ) {
          window.open(
            'http://ozreport.a1edu.com/OZ/Vocabulary.aspx?args1=' +
              gvStudyInfo.LevelRoundId +
              '&args2=' +
              gvCustId +
              '&args3=&args4=Y&args5=ine&args6=Y&args7=Y&args8=N&args9=' +
              gvStudentId +
              '&args10=' +
              db_ip_03,
            'POP_REPORT',
            'width=800,height=880,top=30,left=100',
          )
        }
      })
  } catch (e) {
    alert(' getQuizOnSucc error :' + e.message)
  }
}

function getWordOnFail(p1, p2) {
  //alert('getQuizOnFail');
}

const showWord = () => {
  clearTimeout(timerWord)

  if ($('#boxWords').css('display') == 'block') {
    $('#boxWords').css('display', 'none')
  } else {
    $('#boxWords').css('display', 'block')

    ChangeWordsBgImg()

    timerWord = setTimeout(function () {
      $('#boxWords').css('display', 'none')
    }, 8000)
  }
}

function closeWord() {
  clearTimeout(timerWord)

  $('#boxWords').css('display', 'none')
}

function ChangeWordsBgImg() {
  // 단어장 배경 이미지 삭제
  //if (document.getElementById("tblWords").offsetHeight < 160) {
  //    $('#imgBgWord').attr('src', 'img/EBK/cover/main_wordk1.png?ver=' + mTime);
  //}
  //else if (document.getElementById("tblWords").offsetHeight >= 160 && document.getElementById("tblWords").offsetHeight < 190) {
  //    $('#imgBgWord').attr('src', 'img/EBK/cover/main_wordk3.png?ver=' + mTime);
  //}
  //else if (document.getElementById("tblWords").offsetHeight >= 190 && document.getElementById("tblWords").offsetHeight < 230) {
  //    $('#imgBgWord').attr('src', 'img/EBK/cover/main_wordk5.png?ver=' + mTime);
  //}
  //else {
  //    $('#imgBgWord').css('display', 'none');
  //    $('#boxWords').css('background-color', 'white');
  //}
  $('#imgBgWord').css('display', 'none')
  $('#boxWords').css('background-color', 'white')
}

function goStudy() {
  if (
    gvStudyInfo.ListenAndRepeatYn == 'Y' &&
    gvStudyInfo.ReadingCompletedEB == 'N'
  ) {
    return false
  }

  const isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

  if (!isChrome) {
    setTimeout(function () {
      $('#flipbook').css('display', 'none')
    }, 200)

    setTimeout(function () {
      $('.flip-card-back').css('backface-visibility', 'visible')
    }, 400)
  }

  setSessionDefault()

  if (gvMode == 1) {
    if (gvStudyInfo.RgPointCount == 1) {
      if (gvStudyInfo.PointPopupYn == 'Y') {
        openPopup('#dvRgPointInfo2')
        $('#secondwarn1').html(
          getLanguage('이미 한 번 포인트를 획득한 학습입니다.').replace(
            '\n',
            '<br />',
          ),
        )
        $('#secondwarn2').html(
          getLanguage('두번째 학습을 통과하여도').replace('\n', '<br />'),
        )
        $('#secondwarn3').html(
          getLanguage('50% 포인트만 획득할 수 있습니다.').replace(
            '\n',
            '<br />',
          ),
        )
        $('#secondwarn4').html(
          getLanguage('계속 학습하시겠습니까?').replace('\n', '<br />'),
        )

        $('#thirdwarn1').html(
          getLanguage('이미 두 번 포인트를 획득한 학습입니다.').replace(
            '\n',
            '<br />',
          ),
        )
        $('#thirdwarn2').html(
          getLanguage(
            '학습을 완료하여도 \n 더 이상 포인트를 획득할 수 없습니다.',
          ).replace('\n', '<br />'),
        )
      } else {
        $('body').fadeOut('slow')

        setTimeout(function () {
          location.replace(nxStepUri)
        }, 800)
      }
    } else if (gvStudyInfo.RgPointCount > 1) {
      openPopup('#dvRgPointInfo3')
    } else {
      ShowPreference()
    }
  } else if (gvMode == 2) {
    gvFirstStep = ''
    setNextStep('')

    setTimeout(function () {
      location.replace(nxStepUri)
    }, 800)
  } else {
    if (!gvStudyInfo.Preference || gvStudyInfo.Preference == 0) {
      closeWord()
      ShowPreference()
    } else {
      location.replace(nxStepUri)
    }
  }
}

function ShowRatingBox() {
  $('#imgStar1').mouseover(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_filled.png')
  })
  $('#imgStar1').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_empty.png')
  })

  $('#imgStar2').mouseover(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_filled.png')
  })

  $('#imgStar2').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_empty.png')
  })

  $('#imgStar3').mouseover(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar3').attr('src', 'img/EB1/cover/star_filled.png')
  })

  $('#imgStar3').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar3').attr('src', 'img/EB1/cover/star_empty.png')
  })

  $('#imgStar4').mouseover(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar3').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar4').attr('src', 'img/EB1/cover/star_filled.png')
  })

  $('#imgStar4').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar3').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar4').attr('src', 'img/EB1/cover/star_empty.png')
  })

  $('#imgStar5').mouseover(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar3').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar4').attr('src', 'img/EB1/cover/star_filled.png')
    $('#imgStar5').attr('src', 'img/EB1/cover/star_filled.png')
  })

  $('#imgStar5').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar2').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar3').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar4').attr('src', 'img/EB1/cover/star_empty.png')
    $('#imgStar5').attr('src', 'img/EB1/cover/star_empty.png')
  })
}

function ShowPreference() {
  if (!gvStudyInfo.Preference || gvStudyInfo.Preference == 0) {
    closeWord()

    $('#cmtReRead')[0].innerText = getLanguage('다시 읽기')
    $('#cmtReRead2')[0].innerText = getLanguage(
      '(주의) 모든학습을 완료하고 평균 70점을 넘어야 포인트를 획득할 수 있습니다.',
    )

    openPopup('#dvPreference')
    ShowRatingBox()

    $('#btGoNext').css('display', 'none')
  } else {
    $('body').fadeOut('slow')

    setTimeout(function () {
      location.replace(getStepUri(getCurStep(gvStudyInfo.StatusCode)))
    }, 800)
  }
}

function openPopup(pDiv) {
  $('#dvPreference').css('display', 'none')
  $('#dvRgPointInfo2').css('display', 'none')
  $('#dvRgPointInfo3').css('display', 'none')

  $(pDiv).css('display', 'block')

  var filter = 'win16|win32|win64|mac'

  if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLocaleLowerCase()) < 0
  }

  $('.flip-card-front').css('display', 'none')
  $('.flip-card-inner').css('transform', 'rotateY(180deg)')
}

function closePopup() {
  $('#dvmenu').css('display', 'inline-block')

  isChrome =
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)

  if (!isChrome) {
    setTimeout(function () {
      $('#flipbook').css('display', 'block')
    }, 200)

    setTimeout(function () {
      $('.flip-card-back').css('backface-visibility', 'hidden')
    }, 400)
  }

  var filter = 'win16|win32|win64|mac'

  if (navigator.platform) {
    isMobile = filter.indexOf(navigator.platform.toLocaleLowerCase()) < 0
  }

  if (isMobile) {
    setTimeout(function () {
      $('.flip-card-front').css('display', 'block')
    }, 400)
  }

  $('.flip-card-inner').css('transform', 'rotateY(0deg)')
}

function BookPreference(pNum) {
  mStars = pNum
  let point = pNum * 10

  $('#popRating').css('z-index', '1')

  $('#imgStar1').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EBK/cover/star_filled.png')
  })

  $('#imgStar2').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EBK/cover/star_filled.png')
  })

  $('#imgStar3').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar3').attr('src', 'img/EBK/cover/star_filled.png')
  })

  $('#imgStar4').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar3').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar4').attr('src', 'img/EBK/cover/star_filled.png')
  })

  $('#imgStar5').mouseout(function () {
    $('#imgStar1').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar2').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar3').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar4').attr('src', 'img/EBK/cover/star_filled.png')
    $('#imgStar5').attr('src', 'img/EBK/cover/star_filled.png')
  })

  wsBREB.InsertBookPreference(
    gvStudyId,
    gvStudentHistoryId,
    point,
    InsertBookPreferenceOnSucc,
    InsertBookPreferenceOnFail,
  )
}

function InsertBookPreferenceOnSucc(p1, p2, p3) {
  try {
    setSessionDefault()

    goStudyAfterPreferenceSucc()
  } catch (er) {
    alert('InsertBookPreferenceOnSucc error :' + er)
  }
}

function goStudyAfterPreferenceSucc() {
  $('body').fadeOut('slow')

  setTimeout(function () {
    location.replace(getStepUri(getCurStep(gvStudyInfo.StatusCode)))
  }, 800)
}

function InsertBookPreferenceOnFail() {
  alert('InsertBookPreference Error')
}

function setSessionDefault() {
  let nextData = ''
  let prevData = JSON.parse(sessionStorage.getItem('studyInfo'))

  prevData['first_step'] = ''
  nextData = JSON.stringify(prevData)
  sessionStorage.setItem('studyInfo', nextData)
}

var audio = $('#player')

// for test [[
function goNextPage() {
  var nextPage = currentPage % 2 == 1 ? currentPage + 2 : currentPage + 1
  var j = 0

  while (quizData[j].Page != nextPage) {
    j++
  }

  quizNo = j
  //StnNo = quizData[i].StnNo;
  //currentPage = nextPage;

  remainCnt = chanceCnt

  setupQuiz()
}

function goNextQuiz() {
  quizNo++
  setupQuiz()
}
//]]
