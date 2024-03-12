import { useDispatch, useSelector } from "react-redux";
import {  addIngread } from "./Set";
import swal from "sweetalert";

export const Aadingread = () => {
    const dispatch = useDispatch(); 
    const eee=useSelector(e=>e.Ingredients)  
    /////Change---------------------------------------------------------------
    const Change = (event) => {
        if (!event.target[0].value) {
             return false;
        }
        return true
    } 
    // ---send-------------------------------------------------------------
    const send = (event) => {
        debugger
          event.preventDefault()
          let id=eee[eee.length-1].Ingredid
        if (Change(event)) {
            const ingreadient = {
                name: event.target[0].value ,
                Ingredid:id+1             
            }
            dispatch(addIngread( ingreadient ))
            swal(`נוסף בהצלחה,${ingreadient.name}`, "had master", "success")
        }
        else alert("הלו!! הכנס רמה! טמבל")      
    }
    return <>
        {/* ----categor------------------------------ */}
        <form className='login' onSubmit={(e) => send(e)}>            
            {/* ----level------------------------------ */}
            <label htmlFor={'ingread'}>add ingreadient:</label>
            <br></br>
            <input id={'ingread'} placeholder={'input name ingreadient '} ></input>
            <br></br>
            <input type={'submit'} value={'send'} className="btns"></input>
            <br></br>           
        </form>
    </>
}