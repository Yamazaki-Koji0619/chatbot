import React, {useState, useEffect, useCallback} from 'react';
import './assets/styles/style.css';
import {AnswersList, Chats} from './components/index'
import FromDialog from './components/Forms/FromDialog';
import {db} from './firebase/index'
import { ThemeProvider } from '@material-ui/core';

const App = () => {
  const [answers, setAnswers] = useState([]);
  const [chats, setChats] = useState([]);
  const [currentId, setCurrentId] = useState("init");
  const [dataset, setDataset] = useState({});
  const [open, setOpen] = useState(false);

  const displaynextQuestion = (nextQuestionId, nextDataset) => {
    addChats({
      text: nextDataset.question,
      type: 'question'
    })

    setAnswers(nextDataset.answers)
    setCurrentId(nextQuestionId)
  }

  const selectAnswer = (selectedAnswer, nextQuestionId) => {
    switch(true){

      case (nextQuestionId === 'contact'):
        handleClickOpen();
        break;

      case (/https:*/.test(nextQuestionId)):
        const a = document.createElement('a');
        a.href = nextQuestionId;
        a.target = '_blank';
        a.click();
        break;
        
      default:
        addChats({
          text:selectedAnswer,
          type: 'answer'
        })

        setTimeout(() => displaynextQuestion(nextQuestionId, dataset[nextQuestionId]),1000)
        break;
    }
  }

  const addChats = (chat) => {
    setChats(prevChats => {
      return [...prevChats, chat]
    })
  }

  const handleClickOpen = () => {
    setOpen(true)
  };

  const handleClose = useCallback(() => {
    setOpen(false)
  }, [setOpen]);

  useEffect(() => {
    (async() => {
      const initDataset = {}
      await db.collection('questions').get().then(snapshots => {
        snapshots.forEach(doc => {
          const id = doc.id
          const data = doc.data()
          initDataset[id] = data
        })
      })

      setDataset(initDataset)
      displaynextQuestion(currentId, initDataset[currentId])
    })()
  },[])

  useEffect(() => {
    const scrollArea = document.getElementById('scroll-area');
    if(scrollArea){
      scrollArea.scrollTop = scrollArea.scrollHeight
    }
  })

  return (
    <section className="c-section">
      <div className="c-box">
        <Chats chats={chats} />
        <AnswersList answers={answers} select={selectAnswer} />
        <FromDialog open={open} handleClose={handleClose} />
      </div>
    </section>
  );
}

export default App