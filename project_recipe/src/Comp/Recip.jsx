import * as React from 'react';
import { useSelector } from 'react-redux'
import '../Style/style.css'
import RecipeCard from './Cardrecip';

export const RecipeReviewCard = () => {
  const list = useSelector(x => x.recipes)
  const listLevel = useSelector(x => x.Levels)
  const listCategories = useSelector(x => x.Categories)
  const [Sort, setSort] = React.useState([])
  let [OkLevel, setOkLevel] = React.useState(false)
  let [OkCatigory, setOkCatigory] = React.useState(false)
  // const cCateg=listCategories.filter(x=>x.codeCateg==categorid)

  const Level = (e) => {
    setSort(list.filter(a => a.level == e))
    { Sort && setOkLevel(true) }
  }

  const Catigory = (e) => {
    setSort(list.filter(a => a.codeCateg == e))
    { Sort && setOkCatigory(true) }
  }
  const cancel = () => {
    setOkLevel(false)
    setOkCatigory(false)
  }
  return <>
    <select id="SlectorLevel" onChange={(e) => Level(e.target.value)} className='selectit'>
      <option value="" disabled selected hidden>סנן לפי רמה</option>
      {listLevel.map((c, index) => <option key={index} value={c.code} className='option' >{c.name}</option>)}
    </select>
    <select id="SlectorCatigory" onChange={(e) => Catigory(e.target.value)} className='selectit'>
      <option value="" disabled selected hidden>סנן לפי קטגוריה</option>
      {listCategories.map((c, index) => <option key={index} value={c.codeCateg} className='option'>{c.name}</option>)}
    </select>
    <button className='cancel' onClick={() => cancel()}>✖️</button>
    {(OkCatigory || OkLevel) && Sort.map((i) => <RecipeCard dataA={i.name} dataB={i.instraction} dataC={i.level} dataD={listCategories.filter(x=>x.codeCateg==i.codeCateg)[0].name} dataE={i.recippic} dataF={i.recipid}></RecipeCard>)}
    {!OkLevel && !OkCatigory && list.map((i) => <RecipeCard dataA={i.name} dataB={i.instraction} dataC={i.level} dataD={listCategories.filter(x=>x.codeCateg==i.codeCateg)[0].name}dataE={i.recippic} dataF={i.recipid}></RecipeCard>)}
  </>
  //   {(OkCatigory || OkLevel) && Sort.map((i) => <RecipeCard dataA={i.name} dataB={i.instraction} dataC={i.level} dataD={i.codeCateg} dataE={i.recippic} dataF={i.recipid}></RecipeCard>)}
  //   {!OkLevel && !OkCatigory && list.map((i) => <RecipeCard dataA={i.name} dataB={i.instraction} dataC={i.level} dataD={i.codeCateg} dataE={i.recippic} dataF={i.recipid}></RecipeCard>)}
  // </>
}
