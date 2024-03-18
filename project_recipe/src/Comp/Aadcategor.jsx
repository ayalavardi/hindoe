import {  useSelector } from "react-redux";
import swal from "sweetalert";
import service_catgory from "./service_catgory";

export const Aadcategor = () => {
    const CarrentUser = useSelector(x => x.currentUser);
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
            const categor = {
                name: event.target[0].value,
            }
            service_catgory.addCategory(categor,CarrentUser.id)
            swal("נוסף בהצלחה", "had master", "success")
        }
        else alert("הלו!! הכנס קטגוריה! טמבל")      
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