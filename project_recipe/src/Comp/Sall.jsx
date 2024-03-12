import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Commen } from './Commen'
import '../Style/sall.css'

export const Sall = () => {
    const recipes = useSelector(x => x.recipes)
    const ingread = useSelector(x => x.IngredientsToRecipes)
    const Ingredients = useSelector(x => x.Ingredients)
    let param = useParams()
    let id = param.id
    const crec = recipes.find(r => r.recipid == id)
    const ingreadids = ingread.filter(i => i.recipid == id)
    const filteredNames = ingreadids.map(obj => obj.Ingredid)
    let namesArray
    let filteredObjects
    return <>

        <div className='sall'>
            <p className='title'>{crec.name} </p>
            <img src={crec.recippic} alt="תמונה" width={450} />
        </div>
        <div className='sall' id='dtls'>
            <p className='title'>instractions</p>
            <p>{crec.instraction} </p>
            <p className='title'>ingreadients</p>
            
            {/* --------------------------------------------------------- */}
            <div>
                {filteredNames.map(code => {
                    filteredObjects = Ingredients.filter(obj => obj.Ingredid === code);
                    namesArray = filteredObjects.map(obj => obj.name);

                    return (
                        <div key={code}>
                            <ul>
                                {namesArray.map(name => (
                                    <li key={name}>{name}</li>))}
                            </ul>
                        </div>);
                })}
            </div>
        </div>
        <div className='wrsppComments'>
            <p className='titleCommen'>Comments➕</p>
            <Commen id={id}></Commen>
        </div>
    </>
}