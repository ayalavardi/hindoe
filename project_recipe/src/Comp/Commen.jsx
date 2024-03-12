import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { addComment } from './Set'
import { useState } from 'react'
import EmojiPicker from 'emoji-picker-react';


export const Commen = (prop) => {
    function CommentForm() {
  const [chosenEmoji, setChosenEmoji] = useState(null);

  const handleEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
  };}
    debugger
    const currntUser = useSelector(x => x.currentUser)
    const listCommentstorecipes = useSelector(x => x.CommentsToRecipes)
    const users = useSelector(x => x.users)
    let id = prop.id
    const dispatch = useDispatch()
    const [display, setDisplay] = useState(true)
    let Code = listCommentstorecipes[listCommentstorecipes.length - 1].code
    const cuc = users.filter(x=>x.mail==currntUser.mail)[0].id
    let z
    const AddComment = (event) => {
        debugger
        const Commen = {
            code: Code + 1,
            recipid: id,
            codeuser: cuc,
            Comments: event.target.value
        }
        dispatch(addComment(Commen))
        setDisplay(false)
    }
    return <>
        {listCommentstorecipes.map((c)=>c.recipid==id&&<p className='Comments' key={c.Comments}><p className='nameuser'>{z=(users.filter(x=>x.id==c.codeuser))[0].name}</p>{c.Comments}</p>)}
       { currntUser.mail!=""&&display&& <p>הוספת תגובה</p> }
       { currntUser.mail!=""&&display&&<input placeholder={'מחכים לתגובה שלך'} onBlur={(e) => { AddComment(e) }}></input>}
    </>
}