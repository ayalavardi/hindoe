import { Route, Routes } from 'react-router-dom'
import { Singin } from './Singin'
import { Main } from './Main'
import { Navhead } from './Navhead'
import { Home } from './Home'
import { Galery } from './Galery'
import { RecipeReviewCard } from './Recip'
import { Personalyaera } from './Personalyaera'
import { Sall } from './Sall'
import { Commen } from './Commen'
import { Operations } from './Operations'
import { Aadrecip } from './Aadrecip'
import { Login } from './Login'
import { Aadlevel } from './Aadlevel'
import { AadCity } from './AadCity'
import ApartmentsList from './apartmentsList'
import RecipeCard from './Cardrecip'
export const Routing = () => {
    return <>
        <Routes>

            <Route path={'/'} element={<Home></Home>}></Route>
            <Route path={'Main'} element={<Main></Main>}></Route>
            <Route path={'Home'} element={<Home></Home>}></Route>
            <Route path={'login'} element={<Login></Login>}></Route>
            <Route path={'Singin'} element={<Singin></Singin>}></Route>
            <Route path={'Navhead'} element={<Navhead></Navhead>}></Route>
            <Route path={'Galery'} element={<Galery></Galery>}></Route>
            <Route path={'Operations'} element={<Operations></Operations>}>
                <Route path={'addtrip'} element={<Aadlevel></Aadlevel>}></Route>
                <Route path={'login'} element={<Login></Login>}></Route>
                <Route path={'Singin'} element={<Singin></Singin>}></Route>
                <Route path={'aadCity'} element={<AadCity></AadCity>}></Route>
            </Route>
            <Route path={'RecipeReviewCard'} element={<RecipeReviewCard></RecipeReviewCard>}></Route>
            <Route path={'Personalyaera'} element={<Personalyaera></Personalyaera>}></Route>
            <Route path={'Sall/:id'} element={<Sall></Sall>}></Route>
            <Route path={'Aadrecip'} element={<Aadrecip></Aadrecip>}>
                <Route path={'Commen'} element={<Commen></Commen>}></Route>
            </Route>
            <Route path={'ApartmentsList'} element={<ApartmentsList></ApartmentsList>}></Route>
            <Route path={'RecipeCard/:id'} element={<RecipeCard></RecipeCard>}></Route>

        </Routes>
    </>
}