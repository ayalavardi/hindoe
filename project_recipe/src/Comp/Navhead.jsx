import { NavLink,useNavigate } from 'react-router-dom';
import '../Style/style.css'
import { useSelector } from 'react-redux';
import person from'../Pic/personal.png'
import swal from 'sweetalert';
export const Navhead = (props) => {
    const nav = useNavigate()
    const cuser = useSelector(x => x.currentUser)
    const manager = useSelector(x => x.Manager)
    const { set } = props
    const pa = () => {
        debugger
        if(cuser.mail){
        // set(false) 
        nav(`Operations`) } 
        else swal(`נכשל`,"עליך להירשם למערכת","error")     
    }
    const flogin = () => {
        nav(`/Login`)
    }
    const fsingin = () => {
        nav(`/Singin`)
    }
    
    
    const nameorm = () => {
        if(cuser.mail==manager.mail)
        return true
        return false
          }
    return <>
        <div className={'navhead'}>
            <button className='btnregist' onClick={flogin}>התחברות</button>
            <button className='btnregist' onClick={fsingin}>הרשמה</button>
            {cuser.status=="advertiser"&&<button className='btnpersonal' onClick={() => pa()}>👤</button>}
            {/* <NavLink to='' className={'link'}onClick={() => pa()}><img src={person} width={'40px'} height={'40px'}></img></NavLink>  */}
            {/* <img src={person} width={'40px'} height={'40px'}></img> */}
            {!nameorm()&&<label className='a' >{cuser.name}</label>}
            {nameorm()&&<label className='a' >מנהל/ת</label>}
        </div>
        <br/><br/><br/><br/>
    </>
}