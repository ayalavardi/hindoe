import { useDispatch, useSelector } from "react-redux";
import { addCatergy } from "./Set";
import swal from "sweetalert";

export const Aadcategor = () => {
    const categories=useSelector(x=>x.Categories)
    const dispatch = useDispatch();   
    /////Change---------------------------------------------------------------
    const Change = (event) => {
        debugger
        if (!event.target[0].value) {
             return false;
        }
        return true
    } 
    // ---send-------------------------------------------------------------
    const send = (event) => {
          event.preventDefault()
        if (Change(event)) {
            const id=categories[categories.length-1].codeCateg
            const categor = {
                name: event.target[0].value,
                codeCateg:id+1             
            }
            dispatch(addCatergy(categor))
            swal("נוסף בהצלחה", "had master", "success")
        }
        else alert("הלו!! הכנס רמה! טמבל")      
    }
    return <>
        {/* ----categor------------------------------ */}
        <form className='login' onSubmit={(e) => send(e)}>            
            {/* ----level------------------------------ */}
            <label htmlFor={'categor'}>add categor:</label>
            <br></br>
            <input id={'categor'} placeholder={'input categor '} ></input>
            <br></br>
            <input type={'submit'} value={'send'} className="btns"></input>
            <br></br>            
        </form>

    </>
}