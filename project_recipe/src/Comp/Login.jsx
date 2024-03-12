import '../Style/style.css'
import '../Style/staylregister.css'
import { setCurrentUser } from './Set'
import swal from 'sweetalert'
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Margin } from '@mui/icons-material'
import service_advertiser from './service_advertiser'
import service_user from './service_user'

export const Login = () => {
    const dispatch = useDispatch();
    const nav = useNavigate()
    const emailRef = useRef()
    const passwordRef = useRef()
    useEffect(() => { 
        document.querySelectorAll('.btns').forEach(button => {
        button.onmousemove = (e) => {
            const x = e.pageX - e.target.offsetLeft
            const y = e.pageY - e.target.offsetTop

            e.target.style.setProperty('--x', `${ x }px`)
            e.target.style.setProperty('--y', `${ y }px`)        };
      });
    });
   
    const senduser = async (e) => {
        e.preventDefault();

        // debugger
        try {
            const user = {
                password: passwordRef.current.value,
                email: emailRef.current.value
            }
            const r = await service_user.getUser(user)
            debugger
            console.log("gfhgbgvh", r);
            localStorage.setItem('token', r.token)
            const curentuser = {
                mail: emailRef.current.value,
                name: r.user ? r.user.name : 'אין שם',
                id: r.user._id,
                status: "user"
            }
            dispatch(setCurrentUser(curentuser))
            swal(`שלום${r.user.name}`, "התחברת בהצלחה", "success")

        }
        catch (error) {
            console.log("error", error);
        }
    }
    const sendad = async (e) => {
        e.preventDefault();
        // debugger            
        console.log("rrג");

        try {
            const adv = {
                password: passwordRef.current.value,
                email: emailRef.current.value
            }

            const o = await service_advertiser.getAdvertiser(adv);
            console.log("rr", o);
            localStorage.setItem('token', o.token);

            const curentuser = {
                mail: emailRef.current.value,
                name: o.advertiser.name,
                id: o.advertiser._id,
                status: "advertiser"
            }
            dispatch(setCurrentUser(curentuser));
            swal(`שלום ${o.advertiser.name}`, "התחברת בהצלחה", "success");
            nav(`/Home`);
        } catch (error) {
            console.log("error", error);
        }
    }

    const toSignin = () => {
        nav(`/Singin`)
    }
    return <>
         <div className='wraper'>
            <div className="wraped">
                <form className='login' onSubmit={(e) => sendad(e)}>
                    <label htmlFor={'email'}>Email:</label>
                    <br></br>
                    <input id={'email'} ref={emailRef} placeholder={'input email'}/>
                    <br></br>
                    <label htmlFor={'pass'}>Password:</label>
                    <br></br>
                    <input id={'pass'} type={'password'} ref={passwordRef} placeholder={'input password'}></input>
                    <br></br>
                    <button className="btns" onClick={(e) => sendad(e)}>
                        <span>התחבר כמפרסם</span>
                    </button>
                    <button className="btns" onClick={(e) => senduser(e)}>
                        <span>התחבר כלקוח</span>
                    </button>
                    {/* <input type={'button'} value={'התחבר מפרסם'} onClick={() => sendad()} className="btns"></input> */}
                    {/* <input type={'button'} value={'התחבר לקוח'} onClick={() => senduser()} className="btns"></input> */}
                    <br></br>
                </form>
                {/* <button className="btns" onClick={() => toSignin()}> */}
                <button className="btns">
                    <span>signin גהגהגהגהגהגהג</span>
                </button>
            </div>
            {/* <div className="wraped">
                <form className='login' onSubmit={(e) => send(e)}>
                    <label htmlFor={'email'}>Email:</label>
                    <br></br>
                    <input id={'email'} placeholder={'input email'}></input>
                    <br></br>
                    <label htmlFor={'pass'}>Password:</label>
                    <br></br>
                    <input id={'pass'} type={'password'} placeholder={'input password'}></input>
                    <br></br>
                    <input type={'submit'} value={'send'} className="btns"></input>
                    <button className="btns" onClick={() => toSignin()}>signin</button>
                    <br></br>
                </form>
            </div> */}
        </div>
        {/* <h1>!!שבת אלינו, ידיד הבישול, אח למטבח, ורע לטעמים מיוחדים</h1>
        <h4>יש לך הרבה טעמים לגלות ואנחנו כאן כדי להיות לצידך בכל הקרבות הטעימים שלך</h4>
        <div>
            הזן את הפרטים שלך,
            <br />
            והתחבר לעולם הטעמים והמתכונים המרשימים שלנו.
            <br />
            תראה מה יש חדש במבחר ותתחיל לבשל, לשתות, ולחלום על המתכונים הבאים.
        </div>
        <h2>אז מה אתה מחכה? התחבר ותחגוג טעמים חדשים</h2> */}
    </>

}