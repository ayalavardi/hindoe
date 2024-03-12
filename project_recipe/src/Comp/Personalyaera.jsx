import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import { IconButton, Tooltip } from '@mui/material';
import { display } from '@mui/system';
import { useSelector } from 'react-redux'
import '../Style/Myarea.css'
import { useNavigate } from 'react-router-dom';
import RecipeCard from './Cardrecip';

export const Personalyaera = () => { 
    const recipes = useSelector(x => x.recipes)
    let [okMyrecipe, setokMyrecipe] = React.useState(false)
    const currntUser = useSelector(x => x.currentUser)
    const users = useSelector(x => x.users)
    const [Sort, setSort] = React.useState([])
    const cuc = users.filter(x=>x.mail==currntUser.mail)[0].id

let nav=useNavigate()
    const Myrecipe = () => {
        debugger
        setSort(recipes.filter(a => a.codeuser == cuc))
        { Sort && setokMyrecipe(true) }
    }
   
    return <>
        {!okMyrecipe && <Tooltip sx={{marginLeft:30 }}>
            <IconButton
                onClick={()=>{nav(`/Operations`)}}
            ><Avatar className='Big' sx={{ width: 450, height: 450, bgcolor: '#4DFF00' }} >operations</Avatar></IconButton>
        </Tooltip>}
       {!okMyrecipe &&<Tooltip sx={{marginLeft:20}}>
            <IconButton
                onClick={()=>Myrecipe()}
            ><Avatar className='Big' sx={{ width: 450, height: 450, bgcolor: '#4DFF00'}} >My recipes</Avatar></IconButton>
        </Tooltip>}
        {okMyrecipe && Sort.map((i) => <RecipeCard dataA={i.name} dataB={i.instraction} dataC={i.level} dataD={i.codeCateg} dataE={i.recippic} dataF={i.recipid}></RecipeCard>)}
    </>
}

 
