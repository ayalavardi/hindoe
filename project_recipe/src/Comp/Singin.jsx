import { useDispatch, useSelector } from "react-redux"
import { addUser, setCurrentUser } from "./Set"
import swal from "sweetalert"
import { useNavigate } from "react-router-dom"
import '../Style/staylregister.css'
import service_advertiser from "./service_advertiser"
import service_user from "./service_user"
import { useRef } from "react"

export const Singin = () => {
  const nameRef=useRef()
  const emailRef=useRef()
  const passwordRef=useRef()
  const phoneRef=useRef()
  const enphoneRef=useRef()
  const dispatch = useDispatch()
  const list = useSelector(x => x.users)
  const nav = useNavigate()

  const check = (mail, pass) => {
    let bool = true
    // list.map((u) => { if (u.mail == mail) { alert("כתובת האימייל קיימת במערכת"); bool = false; return } })
    if (!bool) return false
    if (pass.length < 4) { alert("היי!! הסיסמא קצרה מדי !! לפחות 4 תווים"); return false }
    // if (!mail.include('@')) { alert(" ! כפרה אמייל לא תקין"); return false }
    return true
  }
  const sendcust = async () => {
    debugger
    const name = nameRef.current.value
    if (check(emailRef.current.value,passwordRef.current.value)) {
      
      const user = {
        name: name,
        email: emailRef.current.value,
        password: passwordRef.current.value
      }
      const r =await service_user.addUser(user)
      const curentuser = {
        name: name,
        mail: emailRef.current.value,
        id:r.user._id,
        status:"user"
      }
      console.log("tt",r);
            dispatch(setCurrentUser(curentuser))

      // localStorage.setItem('token',r.token)
      swal(`שלום${name}`, "התחברת בהצלחה", "success");
      nav(`/Home`)
    }
  }
  const sendAd = async () => {
    debugger
    const name = nameRef.current.value
    if (check(emailRef.current.value,passwordRef.current.value)) {
      if (!phoneRef.current.value)
        alert("עבור מפרסם טלפון- חובה")
      else {
        
        const advertiser = {
          name: name,
          email: emailRef.current.value,
          password: passwordRef.current.value,
          phone: phoneRef.current.value,
          AnotherPhone: enphoneRef.current.value,
        }
        const r = await service_advertiser.addAdvertiser(advertiser)
        console.log("i",r);
        const curentuser = {
          name: name,
          mail: emailRef.current.value,
          id:r.advertiser._id,
          status:"advertiser"
        }
        dispatch(setCurrentUser(curentuser))
        // localStorage.setItem('token',r.token)
        swal(`שלום${name}`, "התחברת בהצלחה", "success");
        nav(`/Home`)
      }
    }
  }
  const toLogin = () => {
    nav(`/Login`)
  }
  return <>
    <div className="wraped">
      <form className='login' onSubmit={(e) => sendAd(e)}>
        <label htmlFor={'name'} >name:</label><br></br>
        <input id={'name'} ref={nameRef} placeholder={'input name'} required></input>
        <br></br>
        <label htmlFor={'email'}>Email:</label><br></br>
        <input id={'email'} ref={emailRef} placeholder={'input email'}required></input>
        <br></br>
        <label htmlFor={'pass'}>Password:</label><br></br>
        <input id={'pass'} ref={passwordRef} type={'password'} placeholder={'input password'}required></input>
        <br></br>
        <label htmlFor={'phone'}>phone:</label><br></br>
        <input id={'phone'} ref={phoneRef} placeholder={'input phone'}></input>
        <br></br>
        <label htmlFor={'anotherphone'}>another phone:</label><br></br>
        <input id={'anotherphone'} ref={enphoneRef} placeholder={'input another phone'}></input>
        <br></br>
        <input type={'button'} value={'הרשם כמפרסם'} className="btns" onClick={() => sendAd()}></input>
        <input type={'button'} value={' הרשם כלקוח'} className="btns" onClick={() => sendcust()}></input>
        <br></br>
      </form>
      <button className="btns" onClick={() => toLogin()}>להתחברות</button>
    </div>
    <h1>!ברוכים הבאים לאתר  מאמבורגר</h1>
    <h4>אם אתם אוהבים לבשל ולטעום מנות טעימות בבית, אתר זה הוא המקום המושלם עבורכם</h4>
    <div>
      כאן תוכלו לגלות מאות מתכונים מכל העולם,
      <br />
      לשתף במתכונים שלכם ולהתנסות בקריאת מתכונים חדשים ומרתקים ממגוון רחב של סגנונות וטעמים.
      <br />
      כדי להתחיל, אנא מלאו את הפרטים הבסיסיים שלכם וצרו לכם חשבון אישי.
      <br />
      זה פשוט וקל, ותוכלו לגלות את כל היתרונות שהאתר מציע.
      <br />
      בצעד הבא, תוכלו לשתף את המתכונים שאתם אוהבים ולקבל המלצות ממתכונים מנוסים בקהילה שלנו.
      <br />
      אנחנו מקווים שתהנו מהשהייה אצלנו ושתמצאו המון השראה טובה לבישולים משובחים.
    </div>
    <h3>אז למה תחכו? הצטרפו אלינו עוד היום והתחילו לגלות את עולם הטעמים שבפניכם!</h3>
  </>
}