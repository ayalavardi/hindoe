import { useSelector } from "react-redux"
import { Aadcategor } from "./Aadcategor"
import { Aadingread } from "./Aadingread"
import { Aadlevel } from "./Aadlevel"
import { Aadrecip } from "./Aadrecip"
import '../Style/staylregister.css'

export const Galery = () => {
   debugger
  const recipies=useSelector(x=>x.recipes)
  const images=recipies.map((r)=>r.recippic)
   return <>
<div className="wraped">
   {images.map((i)=><img src={i}></img>)}
   </div>
    </>
}