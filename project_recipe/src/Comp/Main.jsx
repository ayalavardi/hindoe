import { Provider } from "react-redux";
import { Nav } from "./Nav"
import { Navhead } from "./Navhead";
import { Routing } from "./Routing"
import { BrowserRouter } from "react-router-dom";
import store from "./Store";
import { useEffect, useState } from "react";
import service from "./service";
import { useDispatch, useSelector } from "react-redux";
import { addCatergy, addLelel } from "./Set";


export const Main = () => {
    const dispatch = useDispatch(); 
    
    useEffect(() => {
        const fetchData = async () => {
            try {
              const categories = await service.getCatergy(); // פנייה לפונקציה הנכונה
              const levels = await service.getLevel();
              const ingredients = await service.getIngredient();
              dispatch(addCatergy(categories));
              // ניתן להשתמש במידע מהשרת כרצונך
              console.log(categories, levels, ingredients);
            } catch (error) {
              console.error("Error fetching data:", error);
            }
          };
        // const fetchData = async () => {
            // const categories = await service.getCategory();
            // const levels = await service.getLevel();
            // const ingredients = await service.getIngredient();
            // alert("11")
            // dispatch(addCatergy(await service.getCatergy()));
            // alert("22")
            // setLevels(await service.getLevel());
            // setIngreads(await service.getIngredient());
        // };
        fetchData();
    }, []);
    let [bool,setBoll]=useState(true)
        return <>
                <BrowserRouter>
                  {bool&&  <Navhead set={setBoll}></Navhead>}
                  { <Nav set={setBoll}></Nav>}
                    <Routing></Routing>
                </BrowserRouter>
            {/* </Provider> */}
        </>
    }
