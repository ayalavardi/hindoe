import { Provider } from "react-redux";
import { Nav } from "./Nav"
import { Navhead } from "./Navhead";
import { Routing } from "./Routing"
import { BrowserRouter } from "react-router-dom";
import store from "./Store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCatergy, addLelel } from "./Set";


export const Main = () => {
    
 
    let [bool,setBoll]=useState(true)
        return <>
                <BrowserRouter>
                  <Navhead set={setBoll}></Navhead>
                  { <Nav set={setBoll}></Nav>}
                    <Routing></Routing>
                </BrowserRouter>
            {/* </Provider> */}
        </>
    }
