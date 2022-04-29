import React, { useEffect, useState } from 'react'
import alanBtn from '@alan-ai/alan-sdk-web'
import Newscards from './components/NewsCArs/Newscards'

function App() {
  const [articles, setarticels] = useState([])
  const [activeart, setactiveart] = useState(-1)

  const alanKey = 'e6d956daf6e06544fa8e713eadfb89c92e956eca572e1d8b807a3e2338fdd0dc/stage'
  useEffect(() => {
    alanBtn(({
      key: alanKey,
      onCommand: ({ command, articles }) => {
        if (command === 'newnews') {
          // alert('this code was executed')
          console.log("data11",articles)
          setarticels(articles)
        }else if(command === 'highlight'){
          console.log('cvv1')
          setactiveart((pre)=>pre+1)
        }
      }
    }))

  }, [])
  console.log('cvv11', activeart)

  return (
    <div className="App">
      <h2 className='title'>AI NEWS WEB APP</h2>
      <Newscards data={articles} activeart={activeart} />

    </div>
  );
}

export default App;
